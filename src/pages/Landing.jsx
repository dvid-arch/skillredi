import { Link } from "react-router-dom"
import Button from "../components/Button"
import demo from "../assets/demo.png"
import demofull from "../assets/demofull.png"
import logo from "../assets/brain.svg"


function Header() {
    return (
        <div className="flex justify-between items-center py-10 px-20 border-b border-green-800/50">
            <div className="logo text-[32px] font-[500] flex"><img src={logo} alt="" className="mr-2" />Skill<span className="text-green-900">Redi</span></div>
            <nav className="flex gap-10">
                <span>Home</span>
                <span>Courses</span>
                <span>Pricing</span>
                <span>Contact Us</span>
            </nav>
            <div className="flex gap-10">
                <Button text={'Login'} color={''} />
                <Button text={'Signup'} color={'bg-[#0E3126] text-white'} />
            </div>
        </div>
    )
}

function Hero() {
    return (
        <div className="py-20 flex justify-between items-center">
            <div className="flex-[50%] px-20 flex flex-col gap-6 h-fit">
                <h1 className="text-[56px] font-[500] leading-[70px]">Master Coding with AI-Powered Learning</h1>
                <p className="text-[32px] text-black/60">SkillRedi combines interactive lessons, personalized AI mentoring, and gamification to make learning to code engaging, effective, and fun.</p>
                <div className="flex gap-10">
                    <button className=" w-full px-3 py-6 border border-green-800 rounded-[8px]">Get Started</button>
                    <button className=" w-full text-white px-3 py-6 border border-green-800 bg-[#0E3126] rounded-[8px]">Explore Classes</button>
                </div>
            </div>
            <div className=" flex-[50%] w-full bg-no-repeat bg-contain">
                <img src={demo} alt="" />
            </div>
        </div>
    )
}

function WhoCan() {
    return (
        <div className="py-20 px-10 text-white bg-[#0E3126] flex flex-col gap-20">
            <div className="flex gap-5 flex-col text-center">

                <h2 className="text-[40px] font-[500]">Who can use SkillRedi</h2>
                <p>No matter your background, SkillRedi helps you learn, master, and move forward.</p>
            </div>
            <div className="flex justify-between gap-10">
                <div className="flex-1 p-6 rounded-[12px] bg-[#35d49f1f] flex flex-col gap-4 border ">
                    <h3 className="flex gap-5 font-[500] text-[18px]"><span>hey</span> Student & Beginners</h3>
                    <p>Start with our beginner-friendly courses that break down complex concepts into easy-to-understand lessons</p>
                </div>
                <div className="flex-1 p-6 rounded-[12px] bg-[#35d49f1f] flex flex-col gap-4 border ">
                    <h3 className="flex gap-5 font-[500] text-[18px]"><span>hey</span> Student & Beginners</h3>
                    <p>Start with our beginner-friendly courses that break down complex concepts into easy-to-understand lessons</p>
                </div>
                <div className="flex-1 p-6 rounded-[12px] bg-[#35d49f1f] flex flex-col gap-4 border ">
                    <h3 className="flex gap-5 font-[500] text-[18px]"><span>hey</span> Student & Beginners</h3>
                    <p>Start with our beginner-friendly courses that break down complex concepts into easy-to-understand lessons</p>
                </div>

            </div>
        </div>
    )
}
function How() {
    return (
        <div className="py-20 px-10  flex flex-col gap-20">
            <div className="flex gap-5 flex-col text-center">

                <h2 className="text-[40px] font-[500]">How SkillRedi Works</h2>
                <p>No matter your background, SkillRedi helps you learn, master, and move forward.</p>
            </div>
            <div className="flex justify-between gap-20">
                <div className="flex-1">
                    <ul className="flex flex-col gap-10">
                        
                        <li className="flex gap-6">
                            <span className="text-[24px] font-[500]  border rounded-[100%] w-[70px] h-[70px] grid justify-center items-center border-green-800 aspect-square">1</span>
                            <span className="flex-1">
                                <h3 className="text-[24px] font-[500]">Personalized Learning Path</h3>
                                <p className="text-[18px]">We create a customized learning journey based on your goals, experience level, and preferred learning style.</p>
                            </span>
                        </li>
                        <li className="flex gap-6">
                            <span className="text-[24px] font-[500]  border rounded-[100%] w-[70px] h-[70px] grid justify-center items-center border-green-800 aspect-square">2</span>
                            <span className="flex-1">
                                <h3 className="text-[24px] font-[500]">Interactive Lessons</h3>
                                <p className="text-[18px]">age with bite-sized, interactive lessons that combine theory with immediate practic</p>
                            </span>
                        </li>
                        <li className="flex gap-6">
                            <span className="text-[24px]   border rounded-[100%] w-[70px] h-[70px] grid justify-center items-center border-green-800 aspect-square">1</span>
                            <span className="flex-1">
                                <h3 className="text-[24px]">Personalized Learning Path</h3>
                                <p className="text-[18px]">We create a customized learning journey based on your goals, experience level, and preferred learning style.</p>
                            </span>
                        </li>
                        <li className="flex gap-6">
                            <span className="text-[24px]   border rounded-[100%] w-[70px] h-[70px] grid justify-center items-center border-green-800 aspect-square">1</span>
                            <span className="flex-1">
                                <h3 className="text-[24px]">Personalized Learning Path</h3>
                                <p className="text-[18px]">We create a customized learning journey based on your goals, experience level, and preferred learning style.</p>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <img src={demofull} alt="" />
                </div>
            </div>
        </div>
    )
}
function LandingPage() {
    return (
        <div>
            <Header />
            <Hero />
            <WhoCan />
            <How />
        </div>
    )
}

export default LandingPage