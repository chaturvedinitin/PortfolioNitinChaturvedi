import { Link } from 'react-router-dom';
import { RiTwitterXFill } from "react-icons/ri";
import { PiLinkedinLogoLight, PiGithubLogoLight } from 'react-icons/pi';
import { SiLeetcode } from "react-icons/si";
const Header = () => {

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900">
      <div className="relative flex justify-between align-center mx-auto max-w-3xl px-6 py-4 md:py-6 animate-fade-in-blur rounded-md text-zinc-400 bg-zinc-800/70 backdrop-blur-xl shadow-xs transition-all duration-300">
        <Link to='/'>Home</Link>
        <div className="flex gap-3 text-2xl text-zinc-500">
            <a href="https://www.linkedin.com/in/chaturvedinitin" target="_blank" rel="noreferrer"><PiLinkedinLogoLight /></a>
            <a href="https://github.com/chaturvedinitin" target="_blank" rel="noreferrer"><PiGithubLogoLight /></a>
            <a href="https://leetcode.com/u/chaturvedinitin/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
            <a href="#" target="_blank" rel="noreferrer"><RiTwitterXFill /></a>
          </div>
      </div>
    </header>
  );
};

export default Header;
