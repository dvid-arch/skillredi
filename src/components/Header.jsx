import { ChevronDown, ChevronDownCircle } from 'lucide-react'
import logo from '../assets/brain.svg'
function Header() {
  return (
    <div className="px-10 py-[26px] flex justify-between">
      <div>
        <div className="logo text-[24px] font-[500] flex gap-2"><img src={logo} alt="" className="h-10 w-10" /><span>Skill<span className="text-green-900">Redi</span></span></div>
      </div>
      <div className='px-3 py-2 rounded-[35px] flex items-center gap-3 border'>
        <span className='flex gap-2 items-center'><img src="" className='h-[34px] w-[34px] border rounded-full' alt="" /> Faith</span>
        <span><ChevronDown size={24}/></span>
      </div>
    </div>
  )
}

export default Header