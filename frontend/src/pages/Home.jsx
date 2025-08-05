import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from '../assets/images.png';
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTwitterXFill } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { PiTelegramLogoThin, PiLinkedinLogoLight, PiGithubLogoLight } from 'react-icons/pi';
import { SiLeetcode, SiNextdotjs, SiTypescript, SiAppwrite } from "react-icons/si";
import Card from '../components/Card';
import ProjectImg1 from '../assets/project1.png';
import ProjectImg3 from '../assets/project2.png';

const Home = () => {
  const stackStyle = "text-xs md:text-sm lg:text-base bg-zinc-800 text-white font-semibold py-1 px-2 rounded-md inline-flex items-center whitespace-nowrap m-1";

  const Project1 = {
    image: ProjectImg1,
    title: 'Book Tracker',
    liveUrl: 'https://code-store8-cipher-school.vercel.app/',
    githubUrl: 'https://github.com/chaturvedinitin/CodeStore8-CipherSchool',
    description: 'A web application which has a large library of books to read online and keep track of book to read, read or will be reading',
    technologies: [FaJava, FaNodeJs, FaReact],
    status: 'Live',
    detailsUrl: '/projects',
  };

  const Project2 = {
    image: ProjectImg3,
    title: 'Banking Fraud Detection',
    liveUrl: '/',
    githubUrl: 'https://github.com/chaturvedinitin/Banking_Fraud_Detection_System',
    description: 'Uses Data from past transactions to train ML model and give feedback on transactions and detect fraud',
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

    const handleTouchMove = (e) => {
      if (!dragging.current || !boxRef.current || e.touches.length === 0) return;
      const touch = e.touches[0];
      const x = touch.clientX - pos.current.offsetX;
      const y = touch.clientY - pos.current.offsetY;
      boxRef.current.style.left = `${x}px`;
      boxRef.current.style.top = `${y}px`;
      boxRef.current.style.transform = "translate(0, 0)";
    };

    const handleMouseUp = () => (dragging.current = false);
    const handleTouchEnd = () => (dragging.current = false);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [showInput]);

  const handleMouseDown = (e) => {
    if (!boxRef.current) return;
    dragging.current = true;
    pos.current.offsetX = e.clientX - boxRef.current.offsetLeft;
    pos.current.offsetY = e.clientY - boxRef.current.offsetTop;
  };

  const handleTouchStart = (e) => {
    if (!boxRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    dragging.current = true;
    pos.current.offsetX = touch.clientX - boxRef.current.offsetLeft;
    pos.current.offsetY = touch.clientY - boxRef.current.offsetTop;
  };

  const handleResumeClick = () => setShowInput(true);

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
      "https://docs.google.com/document/d/13vDSHAYj3VW_Dns-VpSViCj3xqWgsDJI/edit?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );

    setShowInput(false);
    setName("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="scroll-smooth"
      style={{
        fontFamily: '"Merriweather", serif',
        fontOpticalSizing: 'auto',
        fontWeight: 400,
        fontStyle: 'normal',
        fontVariationSettings: '"wdth" 100',
      }}
    >
      <div className="container mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="flex flex-col min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="flex flex-col text-center md:text-left">
              <h1 className="text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] font-[Bungee] text-zinc-700 leading-none tracking-tighter">
                Nitin Chaturvedi
              </h1>
              <p className="text-[4vw] sm:text-[3vw] md:text-[3vw] lg:text-[1.5vw] text-zinc-600 mt-3 tracking-tighter">
                A Full Stack Web Developer
              </p>
            </div>
            <Link to="/" className="shrink-0">
              <img
                src={Logo}
                alt="Logo"
                className="w-28 h-28 sm:w-34 sm:h-34 md:w-46 md:h-46 rounded-md object-cover border-2 border-zinc-200"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 text-base sm:text-lg text-zinc-500 leading-relaxed"
          >
            I build interactive web apps using{" "}
            {[{ name: 'JavaScript', icon: <IoLogoJavascript />, style: 'text-yellow-400' },
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
          </motion.div>

          <div className="mt-12 flex flex-row gap-4">
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={handleResumeClick}
                className="text-sm flex justify-center items-center gap-2 border border-zinc-300 px-4 py-2 rounded-md hover:bg-zinc-100 transition cursor-pointer"
              >
                <CgFileDocument />
                Resume
              </button>

              <AnimatePresence>
                {showInput && (
                  <motion.div
                    ref={boxRef}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-[50vw] sm:w-[40vw] md:w-[30vw] fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white border border-zinc-400 rounded-lg shadow-lg p-4 flex flex-col sm:flex-row items-center gap-3 cursor-grab active:cursor-grabbing"
                  >
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name here..."
                      className="w-full px-3 py-2 text-sm sm:text-base border border-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    />
                    <button
                      onClick={handleAccess}
                      className="w-full sm:w-auto text-sm sm:text-base px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition cursor-pointer"
                    >
                      Access
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="mailto:chaturvediinitin@gmail.com"
              className="text-sm flex justify-center items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition"
            >
              <PiTelegramLogoThin />
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex gap-3 text-2xl text-zinc-500">
            <a href="https://www.linkedin.com/in/chaturvedinitin" target="_blank" rel="noreferrer"><PiLinkedinLogoLight /></a>
            <a href="https://github.com/chaturvedinitin" target="_blank" rel="noreferrer"><PiGithubLogoLight /></a>
            <a href="https://leetcode.com/u/chaturvedinitin/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
            <a href="#" target="_blank" rel="noreferrer"><RiTwitterXFill /></a>
          </div>

          <motion.div className="mt-20" variants={containerVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6 text-center sm:text-left">
              Projects
            </h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.01 }}
            >
              {[1, 2, 3, 4].map((_, idx) => (
                <motion.div key={idx} variants={cardVariants} whileHover={{ scale: 1.02 }}>
                  <Card project={idx % 2 === 0 ? Project1 : Project2} />
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 flex justify-center">
              <Link
                to="/projects"
                className="text-xs font-medium text-zinc-700 border border-zinc-500 px-2 py-1 rounded hover:text-black hover:border-black transition"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
