import logo from "../assets/brain.svg"

function Unboard() {
  return (
    <div className="flex  min-h-screen items-center py-20 px-10">
      <div className="flex justify-center flex-col items-center w-full gap-10">

        <div>
          <div className="logo text-[48px] font-[500] flex gap-2"><img src={logo} alt="" className="h-20 w-20" /><span>Skill<span className="text-green-900">Redi</span></span></div>
        </div>
        {/* coding level */}
        <div className="hidden flex-col items-center gap-10 w-full">

          <div className="flex items-center">
            <span className="h-8 w-8 rounded-[100%] border-[2px] grid justify-center items-center border-green-800">1</span>
            <hr className="w-20 border border-gray-300" />
            <span className="h-8 w-8 rounded-[100%] border-[2px] grid justify-center items-center ">2</span>
          </div>

          <h2 className="text-[40px] font-[500]">What is your coding skill level?</h2>
          <p className="text-gray-500 text-[24px]">Help us tailor SkillRedi to your needs</p>
          <div className="flex gap-8 w-full max-w-[844px]">
            <div className="py-[22px] w-full px-[18px] border flex gap-[10px] items-center rounded-[12px]">
              <span className="h-5 w-5 border block rounded-full"></span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-[500]">Beginner</h3>
                <p>New to coding</p>
              </div>
            </div>
            <div className="py-[22px] w-full px-[18px] border flex gap-[10px] items-center rounded-[12px]">
              <span className="h-5 w-5 border block rounded-full"></span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-[500]">Beginner</h3>
                <p>New to coding</p>
              </div>
            </div>
            <div className="py-[22px] w-full px-[18px] border flex gap-[10px] items-center rounded-[12px]">
              <span className="h-5 w-5 border block rounded-full"></span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-[500]">Beginner</h3>
                <p>New to coding</p>
              </div>
            </div>
          </div>
        </div>
        {/* choose mentor */}
        <div className="flex flex-col items-center gap-10 w-full">

          <div className="flex items-center">
            <span className="h-8 w-8 rounded-[100%] border-[2px] grid justify-center items-center border-green-800">1</span>
            <hr className="w-20 border border-gray-300" />
            <span className="h-8 w-8 rounded-[100%] border-[2px] grid justify-center items-center ">2</span>
          </div>

          <h2 className="text-[40px] font-[500]">Choose your AI mentor</h2>
          <p className="text-gray-500 text-[24px]">Help us tailor SkillRedi to your needs</p>
          <div className="flex gap-10 w-full max-w-[1240px]">
            <div>

              <div className="flex flex-col gap-6  border flex-1 p-6 rounded-[20px] rounded-b-none relative">
                <span className="h-5 w-5 border block rounded-full ml-auto"></span>
                <div className="flex flex-col items-center gap-6">
                  <img src="" alt="hello" className="h-40 w-40 border rounded-[100%]" />
                  <h3 className="text-[36px] font-[500]">Coach</h3>
                  <p>Style: Encouraging and methodical, focuses on fundamentals</p>
                </div>

              </div>
              <div className="p-6 rounded-[20px] rounded-t-none border  ">
                <p className="text-[18px] text-gray-500">Casual tone with practical examples and quick tips</p>
              </div>
            </div>
            <div>

              <div className="flex flex-col gap-6  border flex-1 p-6 rounded-[20px] rounded-b-none relative">
                <span className="h-5 w-5 border block rounded-full ml-auto"></span>
                <div className="flex flex-col items-center gap-6">
                  <img src="" alt="hello" className="h-40 w-40 border rounded-[100%]" />
                  <h3 className="text-[36px] font-[500]">Coach</h3>
                  <p>Style: Encouraging and methodical, focuses on fundamentals</p>
                </div>

              </div>
              <div className="p-6 rounded-[20px] rounded-t-none border  ">
                <p className="text-[18px] text-gray-500">Casual tone with practical examples and quick tips</p>
              </div>
            </div>
            <div>

              <div className="flex flex-col gap-6  border flex-1 p-6 rounded-[20px] rounded-b-none relative">
                <span className="h-5 w-5 border block rounded-full ml-auto"></span>
                <div className="flex flex-col items-center gap-6">
                  <img src="" alt="hello" className="h-40 w-40 border rounded-[100%]" />
                  <h3 className="text-[36px] font-[500]">Coach</h3>
                  <p>Style: Encouraging and methodical, focuses on fundamentals</p>
                </div>

              </div>
              <div className="p-6 rounded-[20px] rounded-t-none border  ">
                <p className="text-[18px] text-gray-500">Casual tone with practical examples and quick tips</p>
              </div>
            </div>



          </div>
          <button className="px-6 py-3 gap-[10px] bg-gray-300 rounded-[8px] text-white">Continue <span>L</span></button>
        </div>


      </div>
    </div>
  )
}

export default Unboard