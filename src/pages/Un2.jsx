import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

const CourseRoadmap = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  const modules = [
    {
      id: '01',
      title: 'What is a Function?',
      subtitle: 'Fundamentals & concepts',
      status: 'completed'
    },
    {
      id: '02',
      title: 'Function Syntax',
      subtitle: 'Declaration & calling',
      status: 'locked'
    },
    {
      id: '03',
      title: 'Parameters & Arguments',
      subtitle: 'Passing Functions',
      status: 'locked'
    },
    {
      id: '04',
      title: 'Return Values',
      subtitle: 'Getting data back',
      status: 'locked'
    },
    {
      id: '05',
      title: 'Function Scope',
      subtitle: 'Variable visibility',
      status: 'locked'
    },
    {
      id: '06',
      title: 'Function Expressions',
      subtitle: 'Alternative Syntax',
      status: 'locked'
    },
    {
      id: '07',
      title: 'Arrow Functions',
      subtitle: 'Modern JS syntax',
      status: 'locked'
    },
    {
      id: '08',
      title: 'Call back',
      subtitle: 'Functions as Arguments',
      status: 'locked'
    }
  ];

  // Render the roadmap as a vertical list on mobile
  if (isMobile) {
    return (
      <div className="bg-gray-50 p-4 font-sans">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-1">Course Map</h1>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Functions Forest</h2>
            <p className="text-gray-600 text-sm">Master JavaScript Functions</p>
            
            <button className="bg-green-800 text-white px-4 py-2 rounded mt-4 w-full">
              Start First Lesson
            </button>
          </div>

          <div className="relative">
            {modules.map((module, index) => (
              <div key={module.id} className="mb-6">
                <div className="flex items-center">
                  <div className={`relative flex items-center justify-center w-16 h-16 rounded-full shrink-0
                    ${module.status === 'completed' ? 'bg-white border-4 border-green-800 text-green-800' : 
                      module.status === 'ongoing' ? 'bg-white border-2 border-gray-300 text-gray-600' : 
                      'bg-gray-200 text-gray-500'}`}
                  >
                    {module.status === 'locked' && (
                      <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow">
                        <Lock size={16} className="text-gray-500" />
                      </div>
                    )}
                    <span className="text-2xl font-bold">{module.id}</span>
                  </div>
                  
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">{module.title}</h3>
                    <p className="text-sm text-gray-600">{module.subtitle}</p>
                  </div>
                </div>
                
                {index < modules.length - 1 && (
                  <div className="ml-8 mt-2 h-8 border-l-2 border-dashed border-green-800"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2 border-t pt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-800"></div>
              <span className="text-sm">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-gray-400 bg-white"></div>
              <span className="text-sm">Ongoing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200"></div>
              <span className="text-sm">Locked</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tablet view - simplified version of desktop with adjusted positioning
  if (isTablet) {
    return (
      <div className="relative bg-gray-50 p-6 font-sans overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-1">Course Map</h1>
          
          <div className="mb-8 relative">
            <h2 className="text-xl font-semibold text-gray-700">Functions Forest</h2>
            <p className="text-gray-600">Master JavaScript Functions</p>
            
            <div className="absolute top-0 right-0">
              <button className="bg-green-800 text-white px-4 py-2 rounded">
                Start First Lesson
              </button>
            </div>
          </div>

          <div className="relative" style={{ height: '850px' }}>
            {/* Path connections for tablet */}
            <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
              <path d="M100,120 Q150,80 220,120" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
              <path d="M280,160 Q340,220 370,280" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
              <path d="M400,320 Q450,360 490,360" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
              <path d="M580,320 Q620,260 580,200" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
              <path d="M520,120 Q460,80 370,120" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
              <path d="M220,280 Q260,360 340,400" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
              <path d="M430,400 Q520,380 580,440" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
            </svg>

            {/* Tablet positioning for modules */}
            <div className="absolute" style={{ top: '100px', left: '50px' }}>
              <ModuleNode module={modules[0]} />
            </div>
            <div className="absolute" style={{ top: '100px', left: '260px' }}>
              <ModuleNode module={modules[1]} />
            </div>
            <div className="absolute" style={{ top: '100px', left: '470px' }}>
              <ModuleNode module={modules[3]} />
            </div>
            <div className="absolute" style={{ top: '280px', left: '160px' }}>
              <ModuleNode module={modules[2]} />
            </div>
            <div className="absolute" style={{ top: '280px', left: '540px' }}>
              <ModuleNode module={modules[4]} />
            </div>
            <div className="absolute" style={{ top: '400px', left: '340px' }}>
              <ModuleNode module={modules[6]} />
            </div>
            <div className="absolute" style={{ top: '520px', left: '200px' }}>
              <ModuleNode module={modules[7]} />
            </div>
            <div className="absolute" style={{ top: '520px', left: '480px' }}>
              <ModuleNode module={modules[5]} />
            </div>
          </div>

          <div className="absolute bottom-4 right-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-800"></div>
              <span className="text-sm">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-gray-400 bg-white"></div>
              <span className="text-sm">Ongoing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200"></div>
              <span className="text-sm">Locked</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop view with full layout
  return (
    <div className="relative w-full min-h-screen bg-gray-50 p-8 font-sans overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-1">Course Map</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Functions Forest</h2>
          <p className="text-gray-600">Master JavaScript Functions</p>
          
          <div className="absolute top-8 right-8">
            <button className="bg-green-800 text-white px-6 py-3 rounded">
              Start First Lesson
            </button>
          </div>
        </div>

        {/* Path connections for desktop */}
        <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
          <path d="M125,285 Q185,235 270,270" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
          <path d="M350,320 Q425,375 465,385" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
          <path d="M540,385 Q610,335 650,320" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
          <path d="M730,320 Q800,375 840,385" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
          <path d="M880,455 Q855,550 810,655" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
          <path d="M730,655 Q650,610 570,570" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
          <path d="M480,610 Q375,700 290,780" stroke="#0e5b3f" strokeWidth="2" strokeDasharray="5,5" fill="none" />
        </svg>

        {/* Desktop positioning for modules */}
        <div className="relative" style={{ height: '900px' }}>
          <div className="absolute" style={{ top: '420px', left: '125px' }}>
            <ModuleNode module={modules[0]} />
          </div>
          <div className="absolute" style={{ top: '285px', left: '310px' }}>
            <ModuleNode module={modules[1]} />
          </div>
          <div className="absolute" style={{ top: '420px', left: '500px' }}>
            <ModuleNode module={modules[2]} />
          </div>
          <div className="absolute" style={{ top: '285px', left: '690px' }}>
            <ModuleNode module={modules[3]} />
          </div>
          <div className="absolute" style={{ top: '420px', left: '880px' }}>
            <ModuleNode module={modules[4]} />
          </div>
          <div className="absolute" style={{ top: '690px', left: '775px' }}>
            <ModuleNode module={modules[5]} />
          </div>
          <div className="absolute" style={{ top: '570px', left: '525px' }}>
            <ModuleNode module={modules[6]} />
          </div>
          <div className="absolute" style={{ top: '815px', left: '250px' }}>
            <ModuleNode module={modules[7]} />
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-800"></div>
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border border-gray-400 bg-white"></div>
            <span>Ongoing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-200"></div>
            <span>Locked</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Extracted module node component for reuse
const ModuleNode = ({ module }) => (
  <div className="flex flex-col items-center">
    <div className={`relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full 
      ${module.status === 'completed' 
        ? 'bg-white border-4 border-green-800 text-green-800' 
        : module.status === 'ongoing'
          ? 'bg-white border-2 border-gray-300 text-gray-600'
          : 'bg-gray-200 text-gray-500'}`}
    >
      {module.status === 'locked' && (
        <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow">
          <Lock size={20} className="text-gray-500" />
        </div>
      )}
      <span className="text-3xl md:text-4xl lg:text-5xl font-bold">{module.id}</span>
    </div>
    <div className="text-center mt-2 w-36 md:w-40 lg:w-48">
      <h3 className="font-semibold text-gray-800 text-sm md:text-base">{module.title}</h3>
      <p className="text-xs md:text-sm text-gray-600">{module.subtitle}</p>
    </div>
  </div>
);

export default CourseRoadmap;