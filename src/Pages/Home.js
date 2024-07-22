import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import cv from '../assets/Cv/27dfc1214.pdf'
import imgprofile from '../assets/img/27fdq121fe.png'
function Home() {
  const { name, tagline, img, button_cv } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const mybutton_cv = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        mybutton_cv.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section min-h-screen flex flex-col md:flex-row justify-around">
      <div>
        <nav style={{width:'500px'}}>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi there, 👋<br></br>I'm<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-500  text-transparent md:text-4xl xl:text-5xl xl:leading-tight"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
        </nav>
        <br />
        <nav>
          <a 
            ref={mybutton_cv} 
            href={cv}
            download 
            className="btn_cv inline-flex items-center">
            <FontAwesomeIcon icon={faDownload} />
            {button_cv}
          </a>
        </nav>
      </div>
      <div className="mt-5 md:mt-0">
        <img ref={myimageref} style={{width:'300px'}} className="" src={imgprofile} alt="Profile" />
      </div>
    </main>
  );
}

export default Home;
