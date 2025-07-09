import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import cv from '../assets/Cv/27dfc1214.pdf'
import imgprofile from '../assets/img/20240703_182117-removebg-preview.png'

function Home() {
  const { name, tagline, img, button_cv } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const descriptionRef = useRef();
  const myimageref = useRef();
  const mybutton_cv = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    )
    .from(
      h12.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .from(
      h13.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .from(
      descriptionRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      mybutton_cv.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      myimageref.current,
      {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=1"
    );
  }, []);

  return (
    <main className="container mx-auto max-width section flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-24 pb-20" style={{ marginTop: '-2rem' }}>
      <div className="md:w-1/2 space-y-8">
        <div className="space-y-4">
          <h1
            ref={h11}
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-dark-heading dark:text-light-heading"
          >
            Hi there, 👋 I'm
          </h1>
          <h1
            ref={h12}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-heading dark:text-light-heading"
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-blue-600 dark:text-blue-400"
          >
            {tagline}
          </h2>
        </div>
        
        <div 
          ref={descriptionRef}
          className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          <p>I like to craft solid and scalable full stack applications with great user experiences.</p>
          <div className="h-px w-16 bg-gray-300 dark:bg-gray-600"></div>
          <p>
            Highly skilled in backend APIs, database design & frontend integration.<br />
    Proven experience building successful products for clients across several countries.
          </p>
        </div>
        
        <div className="pt-4">
          <a 
            ref={mybutton_cv} 
            href={cv}
            download 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 group"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-3" />
            {button_cv}
            <FontAwesomeIcon icon={faArrowRight} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      <div className="mt-16 md:mt-0 md:w-1/2 flex justify-center">
        <img 
          ref={myimageref} 
          className="w-64 h-64 md:w-80 md:h-80 rounded-lg object-cover shadow-xl" 
          src={imgprofile} 
          alt="Profile" 
          style={{
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        />
      </div>
 
    </main>
   
  );
}

export default Home;