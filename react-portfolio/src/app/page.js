"use client";

import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import Image from "next/image";
import avatar from "../assets/avatar.png";
import coding from "../assets/coding.png";
import study from "../assets/jsWallpaper.jpg";
import dk from "../assets/dk.svg";
import { FaGit ,FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { useState, useEffect } from "react";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import web7 from "../assets/web7.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for dark mode on page load
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setDarkMode(true);
    }
  }, []);

  // Update localStorage when dark mode is toggled
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Xhulio Duka" />
        <meta name="keywords" content="Frontend Developer, Fullstack" />
        <meta property="og:title" content="Xhulio Duka Portfolio" />
        <title>Xhulio Duka Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/src/app/favicon.ico" className="rounded-full" />
      </Head>
      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen group">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-sans font-medium text-violet-950 dark:text-white">
              developedbydk
            </h1>
            <div className="relative mx-auto rounded w-24 h-24 overflow-hidden">
              <Image src={dk} fill className="object-cover" />
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={toggleDarkMode}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-violet-950 to-violet-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800 group-hover:animate-pulseOnce">
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-violet-950 dark:text-white font-medium md:text-6xl">
                Xhulio Duka
              </h2>
              <h3 className="text-2xl py-2 text-gray-800 dark:text-gray-300 md:text-3xl">
                Front End Developer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-300 md:text-xl max-w-lg mx-auto">
                👋🏻Hi, I&apos;m Giulio.
                <br /> ⚛Junior Frontend developer, Fullstack aspiration.
                <br /> &lt; /&gt;Knowledge in Frontend technologies and Tools.
                <br /> &gt;_Knowledge in Ethical Hacking.
                <br /> 🐧Linux.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-violet-950 dark:text-white">
              <a href="https://www.linkedin.com/in/xhulio-duka-107386327/">
                <AiFillLinkedin className="cursor-pointer" />
              </a>
              <a href="https://github.com/giuli0dk">
               <AiFillGithub className="cursor-pointer" />
              </a>
              <a href="mailto:giulio.dk00@gmail.com">
               <AiFillGoogleCircle className="cursor-pointer" />
              </a>
            </div>
            <div className="relative bg-gradient-to-b from-violet-950 mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image src={avatar} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <section className="group">
          <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800 group-hover:animate-pulseOnce">
            <h3 className="text-3xl py-8 mt-9 text-violet-950 dark:text-white font-medium flex justify-center">
              Skills
            </h3>
            <div className="text-5xl flex justify-center py-3 border rounded-xl bg-black dark:bg-gray-700">
              <ul className="flex items-center gap-6 py-3">
              <li>
                  <a href="https://git-scm.com/">
                    <FaGit className="text-orange-700 cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                    <FaHtml5 className="text-orange-500 cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                    <FaCss3Alt className="text-blue-500 cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                    <FaJs className="text-yellow-400 cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://getbootstrap.com/">
                    <FaBootstrap className="text-violet-600 cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/">
                    <SiTailwindcss className="text-blue-600 cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://react.dev/">
                    <FaReact className="text-blue-300 cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://nextjs.org/">
                    <SiNextdotjs className="text-white cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="group">
          <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800 group-hover:animate-pulseOnce">
            <h3 className="text-3xl py-8 mt-9 text-violet-950 dark:text-white font-medium text-center">
              Services I offer
            </h3>
            <div className="relative mx-auto rounded-full w-96 h-96 overflow-hidden">
              <Image src={coding} fill className="object-cover" />
            </div>
            <div className="text-center">
              <ul className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                <li>User Interface (UI) Development.</li>
                <li>Performance Optimization.</li>
                <li>API and Third-Party Services Integration.</li>
                <li>Cross-Browser Compatibility.</li>
                <li>Version Control and Code Management.</li>
                <li>Collaboration with Design Teams.</li>
                <li>Animations and Interactivity.</li>
                <li>Testing and Debugging.</li>
                <li>SEO Optimization.</li>
                <li>Progressive Web Apps (PWA).</li>
                <li>JavaScript Frameworks/Libraries.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="group">
          <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800 group-hover:animate-pulseOnce">
            <h3 className="text-3xl py-8 mt-9 text-violet-950 dark:text-white font-medium text-center">
              My Education
            </h3>
            <div className="relative mx-auto rounded-full w-96 h-96 overflow-hidden">
              <Image src={study} fill className="object-cover" />
            </div>
            <div className="text-center mt-9">
              <p className="text-gray-800 dark:text-gray-300 leading-8">
                Activities and Associations: Live Coding, Team Projects
                <br />
                Learning the role of a Frontend Developer through software
                development technologies: HTML, CSS, JavaScript, Bootstrap,
                Tailwindcss, React.js, Next.js, Git.
                <br />
                Using platforms for team collaboration: GitHub, Trello.
                <br />
                Platforms for visualizing and understanding development:
                Wappalyzer, Chrome DevTools.
                <br />
                Editor: Visual Studio Code.
                <br />
                Creating and navigating through folders: Linux Shell.
                <br />
                Learning through Live Coding, Team Working, and Individual Work.
              </p>
            </div>
          </div>
        </section>

        <section className="group" id="resume">
<div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800 group-hover:animate-pulseOnce">
<h3 className="text-3xl py-8 mt-9 text-violet-950 dark:text-white font-medium text-center">Portfolio</h3>
<div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap mt-9"> 
  <div className="basis-1/3 flex-1 relative text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800">
    <Image src={web1} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
    <h4 className="text-center text-lg py-2 text-violet-950 dark:text-white">Project: fetch API</h4>
  </div>
  <div className="basis-1/3 flex-1 relative text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800">
    <Image src={web2} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
    <h4 className="text-center text-lg py-2 text-violet-950 dark:text-white">Project: financial dashboard</h4>
  </div>
  <div className="basis-1/3 flex-1 relative text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800">
    <Image src={web3} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
    <h4 className="text-center text-lg py-2 text-violet-950 dark:text-white">Project: website coming soon...</h4>
  </div>
  <div className="basis-1/3 flex-1 relative text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800">
    <Image src={web4} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
    <h4 className="text-center text-lg py-2 text-violet-950 dark:text-white">Project: landing page</h4>
  </div>
  <div className="basis-1/3 flex-1 relative text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800">
    <Image src={web5} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
    <h4 className="text-center text-lg py-2 text-violet-950 dark:text-white">Project: EA Sports replication website</h4>
  </div>
  <div className="basis-1/3 flex-1 relative text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800">
    <Image src={web6} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
    <h4 className="text-center text-lg py-2 text-violet-950 dark:text-white">Project: weather app</h4>
  </div>
  <div className="basis-1/3 flex-1 relative text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800">
    <Image src={web7} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
    <h4 className="text-center text-lg py-2 text-violet-950 dark:text-white">Project: react auth</h4>
  </div>
</div>
</div>
</section>

      </main>
    </div>
  );
}
