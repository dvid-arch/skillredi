import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const CourseMap = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Course data with structure matching the image
  const courseData = {
    title: "Functions Forest",
    subtitle: "Master JavaScript Functions",
    modules: [
      {
        id: "01",
        title: "What is a Function?",
        subtitle: "Fundamentals & concepts",
        status: "completed"
      },
      {
        id: "02", 
        title: "Function Syntax",
        subtitle: "Declaration & calling",
        status: "locked"
      },
      {
        id: "03",
        title: "Parameters & Arguments",
        subtitle: "Passing Functions",
        status: "locked"
      },
      {
        id: "04",
        title: "Return Values",
        subtitle: "Getting data back",
        status: "locked"
      },
      {
        id: "05",
        title: "Function Scope",
        subtitle: "Variable visibility",
        status: "locked"
      },
      {
        id: "06",
        title: "Function Expressions",
        subtitle: "Alternative Syntax",
        status: "locked"
      },
      {
        id: "07",
        title: "Arrow Functions",
        subtitle: "Modern JS syntax",
        status: "locked"
      },
      {
        id: "08",
        title: "Call back",
        subtitle: "Functions as Arguments",
        status: "locked"
      }
    ],
    // Define connections between modules
    connections: [
      { source: "01", target: "02" },
      { source: "02", target: "03" },
      { source: "03", target: "04" },
      { source: "04", target: "05" },
      { source: "05", target: "06" },
      { source: "06", target: "07" },
      { source: "07", target: "08" }
    ]
  };

  // Calculate layout based on screen size
  const updateDimensions = () => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect();
      const height = Math.max(600, width * 0.6); // Maintain aspect ratio with minimum height
      setDimensions({ width, height });
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!svgRef.current || dimensions.width <= 0) return;
    
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    
    // Color scheme
    const colors = {
      completed: "#206A5D",
      ongoing: "#ffffff",
      locked: "#dddddd",
      text: "#555555",
      line: "#cccccc",
      title: "#333333"
    };
    
    const getStatusColor = (status) => {
      return colors[status] || colors.locked;
    };

    // Create main group and apply margin
    const margin = { top: 60, right: 20, bottom: 60, left: 20 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;
    
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    // Create paths first (so they're behind nodes)
    const connectionsGroup = g.append("g").attr("class", "connections");
    
    // Calculate node positions based on layout pattern in image
    // This creates a zigzag pattern that works well for this course map
    const nodePositions = {};
    const calculatePositions = () => {
      const totalNodes = courseData.modules.length;
      const nodesPerRow = width < 600 ? 2 : (width < 900 ? 3 : 4);
      const horizontalSpacing = width / (Math.min(totalNodes, nodesPerRow) + 1);
      const rows = Math.ceil(totalNodes / nodesPerRow);
      const verticalSpacing = height / (rows + 1);
      
      courseData.modules.forEach((module, i) => {
        const row = Math.floor(i / nodesPerRow);
        const col = i % nodesPerRow;
        const isEvenRow = row % 2 === 0;
        
        // For even rows, go left to right; for odd rows, go right to left to create zigzag
        const adjustedCol = isEvenRow ? col : (nodesPerRow - 1 - col);
        
        nodePositions[module.id] = {
          x: (adjustedCol + 1) * horizontalSpacing,
          y: (row + 1) * verticalSpacing
        };
      });
    };
    
    calculatePositions();
    
    // Draw connections
    courseData.connections.forEach(conn => {
      const source = nodePositions[conn.source];
      const target = nodePositions[conn.target];
      
      if (!source || !target) return;
      
      // Create a curved path between nodes
      const path = d3.path();
      path.moveTo(source.x, source.y);
      
      // If nodes are on same row, use straight line
      if (Math.abs(source.y - target.y) < 10) {
        path.lineTo(target.x, target.y);
      } else {
        // Create a smooth curve for connecting nodes on different rows
        const controlPointY = (source.y + target.y) / 2;
        path.bezierCurveTo(
          source.x, controlPointY,
          target.x, controlPointY,
          target.x, target.y
        );
      }
      
      connectionsGroup.append("path")
        .attr("d", path.toString())
        .attr("fill", "none")
        .attr("stroke", colors.line)
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "5,5");
    });
    
    // Draw nodes
    const nodeRadius = width < 500 ? 35 : 45;
    
    const nodes = g.selectAll(".node")
      .data(courseData.modules)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${nodePositions[d.id].x}, ${nodePositions[d.id].y})`);
    
    // Add circle for each node
    nodes.append("circle")
      .attr("r", nodeRadius)
      .attr("fill", d => getStatusColor(d.status))
      .attr("stroke", d => d.status === "completed" ? getStatusColor(d.status) : "#aaaaaa")
      .attr("stroke-width", 2);
    
    // Add module numbers
    nodes.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.3em")
      .attr("font-size", width < 500 ? "16px" : "20px")
      .attr("font-weight", "bold")
      .attr("fill", d => d.status === "completed" ? "#ffffff" : colors.text)
      .text(d => d.id);
    
    // Add lock icons for locked modules
    nodes.filter(d => d.status === "locked")
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", -nodeRadius - 10)
      .attr("font-family", "FontAwesome")
      .attr("font-size", "16px")
      .attr("fill", "#888888")
      .text("🔒");
    
    // Add module titles
    nodes.append("text")
      .attr("text-anchor", "middle")
      .attr("y", nodeRadius + 20)
      .attr("font-size", width < 500 ? "12px" : "14px")
      .attr("font-weight", "bold")
      .attr("fill", colors.title)
      .text(d => d.title);
    
    // Add module subtitles
    nodes.append("text")
      .attr("text-anchor", "middle")
      .attr("y", nodeRadius + 40)
      .attr("font-size", width < 500 ? "10px" : "12px")
      .attr("fill", "#666666")
      .text(d => d.subtitle);
    
    // Add course title
    svg.append("text")
      .attr("x", margin.left)
      .attr("y", 30)
      .attr("font-size", "24px")
      .attr("font-weight", "bold")
      .attr("fill", colors.title)
      .text(courseData.title);
    
    // Add course subtitle
    svg.append("text")
      .attr("x", margin.left)
      .attr("y", 55)
      .attr("font-size", "16px")
      .attr("fill", "#666666")
      .text(courseData.subtitle);
    
    // Add legend
    const legendData = [
      { label: "Completed", status: "completed" },
      { label: "Ongoing", status: "ongoing" },
      { label: "Locked", status: "locked" }
    ];
    
    const legendGroup = svg.append("g")
      .attr("transform", `translate(${dimensions.width - 150}, ${dimensions.height - 80})`);
    
    const legendItems = legendGroup.selectAll(".legend-item")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(0, ${i * 25})`);
    
    legendItems.append("rect")
      .attr("width", 16)
      .attr("height", 16)
      .attr("rx", 4)
      .attr("fill", d => getStatusColor(d.status))
      .attr("stroke", "#aaaaaa")
      .attr("stroke-width", 1);
    
    legendItems.append("text")
      .attr("x", 24)
      .attr("y", 12)
      .attr("font-size", "12px")
      .attr("fill", colors.title)
      .text(d => d.label);
    
    // Add start button for first lesson
    const buttonGroup = svg.append("g")
      .attr("transform", `translate(${dimensions.width - 150}, 40)`)
      .attr("cursor", "pointer")
      .on("click", () => alert("Starting first lesson!"));
    
    buttonGroup.append("rect")
      .attr("width", 130)
      .attr("height", 40)
      .attr("rx", 6)
      .attr("fill", colors.completed);
    
    buttonGroup.append("text")
      .attr("x", 65)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .text("Start First Lesson");

  }, [dimensions]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <svg 
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        style={{ display: 'block', margin: '0 auto' }}
      />
    </div>
  );
};

export default CourseMap;