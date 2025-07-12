import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images.png'
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { PiTelegramLogoThin } from "react-icons/pi";

const Introduction = () => {
    const stackStyle = "text-sm bg-zinc-900 text-white px-2 p-1 border border-zinc-700 rounded-md mx-1";
    return (
        <div className='flex flex-col p-8'>
            <div className='flex'>
                <div className='flex flex-col'>
                    <span className='text-[3vw] font-bold'>Nitin Chaturvedi</span>
                    <span className='text-zinc-600 tracking-tighter'>A Full Stack Web Developer</span>
                </div>
                <div className='ml-auto'>
                    <Link to="/">
                        <img src={Logo} alt="no images found" style={{ width: '5vw' }} />
                    </Link>
                </div>
            </div>
            <div className='mt-8 text-[1.2vw] text-zinc-600 tracking-widest leading-relaxed'>
                I build interactive web apps using{' '}
                {[
                    { name: 'JavaScript', icon: <IoLogoJavascript />, style: 'text-blue-400' },
                    { name: 'React', icon: <FaReact />, style: 'text-teal-400' },
                    { name: 'Next.js', icon: <RiNextjsFill />, style: 'text-black bg-white' },
                    { name: 'Node.js', icon: <FaNodeJs />, style: 'text-green-400' }
                ].map((item, index, arr) => (
                    <React.Fragment key={index}>
                        <span className={`${stackStyle} inline-flex items-center whitespace-nowrap`}>
                            <span className={`${item.style} inline-block align-middle mr-2 text-xl`}>
                                {item.icon}
                            </span>
                            {item.name}
                        </span>
                        {index < arr.length - 1 ? ', ' : '. '}
                    </React.Fragment>
                ))}
                I blend UI/UX precision with scalable backend development.
                Enthusiastic about comptetive coding.
            </div>
            <div className='flex gap-2 justify-start items-center mt-8 '>
                <div className='flex gap-2 justify-between border-1 rounded-md border-zinc-300 px-3 py-1'><CgFileDocument /><span>Resume</span></div>
                <div className='flex gap-2 justify-between border-1 rounded-md border-zinc-300 px-3 py-1'>
                    <PiTelegramLogoThin />
                    <span>Get in touch</span>
                </div>
            </div>
        </div>
    );
}

export default Introduction
