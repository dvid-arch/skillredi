import { Code, Code2, CodeXml, PlayCircle, Send, SendHorizontalIcon, SendIcon } from 'lucide-react'
import chatbg from '../../assets/chatbg.png'
import ProgressBar from '../../components/ProgressBar'
import brain from '../../assets/brain.svg'

function Courses() {
    return (
        <div className='p-10 bg-gray-100 h-full overflow-auto'>
            <div className='flex h-full justify-center'>

                <div className='flex-1 h-full overflow-auto relative flex flex-col bg-white max-w-[840px]'>
                    <div className='px-6 py-4 bg-green-900 sticky top-0 left-0 w-full'>
                        <h2 className='text-[24px] font-[500] text-white'>What is a Function?</h2>
                    </div>
                    <div className='bg-contain overflow-auto flex-1' style={{ backgroundImage: `url(${chatbg})` }}>
                        <p className='h-screen'></p>

                    </div>
                    <div className="p-6 bg-gray-200 flex justify-between gap-6">
                        <input type="text" className='py-2 px-3 flex-1 rounded-[4px]' placeholder='enter text here' />
                        <span className="flex justify-center items-center w-[46px] h-[46px] rounded-[8px] bg-green-800 "><SendIcon size={24} color='white'/></span>
                    </div>
                </div>
                <div className='w-full max-w-[350px] bg-white py-5 px-6 flex flex-col gap-6'>
                    <div className='flex gap-3 flex-col'>

                        <h2 className='text-[24px] font-[500]'>What is a Function?</h2>
                        <p>JavaScript Fundametals</p>
                    </div>
                    <div className='flex flex-col gap-3'>

                        <div className='flex justify-between items-center'>
                            <h3 className='text-[18px]'>Your Progress</h3>
                            <span className='text-[12px] block bg-gray-200 py-1 px-3 rounded-[24px]'>0-Day Streak</span>
                        </div>
                        <ProgressBar progress={30} total={100} />
                        <div className="text-xs">
                            <p>next reward at 5-day Streak</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='text=[18px] font-[500] mb-6'>Learning Modalities</h3>
                        <ul className='flex gap-6 flex-col text-[16px]'>
                            <li className='flex gap-2 items-center'><PlayCircle size={16} color='orange'/> Video Explanation</li>
                            <li className='flex gap-2 items-center'><Code size={16} color='purple'/> Interactive Code</li>
                            <li  className='flex gap-2 items-center'><img src={brain} alt="" className='h-4 w-4' /> Analogies & Diagram</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses