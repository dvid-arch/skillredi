import logo from "../assets/brain.svg"
import login from "../assets/login.jpg"
import error from "../assets/error.svg"
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="relative max-w-[1440px] min-h-screen mx-auto bg-[#f8f8f8] h-[100%] flex justify-between">

            {/* Form Section */}
            <div className="w-full flex-1 flex justify-center px-4 sm:px-10 py-10">
                <div className='flex flex-1 w-full rounded-[24px] max-w-[560px] text-center items-center flex-col gap-[24px] px-4 sm:px-10 shadow-md bg-white py-[26px] self-center'>
                    <div>
                        <div className="logo text-[24px] font-[500] flex gap-2">
                            <img src={logo} alt="" className="h-10 w-10" />
                            <span>Skill<span className="text-green-900">Redi</span></span>
                        </div>
                    </div>
                    <h3 className="text-[28px] sm:text-[36px] font-[500]">Create an Account</h3>
                    <p className="text-[16px] sm:text-[18px]">Sign up to start your learning journey</p>
                    <a href="#" className="px-3 py-4 w-full border rounded-[8px] border-black flex items-center justify-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1711 8.36788H17.5V8.33333H10V12H14.6898C14.0224 14.0615 12.1568 15.5 10 15.5C7.23859 15.5 5 13.2614 5 10.5C5 7.73858 7.23859 5.5 10 5.5C11.2845 5.5 12.4701 5.97057 13.3831 6.75218L15.8089 4.32642C14.2542 2.91339 12.2214 2 10 2C5.28661 2 1.5 5.78661 1.5 10.5C1.5 15.2134 5.28661 19 10 19C14.7134 19 18.5 15.2134 18.5 10.5C18.5 9.76104 18.3854 9.04925 18.1711 8.36788Z" fill="#4285F4" />
                            <path d="M2.62891 6.59401L5.36747 8.63436C6.10418 6.86008 7.90292 5.5 10.0001 5.5C11.2847 5.5 12.4702 5.97057 13.3832 6.75218L15.809 4.32642C14.2543 2.91339 12.2215 2 10.0001 2C6.79579 2 4.02622 3.8944 2.62891 6.59401Z" fill="#EA4335" />
                            <path d="M10.0001 19C12.1664 19 14.1547 18.1254 15.68 16.7754L13.0535 14.5521C12.2071 15.1574 11.1602 15.5 10.0001 15.5C7.85265 15.5 5.99322 14.0731 5.31786 12.0277L2.57051 14.1767C3.94948 17.0601 6.76116 19 10.0001 19Z" fill="#34A853" />
                            <path d="M18.1711 8.36788H17.5V8.33333H10V12H14.6898C14.3749 12.9666 13.7757 13.8144 13.0533 14.5525L13.0535 14.5521L15.68 16.7754C15.5129 16.9274 18.5 14.75 18.5 10.5C18.5 9.76104 18.3854 9.04925 18.1711 8.36788Z" fill="#FBBC05" />
                        </svg>
                        Signup with Google
                    </a>
                    <div className="w-full flex gap-6 items-center font-[500]">
                        <hr className="w-full bg-[#bebebe]" />Or<hr className="w-full" />
                    </div>
                    <form className="w-full flex flex-col gap-[24px]">
                        <div className="flex flex-col text-left gap-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="py-2 rounded-[4px] px-3 w-full border hover:border-green-800 focus:outline-green-800"
                                placeholder="none@gmail.com"
                            />
                            <span className="flex gap-2 text-red-500 text-sm">
                                <img src={error} alt="error" /> Please fill out this field
                            </span>
                        </div>
                        <div className="flex flex-col text-left gap-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="py-2 rounded-[4px] px-3 w-full border hover:border-green-800 focus:outline-green-800"
                                placeholder="Enter Password"
                            />
                        </div>
                        <Link to={'/dashboard'}>
                            <button type="submit" className="bg-black rounded-[4px] text-white px-3 py-2 w-full hover:bg-gray-800 transition-colors">
                                Signup
                            </button>
                        </Link>
                    </form>
                    <p>Already have an Account? <a href="#" className="text-green-800 font-[500]">Log in</a></p>
                </div>
            </div>

            {/* Image Section - Hidden on Mobile */}
            <div className="hidden md:flex flex-1 bg-cover relative bg-center" style={{ backgroundImage: `url(${login})` }}>
                <div className="absolute bottom-16 left-8 text-white max-w-sm">
                    <div className="card p-4 rounded-lg bg-black bg-opacity-60 backdrop-blur-sm shadow-lg">
                        <p className="mb-2">
                            "Skill Forge makes learning to code fun and personal. The AI tutor explains things in ways that actually click, and the badges and XP keep me motivated. I'm finally learning JavaScript!"
                        </p>
                        <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden">
                                <span className="text-xs text-white">JC</span>
                            </div>
                            <div className="ml-2">
                                <p className="text-sm font-medium">Jemimah, CGH</p>
                                <p className="text-xs">Front-end Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login


