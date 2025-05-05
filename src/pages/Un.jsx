import { HomeIcon, BookOpenIcon, TrophyIcon, UsersIcon } from 'lucide-react';


export default function Un() {

    const lessons = [
        { number: '01', title: 'What is a Function?', description: 'Fundamentals & concepts', status: 'ongoing' },
        { number: '02', title: 'Function Syntax', description: 'Declaration & calling', status: 'locked' },
        { number: '03', title: 'Parameters & Arguments', description: 'Passing Functions', status: 'locked' },
        { number: '04', title: 'Return Values', description: 'Getting data back', status: 'locked' },
        { number: '05', title: 'Function Scope', description: 'Variable visibility', status: 'locked' },
        { number: '06', title: 'Function Expressions', description: 'Alternative Syntax', status: 'locked' },
        { number: '07', title: 'Arrow Functions', description: 'Modern JS syntax', status: 'locked' },
        { number: '08', title: 'Call back', description: 'Functions as Arguments', status: 'locked' },
    ];
    return (

        <div className="flex h-screen font-sans">
            <Sidebar />
            <div className="flex-1 p-6 relative">
                <div className="flex justify-end mb-4">
                    <ProfileDropdown name="Faith" />
                </div>
                <CourseHeader title="Course Map" course="Functions Forest" subtitle="Master Javascript Functions" />
                <div className="absolute top-24 right-6">
                    <StartButton />
                </div>
                <LessonPath lessons={lessons} />
                <div className="absolute bottom-6 right-6">
                    <Legend />
                </div>
            </div>
        </div>

    );
}

// src/components/Sidebar.jsx



function Sidebar() {
    const items = [
        { label: 'Dashboard', icon: HomeIcon, active: false },
        { label: 'My Courses', icon: BookOpenIcon, active: true },
        { label: 'Achievements', icon: TrophyIcon, active: false },
        { label: 'Community', icon: UsersIcon, active: false },
    ];
    return (
        <div className="w-48 bg-white border-r">
            <div className="p-4 text-2xl font-bold text-green-600">SkillRedi</div>
            <nav className="mt-6">
                {items.map(item => (
                    <div key={item.label} className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 ${item.active ? 'bg-green-50 font-semibold' : ''}`}>
                        <item.icon className="w-5 h-5 mr-2" />
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>
        </div>
    );
}

// src/components/ProfileDropdown.jsx


function ProfileDropdown({ name }) {
    return (
        <div className="relative inline-block text-left">
            <button className="flex items-center px-4 py-2 bg-white border rounded-md hover:bg-gray-100">
                <span className="mr-2">{name}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {/* Dropdown items would go here */}
        </div>
    );
}

// src/components/CourseHeader.jsx


function CourseHeader({ title, course, subtitle }) {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
            <h1 className="text-3xl font-bold text-gray-800">{course}</h1>
            <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
    );
}

// src/components/LessonNode.jsx

import { Lock } from 'lucide-react';

function LessonNode({ number, title, description, status, onClick }) {
    const locked = status === 'locked';
    const ongoing = status === 'ongoing';

    const baseClasses = 'relative flex flex-col items-center justify-center w-24 h-24 rounded-full border-2';
    const classes = ongoing
        ? `${baseClasses} border-green-600 text-green-600`
        : locked
            ? `${baseClasses} border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed`
            : `${baseClasses} border-green-600 text-green-600 cursor-pointer`;

    return (
        <div className="flex flex-col items-center group">
            <div
                className={classes}
                onClick={() => !locked && onClick(number)}
                title={locked ? 'Locked until previous lesson completed.' : ''}
            >
                {locked && <Lock className="absolute w-4 h-4 top-1 right-1" />}
                <span className="text-lg font-bold">{number}</span>
            </div>
            <div className="mt-2 text-center">
                <div className={`text-sm font-medium ${locked ? 'text-gray-400' : 'text-gray-800'}`}>{title}</div>
                <div className="text-xs text-gray-500">{description}</div>
            </div>
            {locked && (
                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded px-2 py-1 mt-2">
                    Locked until previous lesson completed.
                </div>
            )}
        </div>
    );
}

// src/components/LessonPath.jsx

function LessonPath({ lessons }) {
    const handleClick = num => console.log(`Navigate to lesson ${num}`);

    return (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 relative">
            {lessons.map(lesson => (
                <LessonNode key={lesson.number} {...lesson} onClick={handleClick} />
            ))}
            {/* SVG connectors */}
            <svg className="pointer-events-none absolute inset-0 w-full h-full">
                <defs>
                    <marker id="dash" markerUnits="strokeWidth" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                        <circle cx="2" cy="2" r="1" fill="gray" />
                    </marker>
                </defs>
                {lessons.slice(0, lessons.length - 1).map((_, idx) => {
                    const rowSize = 4;
                    const x1 = ((idx % rowSize) + 0.5) * (100 / rowSize);
                    const y1 = idx < rowSize ? 12 : 62;
                    const x2 = (((idx + 1) % rowSize) + 0.5) * (100 / rowSize);
                    const y2 = idx + 1 < rowSize ? 12 : 62;
                    return (
                        <path
                            key={idx}
                            d={`M${x1}%,${y1}% C${x1}%,${(y1 + y2) / 2}% ${x2}%,${(y1 + y2) / 2}% ${x2}%,${y2}%`}
                            stroke="gray"
                            strokeWidth="2"
                            strokeDasharray="4"
                            fill="none"
                        />
                    );
                })}
            </svg>
        </div>
    );
}

// src/components/Legend.jsx


function Legend() {
    const items = [
        { label: 'Completed', style: 'bg-green-600 w-4 h-4 rounded-sm inline-block mr-2' },
        { label: 'Ongoing', style: 'border border-green-600 w-4 h-4 rounded-sm inline-block mr-2' },
        { label: 'Locked', style: 'bg-gray-300 w-4 h-4 rounded-sm inline-block mr-2' },
    ];
    return (
        <div className="bg-white p-3 border rounded-md text-sm flex space-x-4">
            {items.map(item => (
                <div key={item.label} className="flex items-center">
                    <span className={item.style}></span>
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
}

// src/components/StartButton.jsx

function StartButton() {
    return (
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Start First Lesson
        </button>
    );
}
