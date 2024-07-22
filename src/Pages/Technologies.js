import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    laravel,
    bootstrap,
    mongodb,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    python,
    mysql,
    php
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <section className="mb-10">
        <h1 className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl text-gray-700 dark:text-gray-300">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center gap-10 pt-6">
        <div className="tech-item">
          <img src={css} title="CSS" alt="CSS" className="h-20 mx-auto"/>
        </div>
        <div className="tech-item">
          <img src={js} title="JavaScript" alt="JavaScript" className="h-20 mx-auto"/>
        </div>
        <div className="tech-item">
          <img src={react} title="React" alt="React" className="h-20 mx-auto"/>
        </div>
        <div className="tech-item">
          <img src={redux} title="Redux" alt="Redux" className="h-20 mx-auto"/>
        </div>
         <div className="tech-item">
          <img src={python} title="python" alt="python" className="h-20 mx-auto"/>

          
        </div> 
        <div className="tech-item">
          <img src={bootstrap} title="Bootstrap" alt="Bootstrap" className="h-20 mx-auto"/>
        </div>
        <div className="tech-item">
          <img src={html} title="HTML" alt="HTML" className="h-20 mx-auto"/>
        </div>
        <div className="tech-item">
          <img src={php} title="php" alt="php" className="h-20 mx-auto"/>
        </div>
         <div className="tech-item">
          <img src={mongodb} title="mongodb" alt="mongodb" className="h-20 mx-auto"/>
        </div>
        <div className="tech-item">
          <img src={laravel} title="laravel" alt="laravel" className="h-20 mx-auto"/>
        </div>
        <div className="tech-item">
          <img src={mysql} title="mysql" alt="mysql" className="h-20 mx-auto"/>
        </div>
      </section>
      <section className="mt-10">
        <h1 className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center gap-10 pt-6">
        
        <div className="tech-item">
          <img src={github} title="Github" alt="Github" className="h-20 mx-auto"/>
        </div>
        <div className="tech-item">
          <img src={git} title="Git" alt="Git" className="h-20 mx-auto"/>
        </div>
        <div className="tech-item">
          <img src={npm} title="NPM" alt="NPM" className="h-20 mx-auto"/>
        </div>
        <div className="tech-item">
          <img src={figma} title="Figma" alt="Figma" className="h-20 mx-auto"/>
        </div>
       
        <div className="tech-item">
          <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" className="h-20 mx-auto"/>
        </div>
        <div className="tech-item">
          <img src={postman} title="Postman" alt="Postman" className="h-20 mx-auto"/>
        </div>
      </section>
    </main>
  );
}

export default Technologies;
