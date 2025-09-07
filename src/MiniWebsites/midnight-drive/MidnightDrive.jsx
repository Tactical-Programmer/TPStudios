import { useEffect, useState, useRef } from "react";
import "./MidnightDrive.css";
import BackgroundMusic from '../../Music/MidnightDrive.mp3';
import ComingSoonImage from '../../assets/coming-soon.jpg';

function MiniWebsiteMidnightDrive() {
  const BackgroundMusicAudio = useRef(new Audio(BackgroundMusic));
  BackgroundMusicAudio.current.loop = true;

  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    BackgroundMusicAudio.current.currentTime = 0;
    BackgroundMusicAudio.current.volume = 0.15;
    BackgroundMusicAudio.current.play();

    return () => {
      BackgroundMusicAudio.current.pause();
    };
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    BackgroundMusicAudio.current.muted = !isMuted;
    if (!isMuted) {
      BackgroundMusicAudio.current.play(); // Ensure playback resumes when unmuted
    }
  };

  return (
    <div className="MD-container">
      <h1>Midnight Drive</h1>
      <p className="MD-p">Welcome to the mini website for Midnight Drive.</p>
      <button onClick={toggleMute} className="mute-button">
        {isMuted ? "Unmute" : "Mute"}
      </button>
      <img className="coming-soon" src={ComingSoonImage}/>
      {/* Add more content as needed */}
    </div>
  );
}

export default MiniWebsiteMidnightDrive;
