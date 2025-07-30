import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images.png';
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTwitterXFill } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { PiTelegramLogoThin, PiLinkedinLogoLight, PiGithubLogoLight } from 'react-icons/pi';
import { SiLeetcode, SiNextdotjs, SiTypescript, SiAppwrite } from "react-icons/si";

import Card from '../components/Card';
import ProjectImg1 from '../assets/project1.png';
import ProjectImg3 from '../assets/project2.png';

const Home = () => {
  const stackStyle =
    "text-xs md:text-sm lg:text-base bg-zinc-800 text-white font-semibold py-1 px-2 rounded-md inline-flex items-center whitespace-nowrap m-1";

  const Project1 = {
    image: ProjectImg1,
    title: 'Book Tracker',
    liveUrl: 'https://code-store8-cipher-school.vercel.app/',
    githubUrl: 'https://github.com/chaturvedinitin/CodeStore8-CipherSchool',
    description:
      'A web application which has a large library of books to read online and keep track of book to read, read or will be reading',
    technologies: [FaJava, FaNodeJs, FaReact],
    status: 'Live',
    detailsUrl: '/projects',
  };

  const Project2 = {
    image: ProjectImg3,
    title: 'Banking Fraud Detection',
    liveUrl: '/',
    githubUrl: 'https://github.com/chaturvedinitin/Banking_Fraud_Detection_System',
    description:
      'Uses Data from past transactions to train ML model and give feedback on transactions and detect fraud',
    technologies: [SiNextdotjs, SiTypescript, SiAppwrite, FaReact],
    status: 'Unhosted',
    detailsUrl: '/projects',
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col min-h-screen">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-800 leading-tight">
              Nitin Chaturvedi
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 mt-2 tracking-wide">
              A Full Stack Web Developer
            </p>
          </div>
          <Link to="/" className="shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-md object-cover border-2 border-zinc-200"
            />
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed">
          I build interactive web apps using{' '}
          {[
            { name: 'JavaScript', icon: <IoLogoJavascript />, style: 'text-yellow-400' },
            { name: 'React', icon: <FaReact />, style: 'text-blue-400' },
            { name: 'Next.js', icon: <RiNextjsFill />, style: 'text-black bg-white' },
            { name: 'Node.js', icon: <FaNodeJs />, style: 'text-green-400' },
          ].map((item, index, arr) => (
            <React.Fragment key={index}>
              <span className={`${stackStyle}`}>
                <span className={`${item.style} mr-1`}>{item.icon}</span>
                {item.name}
              </span>
              {index < arr.length - 1 ? ', ' : '.'}
            </React.Fragment>
          ))}
          I blend UI/UX precision with scalable <strong>backend development</strong>. Enthusiastic about{' '}
          <strong>competitive coding</strong>.
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-row gap-4">
          <a
            href="https://docs.google.com/document/d/1mBTAJPTziFSIN2NueDyhPyVaDDzCWOuu/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 text-sm sm:text-base border border-zinc-500 px-4 py-2 rounded-md hover:bg-zinc-100 transition"
          >
            <CgFileDocument />
            Resume
          </a>

          <a
            href="mailto:chaturvediinitin@gmail.com"
            className="flex justify-center items-center gap-2 text-sm sm:text-base bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition"
          >
            <PiTelegramLogoThin />
            Get in touch
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex gap-5 text-2xl text-zinc-600">
          <a href="https://www.linkedin.com/in/chaturvedinitin" target="_blank" rel="noreferrer"><PiLinkedinLogoLight /></a>
          <a href="https://github.com/chaturvedinitin" target="_blank" rel="noreferrer"><PiGithubLogoLight /></a>
          <a href="https://leetcode.com/u/chaturvedinitin/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
          <a href="#" target="_blank" rel="noreferrer"><RiTwitterXFill /></a>
        </div>

        {/* Projects Section */}
        <div className="mt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6 text-center sm:text-left">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card project={Project1} />
            <Card project={Project2} />
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              to="/projects"
              className="text-sm sm:text-base font-medium text-zinc-700 border border-zinc-500 px-4 py-2 rounded hover:text-black hover:border-black transition"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
