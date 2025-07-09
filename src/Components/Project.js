import React from "react";
import { motion } from "framer-motion";
import { ModalVideo, useToggle } from '@baskvava/react-video-modal';

function Project({ title, image, description, techstack, previewLink, githubLink, linkVideo }) {
  const { isOpen, toggle, close } = useToggle();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">

        <motion.div 
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 md:h-56 object-cover group-hover:opacity-90 transition-opacity duration-300" 
          />
        </motion.div>


        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
            {title}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
            {description}
          </p>
          

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Technologies:
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {techstack}
            </p>
          </div>


         <div className="flex justify-between items-center mt-auto space-x-2">
  {previewLink !== "#" && (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={previewLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium text-center"
    >
      Preview
    </motion.a>
  )}

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={toggle}
    className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 text-sm font-medium"
  >
    Demo 
  </motion.button>

  {githubLink === 'Private' ? (
    <span className="flex-1 px-3 py-2 bg-gray-400 text-white rounded-lg text-sm font-medium cursor-not-allowed text-center">
      Private
    </span>
  ) : (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 px-3 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 text-sm font-medium text-center"
    >
      Code
    </motion.a>
  )}
</div>
        </div>

  
        <ModalVideo
          title={`${title} Demo`}
          width={800}
          isOpen={isOpen}
          onClosed={close}
          url={linkVideo}
        />
      </div>
    </motion.div>
  );
}

export default Project;