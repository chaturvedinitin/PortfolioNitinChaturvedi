import React, { useState, useRef, useEffect } from 'react';
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

  const FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfTXcjLvwkbI8U8oN9xBNhqCPxmvdckw8AqcY3_BcomWSERnw/formResponse";
  const NAME_ENTRY_ID = "entry.483191057";

  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState("");
  const boxRef = useRef(null);
  const pos = useRef({ offsetX: 0, offsetY: 0 });
  const dragging = useRef(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setShowInput(false);
        setName("");
      }
    };

    const handleMouseMove = (e) => {
      if (!dragging.current || !boxRef.current) return;
      const x = e.clientX - pos.current.offsetX;
      const y = e.clientY - pos.current.offsetY;
      boxRef.current.style.left = `${x}px`;
      boxRef.current.style.top = `${y}px`;
      boxRef.current.style.transform = "translate(0, 0)";
    };

    const handleMouseUp = () => {
      dragging.current = false;
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [showInput]);

  const handleMouseDown = (e) => {
    if (!boxRef.current) return;
    dragging.current = true;
    pos.current.offsetX = e.clientX - boxRef.current.offsetLeft;
    pos.current.offsetY = e.clientY - boxRef.current.offsetTop;
  };

  const handleResumeClick = () => {
    setShowInput(true);
  };

  const handleAccess = async () => {
    if (name.trim() === "") {
      alert("/error : enter name to access");
      return;
    }

    try {
      const formData = new FormData();
      formData.append(NAME_ENTRY_ID, name);

      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
    } catch (err) {
      console.error("Error logging name:", err);
    }

    window.open(
      "https://docs.google.com/document/d/1mBTAJPTziFSIN2NueDyhPyVaDDzCWOuu/edit?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );

    setShowInput(false);
    setName("");
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col min-h-screen">
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

        <div className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed">
          I build interactive web apps using{" "}
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
          I blend UI/UX precision with scalable <strong>backend development</strong>. Enthusiastic about{" "}
          <strong>competitive coding</strong>.
        </div>

        <div className="mt-8 flex flex-row gap-4">
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={handleResumeClick}
              className="flex justify-center items-center gap-2 text-sm sm:text-base border border-zinc-500 px-4 py-2 rounded-md hover:bg-zinc-100 transition cursor-pointer"
            >
              <CgFileDocument />
              Resume
            </button>

            {showInput && (
              <div
                ref={boxRef}
                onMouseDown={handleMouseDown}
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white border border-zinc-400 rounded-lg shadow-lg p-4 flex flex-col sm:flex-row items-center gap-2 cursor-grab active:cursor-grabbing"
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Can I know your / org name first?"
                  className="w-100 px-3 py-2 border border-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
                <button
                  onClick={handleAccess}
                  className="px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition cursor-pointer"
                >
                  Access
                </button>
              </div>
            )}
          </div>

          <a
            href="mailto:chaturvediinitin@gmail.com"
            className="flex justify-center items-center gap-2 text-sm sm:text-base bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition"
          >
            <PiTelegramLogoThin />
            Get in touch
          </a>
        </div>

        <div className="mt-6 flex gap-5 text-2xl text-zinc-600">
          <a href="https://www.linkedin.com/in/chaturvedinitin" target="_blank" rel="noreferrer"><PiLinkedinLogoLight /></a>
          <a href="https://github.com/chaturvedinitin" target="_blank" rel="noreferrer"><PiGithubLogoLight /></a>
          <a href="https://leetcode.com/u/chaturvedinitin/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
          <a href="#" target="_blank" rel="noreferrer"><RiTwitterXFill /></a>
        </div>

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
