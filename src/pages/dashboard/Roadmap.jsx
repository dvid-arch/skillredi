

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function Roadmap() {
    const data = {
        "modules": [
            {
                "id": "intro",
                "title": "Getting Started",
                "status": "completed",
                "prerequisites": []
            },
            {
                "id": "fundamentals",
                "title": "Core Concepts",
                "status": "available",
                "prerequisites": ["intro"]
            },
            {
                "id": "advanced",
                "title": "Deep Dive",
                "status": "locked",
                "prerequisites": ["fundamentals"]
            }
        ]
    }
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('viewBox', '0 0 800 600');

        // Layout: simple tree
        const root = d3.stratify()
            .id(d => d.id)
            .parentId(d => d.prerequisites[0] || null)(data.modules);

        const treeLayout = d3.tree().size([800, 600]);
        treeLayout(root);

        // Links
        svg.selectAll('path.link')
            .data(root.links())
            .join('path')
            .attr('class', 'link')
            .attr('d', d3.linkHorizontal()
                .x(d => d.y)
                .y(d => d.x)
            );

        // Nodes
        const node = svg.selectAll('g.node')
            .data(root.descendants())
            .join('g')
            .attr('class', 'node')
            .attr('transform', d => `translate(${d.y},${d.x})`);

        node.append('circle')
            .attr('r', 20)
            .on('click', d => '');

        node.append('text')
            .attr('dy', 4)
            .attr('x', 30)
            .text(d => d.data.title);
    }, [data]);

    return <svg ref={svgRef} width="100%" height="100%" />;
}

