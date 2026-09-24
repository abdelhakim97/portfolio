import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faMapMarkerAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";

function Work({ position, company, location, type, duration, description, img, SKILLS, link }) {
  return (
    <article className="glass rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-white/20 group">
      <div className="flex flex-col md:flex-row gap-6">
        
        {img && (
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md flex items-center justify-center p-2">
              <img src={img} alt={company} className="w-full h-full object-contain" />
            </div>
          </div>
        )}

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white font-display">
                {position}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faBuilding} className="text-blue-500" />
                  {company}
                </span>
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-500" />
                  {location}
                </span>
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faCalendar} className="text-cyan-500" />
                  {duration}
                </span>
              </div>
            </div>
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-xs font-semibold">
              {type}
            </span>
          </div>

          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              {description}
            </p>
          )}

          {SKILLS && (
            <div className="flex flex-wrap gap-2 mt-3">
              {SKILLS.split(",").map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-500/20"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          )}

          {link && (
            <a
              href={link}
              className="inline-block mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              {link}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Work;