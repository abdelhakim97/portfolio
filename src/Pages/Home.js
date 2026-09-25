import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowRight,
  faCode,
  faServer,
  faDatabase,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import cv from "../assets/Cv/cv_02.pdf";
import imgprofile from "../assets/img/img_pro.png";

function Home() {
  const { name, tagline, button_cv } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const descriptionRef = useRef();
  const myimageref = useRef();
  const mybutton_cv = useRef();
  const statsRef = useRef();
  const blobRef = useRef();

  useEffect(() => {
    // ✅ Ensure elements are visible before animating
    gsap.set(
      [
        h11.current,
        h12.current,
        h13.current,
        descriptionRef.current,
        mybutton_cv.current,
        statsRef.current,
        myimageref.current,
      ].filter(Boolean),
      { opacity: 1, clearProps: "all" }
    );

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(h11.current, { y: 50, opacity: 0, duration: 0.8 })
      .from(h12.current, { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(h13.current, { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(descriptionRef.current, { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(mybutton_cv.current, { y: 30, opacity: 0, duration: 0.7, clearProps: "opacity,transform" }, "-=0.4")
      .from(statsRef.current, { y: 30, opacity: 0, duration: 0.7, clearProps: "opacity,transform" }, "-=0.4")
      .from(myimageref.current, { x: 100, opacity: 0, duration: 1, clearProps: "opacity,transform" }, "-=1.2");

    // ✅ Cleanup on unmount
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden grid-bg pt-20 md:pt-20">
      {/* Background Blobs */}
      <div className="blob w-72 h-72 md:w-96 md:h-96 bg-blue-500 top-20 -left-20"></div>
      <div className="blob w-72 h-72 md:w-96 md:h-96 bg-purple-500 top-40 right-0" style={{ animationDelay: "2s" }}></div>
      <div className="blob w-64 h-64 md:w-72 md:h-72 bg-cyan-400 bottom-20 left-1/3" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto max-width relative z-10 flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 lg:px-24 pb-16 gap-6 lg:gap-12">

        {/* ============ Left Content ============ */}
        <div className="lg:w-1/2 space-y-5 md:space-y-6 order-2 lg:order-1">
          <div className="space-y-3 md:space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for work
            </div>

            <h1
              ref={h11}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 font-display"
            >
              Hi there, 👋 I'm
            </h1>
            <h1
              ref={h12}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display leading-[1.1] text-gray-900 dark:text-white"
            >
              {name}
            </h1>
            <h2
              ref={h13}
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold gradient-text font-display"
            >
              {tagline}
            </h2>
          </div>

          <div
            ref={descriptionRef}
            className="space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
          >
            <p>
              I craft{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                solid and scalable
              </span>{" "}
              full stack applications with great user experiences.
            </p>
            <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <p>
              Highly skilled in{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                backend APIs
              </span>
              , database design & frontend integration.
            </p>
          </div>

          {/* ✅ Download CV Button - Fixed */}
          <div className="pt-2">
            <a
              ref={mybutton_cv}
              href={cv}
              download="Abdelhakim_Akayou_CV.pdf"
              className="btn-shine inline-flex items-center px-6 md:px-7 py-3 md:py-3.5 rounded-xl text-white font-semibold text-sm md:text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 group"
              style={{ opacity: 1, visibility: "visible" }}
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2 md:mr-3" />
              {button_cv || "Download CV"}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 md:ml-3 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div ref={statsRef} className="grid grid-cols-3 gap-4 md:gap-6 pt-4 max-w-lg">
            {[
              { num: "1+", label: "Years Experience" },
              { num: "20+", label: "Projects Done" },
              { num: "10+", label: "Happy Clients" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text font-display">
                  {stat.num}
                </div>
                <div className="text-[10px] md:text-xs lg:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============ Right - Clean Blob Style ============ */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative order-1 lg:order-2 w-full">
          <div
            ref={myimageref}
            className="relative w-full max-w-[360px] md:max-w-[440px] lg:max-w-[500px]"
          >
            <div
              ref={blobRef}
              className="absolute -inset-4 opacity-40 dark:opacity-50 blur-2xl animate-blob"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #8b5cf6 50%, #06b6d4 100%)",
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              }}
            ></div>

            <div
              className="absolute inset-0 opacity-30 dark:opacity-40 blur-3xl animate-blob"
              style={{
                background:
                  "linear-gradient(135deg, #06b6d4 0%, #2563eb 50%, #8b5cf6 100%)",
                borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
                animationDelay: "3s",
              }}
            ></div>

            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-500/40 via-purple-500/40 to-cyan-500/40 blur-3xl animate-pulse"></div>

            <img
              src={imgprofile}
              alt="Profile"
              className="relative w-full h-auto object-contain z-10 animate-float block"
              style={{
                filter:
                  "drop-shadow(0 25px 40px rgba(37, 99, 235, 0.35)) drop-shadow(0 10px 20px rgba(139, 92, 246, 0.25))",
                marginTop: "-10px",
                marginBottom: "-10px",
              }}
            />

            {/* Floating Tech Badges */}
            <div
              className="absolute top-8 -left-3 md:top-12 md:-left-6 glass rounded-2xl p-2.5 md:p-3 shadow-xl animate-bounce z-20"
              style={{ animationDuration: "3s" }}
            >
              <FontAwesomeIcon icon={faCode} className="text-blue-500 text-base md:text-lg" />
            </div>

            <div
              className="absolute top-1/3 -right-3 md:-right-6 glass rounded-2xl p-2.5 md:p-3 shadow-xl animate-bounce z-20"
              style={{ animationDuration: "4s", animationDelay: "0.5s" }}
            >
              <FontAwesomeIcon icon={faServer} className="text-purple-500 text-base md:text-lg" />
            </div>

            <div
              className="absolute bottom-1/3 -left-2 md:-left-5 glass rounded-2xl p-2.5 md:p-3 shadow-xl animate-bounce z-20"
              style={{ animationDuration: "3.5s", animationDelay: "1s" }}
            >
              <FontAwesomeIcon icon={faDatabase} className="text-cyan-500 text-base md:text-lg" />
            </div>

            <div
              className="absolute bottom-12 right-0 md:bottom-16 md:-right-4 glass rounded-2xl p-2.5 md:p-3 shadow-xl animate-bounce z-20"
              style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}
            >
              <FontAwesomeIcon icon={faPalette} className="text-pink-500 text-base md:text-lg" />
            </div>

            <div className="absolute top-1/4 left-4 w-2 h-2 rounded-full bg-blue-500 z-20 animate-ping"></div>
            <div
              className="absolute bottom-1/4 right-8 w-2 h-2 rounded-full bg-purple-500 z-20 animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;