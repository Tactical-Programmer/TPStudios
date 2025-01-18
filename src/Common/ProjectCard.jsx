import { useState, useEffect } from "react";
import "./ProjectCardStyles.css"; // Import the CSS file
import CardSelectSound from '../Sounds/Card-Select.mp3';

function ProjectCard({ src, link, h3, p, miniWebsiteComponent }) {
  const [flash, setFlash] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMiniWebsite, setShowMiniWebsite] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);
  let CardSelectAudio = new Audio(CardSelectSound);
  CardSelectAudio.volume = 0.5;

  useEffect(() => {
    if (flash || isExpanding || isExpanded || showMiniWebsite || isMinimizing) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [flash, isExpanding, isExpanded, showMiniWebsite, isMinimizing]);

  const handleExpand = () => {
    CardSelectAudio.play();
    setFlash(true);
    setTimeout(() => setFlash(false), 100); // Remove flash class after animation
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
          className={`project-card ${flash ? "flash" : ""} ${isExpanding ? "expanding" : ""} ${isExpanded ? "expanded" : ""} ${isMinimizing ? "minimizing" : "visible"}`}
          onClick={!isExpanded ? handleExpand : null}
        >
          <a href={link} target="_blank">
            <img className="hover" src={src} alt={`${h3} Logo`} />
            <h3>{h3}</h3>
            <p>{p}</p>
          </a>
        </div>
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
