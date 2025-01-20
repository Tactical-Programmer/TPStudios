import { useState, useEffect } from "react";
import "./ProjectCardStyles.css"; // Import the CSS file
import CardSelectSound from '../Sounds/Card-Select.mp3';
import MiniWebsiteOpenSound from '../Sounds/Mini-Website-Open.mp3';
import MiniWebsiteCloseSound from '../Sounds/Mini-Website-Close.mp3';

function ProjectCard({ src, link, h3, p, miniWebsiteComponent }) {
  const [flash, setFlash] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMiniWebsite, setShowMiniWebsite] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);

  const CardSelectAudio = new Audio(CardSelectSound);
  CardSelectAudio.volume = 0.5;
  const MiniWebsiteOpenAudio = new Audio(MiniWebsiteOpenSound);
  MiniWebsiteOpenAudio.volume = 0.5;
  const MiniWebsiteCloseAudio = new Audio(MiniWebsiteCloseSound);
  MiniWebsiteCloseAudio.volume = 0.5;

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
      MiniWebsiteOpenAudio.currentTime = 0;
      MiniWebsiteOpenAudio.play();
    }, 500); // Match the transition duration
  };

  const handleCollapse = () => {
    setIsMinimizing(true);
    MiniWebsiteCloseAudio.currentTime = 0;
    MiniWebsiteCloseAudio.play();
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
