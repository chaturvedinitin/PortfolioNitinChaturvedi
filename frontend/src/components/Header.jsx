import { Link } from 'react-router-dom'
import Logo from '../assets/images.png'
import { MdDarkMode } from "react-icons/md"

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white/20 backdrop-blur-sm w-full">
      <div className="container mx-auto max-w-3xl px-4 py-4 animate-fade-in-blur rounded-md">
        <div className="flex justify-between items-center px-6">
          <div className="flex justify-between gap-4 items-baseline">
            <div>
              <img src={Logo} alt="logo not found" style={{ width: '2.5vw' }} />
            </div>
            <div className="flex gap-4 items-baseline">
              <Link to="/projects">Projects</Link>
              <Link to="/work">Work</Link>
              <Link to="/edu">Education</Link>
            </div>
          </div>
          <div className='text-[1.5vw]'>
            <MdDarkMode />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
