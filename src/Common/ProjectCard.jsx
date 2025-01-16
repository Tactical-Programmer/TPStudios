import { useState, useEffect } from "react";
import "./ProjectCardStyles.css"; // Import the CSS file

function ProjectCard({ src, link, h3, p, miniWebsiteComponent }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);
  const [showMiniWebsite, setShowMiniWebsite] = useState(false);

  useEffect(() => {
    if (isExpanded || isExpanding) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isExpanded, isExpanding]);

  const handleExpand = () => {
    setIsExpanding(true);
    setTimeout(() => {
      setIsExpanding(false);
      setIsExpanded(true);
      setShowMiniWebsite(true); // Show mini website content after expansion
    }, 500); // Match the transition duration
  };

  const handleCollapse = () => {
    setIsMinimizing(true);
    setTimeout(() => {
      setIsExpanded(false);
      setIsMinimizing(false);
      setShowMiniWebsite(false); // Hide mini website content before minimizing
    }, 500); // Match the transition duration
  };

  return (
    <>
      <div className="project-card-wrapper">
        <div
          className={`project-card ${isExpanding ? "expanding" : ""} ${isExpanded ? "expanded" : ""} ${isMinimizing ? "minimizing" : "visible"}`}
          onClick={!isExpanded ? handleExpand : null}
        >
          <a href={link} target="_blank">
            <img className="hover" src={src} alt={`${h3} Logo`} />
            <h3>{h3}</h3>
            <p>{p}</p>
          </a>
        </div>
        {(isExpanding || isExpanded) && <div className="project-card-placeholder"></div>}
      </div>
      {isExpanded && (
        <>
          <div className={`mini-website ${isMinimizing ? "minimizing" : "expanded"} ${showMiniWebsite ? "" : "hidden"}`}>
            {miniWebsiteComponent}
          </div>
          <button className="close-button" onClick={handleCollapse}>
            X
          </button>
        </>
      )}
    </>
  );
}

export default ProjectCard;
