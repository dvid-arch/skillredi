// src/Dashboard.js

import ProgressBar from "../../components/ProgressBar"
import ProgressRing from '../../components/ProgressRing';
// src/Dashboard.js

import {
    Play,
    FileText,
    BookOpen,       // Replaces DocumentTextIcon
    ArrowUp,        // Replaces ArrowUpIcon
    ChevronLeft,    // Replaces ChevronLeftIcon
    ChevronRight,   // Replaces ChevronRightIcon
    Share2,         // Replaces ShareIcon (Share2 looks more common)
    CheckCircle2,   // Replaces CheckCircleIcon
    Sparkles,       // Replaces SparklesIcon
    GraduationCap,  // Replaces AcademicCapIcon
    Code2,           // Replaces the custom CodeBracketIcon
    Bolt
} from 'lucide-react'; // Import directly from lucide-react

const Home = () => {
    const currentXP = 35;
    const totalXP = 500;
    const userName = "Faith";

    // Update the activityFeed to use the Lucide icon components
    const activityFeed = [
        { id: 1, icon: CheckCircle2, color: 'text-green-500', bgColor: 'bg-green-100', title: 'Completed "What is a Function?"', description: "You've learned the basics of JavaScript functions", time: "5 days ago" },
        { id: 2, icon: Sparkles, color: 'text-yellow-500', bgColor: 'bg-yellow-100', title: 'Earned "Syntax Sorcerer" badge', description: "Awarded for writing your first JavaScript function", time: "5 days ago" },
        { id: 3, icon: GraduationCap, color: 'text-blue-500', bgColor: 'bg-blue-100', title: 'Reached Level 2', description: "You've earned 30XP and unlocked new content", time: "5 days ago" },
    ];

    // Default icon size and stroke for Lucide (can be overridden with props)
    const iconSize = 40; // Corresponds to h-5 w-5 in Tailwind
    const iconStrokeWidth = 1.5; // Adjust stroke width if desired

    return (
        <div className="h-full overflow-auto bg-gray-50 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* --- Header Section (No Icon Changes) --- */}
                <div className="flex justify-between items-center ">
                    <div className='flex flex-col gap-3'>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <p className="text-gray-600 mb-6">Welcome to your learning dashboard</p>
                    </div>
                    <div className="text-right flex flex-col gap-3">
                        <p className="text-gray-500 ">Progress</p>
                        <ProgressBar progress={35} total={100} />
                    </div>
                </div>

                {/* --- Welcome Banner --- */}
                <div className="bg-white shadow-sm p-6  rounded-[20px]">
                    <h2 className="text-xl font-semibold mb-4">Welcome to your Learning Journey</h2>
                    <p className="text-gray-600 mb-6">Track your progress, earn badges and become a master of your skills</p>

                    <div className="flex flex-wrap gap-4">

                        <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-green-700 px-6 py-3 rounded-md border border-gray-200 font-medium">
                            <BookOpen size={18} fill="green" color="green" />
                            Resume Learning
                        </button>
                    </div>
                </div>

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">

                    {/* --- Course Progress Card --- */}
                    <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Progress</h3>
                        {/* Progress Ring Section (No Icon Changes) */}
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                            <div>
                                <h4 className="font-medium text-gray-700">Functions Forest</h4>
                                <p className="text-sm text-gray-500">40% Complete</p>
                            </div>
                            <ProgressRing percentage={40} />
                        </div>

                        {/* Up Next Section */}
                        <div className="p-6 bg-green-800 rounded-[20px] text-white flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2"><BookOpen size={16} color="white"  /> Up Next</div>
                                <div className="flex items-center gap-2 py-1 px-3 border rounded-[20px]"><Code2 /> 25XP</div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4>Arrow Functions</h4>
                                <p>Learn the modern JavaScript arrow function syntax</p>
                            </div>
                            <button className="py-3 w-fit rounded-[8px] bg-white px-6 text-green-800 border border-gren-800 ">Continue Learning</button>
                        </div>

                    </div>



                    {/* --- Recent Achievements Card --- */}
                    <div className="bg-white lg:col-span-2 p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Achievements</h3>
                        {/* Use Lucide Sparkles icon */}
                        <div className="text-sm text-yellow-600 font-medium mb-4 flex items-center gap-1">
                            <Sparkles size={16} strokeWidth={iconStrokeWidth} className="h-4 w-4 text-yellow-500" /> Your Badges
                        </div>

                        {/* Carousel Placeholder */}
                        <div className="flex items-center justify-center gap-4 text-center">
                            {/* Use Lucide ChevronLeft icon */}
                            <button className="text-gray-400 hover:text-gray-600">
                                <ChevronLeft size={24} strokeWidth={iconStrokeWidth} className="h-6 w-6" />
                            </button>
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center mb-2 shadow-md">
                                    {/* Use Lucide Code2 icon */}
                                    <Code2 size={40} strokeWidth={iconStrokeWidth} className="h-10 w-10 text-white" />
                                </div>
                                <h4 className="font-semibold text-gray-700 text-sm">Functions Guru</h4>
                                <p className="text-xs text-gray-500">Completed five lessons in functions forest</p>
                            </div>
                            {/* Use Lucide ChevronRight icon */}
                            <button className="text-gray-400 hover:text-gray-600">
                                <ChevronRight size={24} strokeWidth={iconStrokeWidth} className="h-6 w-6" />
                            </button>
                        </div>
                        {/* Pagination Dots Placeholder (No Icon Changes) */}
                        <div className="flex justify-center items-center gap-1.5 mt-4">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                </div>



                {/* --- Activity Feed Card --- */}
                <div className="bg-white px-6 py-4 rounded-lg shadow-sm flex flex-col gap-6">
                    <h3 className="text-[36px] font-[500] text-gray-800 ">Activity Feed</h3>
                    <div className="flex flex-col gap-6">
                        {activityFeed.map((item) => {
                            const Icon = item.icon; // Get the Lucide icon component
                            return (
                                <div key={item.id} className="flex items-start justify-between gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                                    <div className="flex items-center gap-6">
                                        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${item.bgColor}`}>
                                            {/* Render the Lucide Icon component */}
                                            <Icon size={iconSize} strokeWidth={iconStrokeWidth} className={`h-5 w-5 ${item.color}`} />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <p className="text-[18px] font-medium text-gray-700">{item.title}</p>
                                            <p className=" text-gray-600">{item.description}</p>
                                            <p className=" text-gray-400 mt-1">{item.time}</p>
                                        </div>
                                    </div>
                                    {/* Use Lucide Share2 icon */}
                                    <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                                        <Share2 size={iconSize} strokeWidth={iconStrokeWidth} className="h-5 w-5" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;

// const Home = () => {
//     return (
//         <div className="bg-gray-50 h-full overflow-auto p-10">
//             <div className="max-w-6xl mx-auto flex flex-col gap-10">
//                 {/* Header section */}
//                 <div className="flex justify-between items-center ">
//                     <div className='flex flex-col gap-3'>
//                         <h1 className="text-2xl font-bold">Dashboard</h1>
//                         <p className="text-gray-600 mb-6">Welcome to your learning dashboard</p>
//                     </div>
//                     <div className="text-right flex flex-col gap-3">
//                         <p className="text-gray-500 ">Progress</p>
//                         <div className="flex items-center gap-2">
//                             <div className="w-64 h-2 bg-gray-200 rounded-full ">
//                                 <div className="w-0 h-2 bg-green-600 rounded-full"></div>
//                             </div>
//                             <span className="text-sm font-medium">0/100 XP</span>
//                         </div>
//                     </div>
//                 </div>



//                 {/* Welcome Card */}
//                 <div className="bg-white shadow-sm p-6  rounded-[20px]">
//                     <h2 className="text-xl font-semibold mb-4">Welcome to your Learning Journey</h2>
//                     <p className="text-gray-600 mb-6">Track your progress, earn badges and become a master of your skills</p>

//                     <div className="flex flex-wrap gap-4">
//                         <button className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-md font-medium">
//                             <Play size={18} />
//                             Start Your Journey
//                         </button>
//                         <button className="flex opacity-50 items-center gap-2 bg-white hover:bg-gray-50 text-green-700 px-6 py-3 rounded-md border border-gray-200 font-medium">
//                             <BookOpen size={18} />
//                             Resume Learning
//                         </button>
//                     </div>
//                 </div>

//                 {/* Two-column layout */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* XP Section */}
//                     <div className="bg-white rounded-lg shadow-sm p-6">
//                         <div className="flex items-center gap-2 mb-6">
//                             <Zap size={20} className="text-yellow-500" />
//                             <h2 className="text-[18px] font-[500]">Experience Points</h2>
//                         </div>

//                         <div className="mb-6">
//                             <div className="flex justify-between mb-1">
//                                 <span className="text-gray-600">Current level</span>
//                                 <span className="font-medium">Beginner (0/100 XP)</span>
//                             </div>
//                             <div className="w-full h-2 bg-gray-200 rounded-full">
//                                 <div className="w-0 h-2 bg-gray-400 rounded-full"></div>
//                             </div>
//                         </div>

//                         <div className='bg-green-800 rounded-[20px] pl-4'>

//                             <div className=" bg-gray-50 rounded-[20px] flex flex-col gap-4 p-5">
//                                 <h3 className="font-medium">How to Earn XP:</h3>
//                                 <ul className="flex flex-col gap-4 text-gray-700">
//                                     <li className="flex items-start gap-2">
//                                         <span className="min-w-3 text-lg">•</span>
//                                         <span>Complete lessons and exercises</span>
//                                     </li>
//                                     <li className="flex items-start gap-2">
//                                         <span className="min-w-3 text-lg">•</span>
//                                         <span>Maintain a daily learning streak</span>
//                                     </li>
//                                     <li className="flex items-start gap-2">
//                                         <span className="min-w-3 text-lg">•</span>
//                                         <span>Solve coding challenges</span>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Badges Section */}
//                     <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-6">
//                         <div className="flex items-center gap-2 ">
//                             <Award size={20} className="text-green-700" />
//                             <h2 className="text-[18px] font-[500]">Badges & Achievements</h2>
//                         </div>

//                         <div className="flex flex-col items-center justify-center py-6">
//                             <div className="border-2 border-green-700 rounded-full p-4 mb-4 w-24 h-24 flex items-center justify-center">
//                                 <Lock size={36} className="text-green-700" />
//                             </div>
//                             <p className="font-medium text-lg mb-1">Earn your first badge!</p>
//                             <p className="text-gray-600 text-center">Complete lessons to unlock achievements</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;