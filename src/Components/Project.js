import React from "react";
import { ModalVideo, useToggle } from '@baskvava/react-video-modal';
function Project({ title, image, description, techstack, previewLink, githubLink,linkVideo }) {
  const { isOpen, toggle, close } = useToggle()
  return (
    <div className="p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-dark-heading dark:text-light-heading mb-2">
          {title}
        </h2>
        <p className="text-content text-gray-600 dark:text-gray-300 mb-2">{description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{techstack}</p>
        <div className="flex justify-between items-center">
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Preview
          </a>
          <a
            onClick={toggle}
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Video
          </a>
          <ModalVideo
            title="video"
            width={800}
            isOpen={isOpen}
            onClosed={close}
            url={linkVideo}
          />
          {
            (githubLink === 'Private') ? (<a
              href="#"
              style={{ pointerEvents: 'none', color: 'gray', textDecoration: 'none' }}
              rel="no"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              Private
            </a>) : (<a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>)
          }

        </div>
      </div>
    </div>
  );
}

export default Project;
