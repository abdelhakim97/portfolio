import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <section className="mb-10">
        <h1 className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl text-gray-700 dark:text-gray-300">
          {personalDetails.about}
        </p>
      </section>
      <section className="mb-10">
        <h1 className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2">
          Work Experience
        </h1>
        <div className="space-y-8 mt-8">
          {React.Children.toArray(
            workDetails.map(({ Position, Company, Location, Type, Duration,img,description,SKILLS,link }) => (
              
              <Work
                img={img}
                link={link}
                SKILLS={SKILLS}
                description={description}
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
                className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"

              />

            ))
          )}
        </div>
      </section>
      <section>
        <h1 className="text-3xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2">
          Education
        </h1>
        <div className="space-y-8 mt-8">
          {React.Children.toArray(
            eduDetails.map(({ Position, Company, Location, Type, Duration,img,description,SKILLS }) => (
              <Work
                img={img}
                description={description}
                SKILLS={SKILLS}
              
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
                className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default About;
