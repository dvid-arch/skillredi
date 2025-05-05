import logo from "../assets/brain.svg"
import login from "../assets/login.jpg"
import error from "../assets/error.svg"



function Login() {
    return (
        <div className="relative max-w-[1440px] min-h-screen mx-auto bg-[#f8f8f8] h-[100%] flex justify-between  gap-10">

            <div className="w-full flex-1 flex justify-center px-10 py-10  ">

                <div className='flex flex-1 w-full rounded-[24px] max-w-[560px] text-center items-center flex-col gap-[24px] px-10 shadow-md bg-white py-[26px] self-center'>
                    <div>
                        <div className="logo text-[24px] font-[500] flex gap-2"><img src={logo} alt="" className="h-10 w-10" /><span>Skill<span className="text-green-900">Redi</span></span></div>
                    </div>
                    <h3 className="text-[36px] font-[500]">Create an Account</h3>
                    <p className="text-[18px]">Sign up to start your learning journey</p>
                    <a href="#" className="px-3 py-4 w-full border rounded-[8px] border-black">Signup with Google</a>
                    <div className="w-full flex gap-6 items-center font-[500]"><hr className="w-full bg-[#bebebe]" />Or <hr className="w-full" /></div>
                    <form className="w-full flex flex-col gap-[24px]">
                        <div className="flex flex-col text-left gap-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="py-2 rounded-[4px] px-3 w-full border hover:border-green-800 focus:outline-green-800" placeholder="none@gmail.com" />
                            <span className="flex gap-2">
                                <img src={error} alt="error" /> Please fill out this field
                            </span>
                        </div>
                        <div className="flex flex-col text-left gap-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="py-2 rounded-[4px] px-3 w-full border hover:border-green-800 focus:outline-green-800" placeholder="Enter Password" />
                        </div>
                        <button type="submit" className="bg-black rounded-[4px] text-white px-3 py-2 w-full">Signup</button>
                    </form>
                    <p>Already have an Account? <a href="#" className="text-green-800 font-[500]">Log in</a></p>
                </div>
            </div>


            <div className="flex-1 bg-cover relative bg-center" style={{ backgroundImage: `url(${login})` }}>
                <div className="absolute bottom-16 left-8 text-white max-w-sm">
                    <div className="card p-4 rounded-lg shadow-lg">
                        <p className=" mb-2">
                            "Skill Forge makes learning to code fun and personal. The AI tutor explains things in ways that actually click, and the badges and XP keep me motivated. I'm finally learning JavaScript!"
                        </p>
                        <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden">
                                <span className="text-xs text-white">JC</span>
                            </div>
                            <div className="ml-2">
                                <p className="text-sm font-medium">Jemimah, CGH</p>
                                <p className="text-xs ">Front-end Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login