// import logo from "../assets/brain.svg"
// import login from "../assets/login.jpg"
// import error from "../assets/error.svg"



// function Login() {
//     return (
//         <div className="relative max-w-[1440px] min-h-screen mx-auto bg-[#f8f8f8] h-[100%] flex justify-between  gap-10">

//             <div className="w-full flex-1 flex justify-center px-10 py-10  ">

//                 <div className='flex flex-1 w-full rounded-[24px] max-w-[560px] text-center items-center flex-col gap-[24px] px-10 shadow-md bg-white py-[26px] self-center'>
//                     <div>
//                         <div className="logo text-[24px] font-[500] flex gap-2"><img src={logo} alt="" className="h-10 w-10" /><span>Skill<span className="text-green-900">Redi</span></span></div>
//                     </div>
//                     <h3 className="text-[36px] font-[500]">Create an Account</h3>
//                     <p className="text-[18px]">Sign up to start your learning journey</p>
//                     <a href="#" className="px-3 py-4 w-full border rounded-[8px] border-black">Signup with Google</a>
//                     <div className="w-full flex gap-6 items-center font-[500]"><hr className="w-full bg-[#bebebe]" />Or <hr className="w-full" /></div>
//                     <form className="w-full flex flex-col gap-[24px]">
//                         <div className="flex flex-col text-left gap-3">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" className="py-2 rounded-[4px] px-3 w-full border hover:border-green-800 focus:outline-green-800" placeholder="none@gmail.com" />
//                             <span className="flex gap-2">
//                                 <img src={error} alt="error" /> Please fill out this field
//                             </span>
//                         </div>
//                         <div className="flex flex-col text-left gap-3">
//                             <label htmlFor="password">Password</label>
//                             <input type="password" className="py-2 rounded-[4px] px-3 w-full border hover:border-green-800 focus:outline-green-800" placeholder="Enter Password" />
//                         </div>
//                         <button type="submit" className="bg-black rounded-[4px] text-white px-3 py-2 w-full">Signup</button>
//                     </form>
//                     <p>Already have an Account? <a href="#" className="text-green-800 font-[500]">Log in</a></p>
//                 </div>
//             </div>


//             <div className="flex-1 bg-cover relative bg-center" style={{ backgroundImage: `url(${login})` }}>
//                 <div className="absolute bottom-16 left-8 text-white max-w-sm">
//                     <div className="card p-4 rounded-lg shadow-lg">
//                         <p className=" mb-2">
//                             "Skill Forge makes learning to code fun and personal. The AI tutor explains things in ways that actually click, and the badges and XP keep me motivated. I'm finally learning JavaScript!"
//                         </p>
//                         <div className="flex items-center">
//                             <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden">
//                                 <span className="text-xs text-white">JC</span>
//                             </div>
//                             <div className="ml-2">
//                                 <p className="text-sm font-medium">Jemimah, CGH</p>
//                                 <p className="text-xs ">Front-end Developer</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login