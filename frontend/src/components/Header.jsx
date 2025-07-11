import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-center'>
        <div className='flex gap-x-80 p-4 bg-white/20 backdrop-blur-lg'>
          <div className='flex gap-10'>
            <div>
              <Link to='/' >Logo</Link>
            </div>
            <div>
              <Link to="/work">Work</Link>
            </div>
            <div>
              <Link to='/edu'>Education</Link>
            </div>
            <div>
              <Link to="/projects">Projects</Link>
            </div>
          </div>
          <div>DarkMode</div>
        </div>
    </div>
  )
}

export default Header
