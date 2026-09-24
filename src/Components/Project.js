import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCode, faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

function Project({ title, image, description, techstack, previewLink, githubLink, linkVideo }) {
  const [isOpen, setIsOpen] = React.useState(false);

  // منع تمرير الصفحة عند فتح الفيديو
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // إغلاق بمفتاح Escape
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-full"
      >
        <div className="h-full flex flex-col glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group border border-white/20">
          
          {/* ===== Image ===== */}
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <button
              onClick={() => setIsOpen(true)}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Play demo"
            >
              <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faPlay} className="text-blue-600 ml-1" />
              </div>
            </button>

            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-blue-600">
              Featured
            </div>
          </div>

          {/* ===== Content ===== */}
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 font-display">
              {title}
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow leading-relaxed">
              {description}
            </p>

            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                Tech Stack
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                {techstack}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-auto">
              {previewLink !== "#" && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-xs font-semibold transition-all shadow-lg shadow-blue-500/30"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  Preview
                </motion.a>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white text-xs font-semibold transition-all shadow-lg shadow-purple-500/30"
              >
                <FontAwesomeIcon icon={faPlay} />
                Demo
              </motion.button>

              {githubLink === "Private" ? (
                <span className="flex-1 inline-flex items-center justify-center px-3 py-2.5 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-semibold cursor-not-allowed">
                  Private
                </span>
              ) : (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white text-xs font-semibold transition-all"
                >
                  <FontAwesomeIcon icon={faCode} />
                  Code
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Video Modal - Overlay أسفل الكارت ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base truncate">
                  {title} — Demo
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-red-500 hover:text-white text-gray-700 dark:text-gray-300 transition-colors"
                  aria-label="Close"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              {/* Video */}
              <div className="relative w-full aspect-video bg-black">
                {linkVideo ? (
                  <video
                    src={linkVideo}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    No video available
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Project;