import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images.png'
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { PiTelegramLogoThin } from "react-icons/pi";
import { PiLinkedinLogoLight } from 'react-icons/pi';
import { PiGithubLogoLight } from 'react-icons/pi';
import { SiLeetcode } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript, SiAppwrite } from "react-icons/si";

import Card from '../components/Card';
import ProjectImg1 from '../assets/Project1.png'
import ProjectImg3 from '../assets/Project2.png'
const Introduction = () => {
    const stackStyle = "text-xs md:text-sm lg:text-[0.8vw] bg-zinc-800 text-white font-semibold py-1 px-2 md:py-[0.1vw] md:px-[0.3vw] border border-zinc-700 rounded-md inline-flex items-center whitespace-nowrap m-1";
    const Project1 = {
        image: ProjectImg1,
        title: 'Book Tracker',
        liveUrl: 'https://code-store8-cipher-school.vercel.app/',
        githubUrl: 'https://github.com/chaturvedinitin/CodeStore8-CipherSchool',
        description: 'A web application which has a large library of books to read online and keep track of book to read, read or will be reading',
        technologies: [FaJava, FaNodeJs, FaReact, ],
        status: 'Live',
        detailsUrl: '/projects'
    };
    const Project2 = {
        image: ProjectImg3, // Replace with your project image URL
        title: 'Banking Fraud Detection',
        liveUrl: '/',
        githubUrl: 'https://github.com/chaturvedinitin/Banking_Fraud_Detection_System',
        description: 'Uses Data from past transactions to train ml model and give feedback on transactions and detect fraud',
        technologies: [SiNextdotjs, SiTypescript, SiAppwrite, FaReact], // Pass icon components in an array
        status: 'Unhosted',
        detailsUrl: '/projects'
    };

    return (
        <div className='flex flex-col p-4 md:p-6 lg:p-8 min-h-screen'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col order-2 md:order-1'>
                    <span className='text-4xl sm:text-5xl md:text-6xl lg:text-[3vw] font-bold'>Nitin Chaturvedi</span>
                    <span className='text-lg sm:text-xl md:text-2xl lg:text-[1.2vw] text-zinc-600 tracking-tighter'>A Full Stack Web Developer</span>
                </div>
                <div className='ml-auto border-t-2 border-r-2 rounded-e-3xl border-t-zinc-200 border-r-zinc-200 p-1 md:p-2 mb-4 md:mb-0 order-1 md:order-2'>
                    <Link to="/">
                        <img
                            src={Logo}
                            alt="no images found"
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[7vw] lg:h-[7vw] rounded-full object-cover"
                        />
                    </Link>
                </div>
            </div>
            <div className='mt-6 md:mt-8 text-base sm:text-lg md:text-xl lg:text-[1.2vw] text-zinc-600 tracking-wide md:tracking-widest leading-relaxed'>
                I build interactive web apps using{' '}
                {[
                    { name: 'JavaScript', icon: <IoLogoJavascript />, style: 'text-blue-400' },
                    { name: 'React', icon: <FaReact />, style: 'text-teal-400' },
                    { name: 'Next.js', icon: <RiNextjsFill />, style: 'text-black bg-white' },
                    { name: 'Node.js', icon: <FaNodeJs />, style: 'text-green-400' }
                ].map((item, index, arr) => (
                    <React.Fragment key={index}>
                        <span className={`${stackStyle}`}>
                            <span className={`${item.style} inline-block align-middle text-sm md:text-base lg:text-[1vw] mx-1`}>
                                {item.icon}
                            </span>
                            <span className='ml-1 md:ml-2'>
                                {item.name}
                            </span>
                        </span>
                        {index < arr.length - 1 ? ' , ' : ' . '}
                    </React.Fragment>
                ))}
                I blend UI/UX precision with scalable <strong>backend development</strong>.
                Enthusiastic about <strong>competitive coding</strong>.
            </div>
            <div className='flex flex-col justify-around items-start gap-4 md:gap-[2vw] mt-6 md:mt-[2vw]'>
                <div className="flex flex-col sm:flex-row gap-2 justify-start items-start sm:items-center pl-0 sm:pl-[1vw]">

                    <div className="border-2 rounded-md border-zinc-500  transition-all duration-300 ease-in-out">
                        <a
                            href="https://docs.google.com/document/d/1mBTAJPTziFSIN2NueDyhPyVaDDzCWOuu/edit?usp=sharing&ouid=101139583786478365075&rtpof=true&sd=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex gap-2 justify-between items-center text-sm md:text-base lg:text-[1vw] px-3 py-2 md:px-[0.5vw] md:py-[0.3vw] overflow-hidden h-[2.3rem] group"
                        >
                            <CgFileDocument />
                            <span className="relative block overflow-hidden">
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">Resume</span>
                                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">Resume</span>
                            </span>
                        </a>
                    </div>

                    <div className="bg-zinc-900 text-white border-2 rounded-md border-zinc-900 hover:bg-zinc-800 transition-all duration-300 ease-in-out">
                        <a
                            href="mailto:chaturvediinitin@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex gap-2 justify-between items-center text-sm md:text-base lg:text-[1vw] px-3 py-2 md:px-[0.5vw] md:py-[0.3vw] overflow-hidden h-[2.3rem] group"
                        >
                            <PiTelegramLogoThin />
                            <span className="relative block overflow-hidden">
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">Get in touch</span>
                                <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">Get in touch</span>
                            </span>
                        </a>
                    </div>

                </div>

                <div className='flex justify-start items-center gap-3 md:gap-4 text-2xl md:text-3xl lg:text-[1.7vw] text-zinc-600'>
                    <a href='https://www.linkedin.com/in/chaturvedinitin' target='_blank'><PiLinkedinLogoLight /></a>
                    <a href='https://github.com/chaturvedinitin/' target='_blank'><PiGithubLogoLight /></a>
                    <a href='https://leetcode.com/u/chaturvedinitin/' target='_blank'><SiLeetcode /></a>
                    <a href='' target='_blank'><RiTwitterXFill /></a>
                </div>
            </div>

            <div className="flex flex-col gap-8 mt-8 md:mt-[2vw]">
                <h1 className="text-zinc-900 text-3xl md:text-4xl lg:text-[3vw] font-bold mb-6">
                    Projects
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card project={Project1} />
                    <Card project={Project2} />
                </div>
                <div className="text-zinc-900 font-semibold p-[0.4vw] flex items-center justify-center">
                    <span className='border-1 border-zinc-500 rounded-sm p-1'>All Projects</span>
                </div>
            </div>

        </div>
    );
}

export default Introduction