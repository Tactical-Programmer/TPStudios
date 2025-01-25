import { useEffect, useState, useRef } from "react";
import "./DemonShurikenMaster.css";
import BackgroundMusic from '../../Music/DemonShurikenMaster.mp3';

function MiniWebsiteDemonShurikenMaster() {
  const BackgroundMusicAudio = useRef(new Audio(BackgroundMusic));
  BackgroundMusicAudio.current.loop = true;

  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    BackgroundMusicAudio.current.currentTime = 0;
    BackgroundMusicAudio.current.volume = 0.3;
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
    <div className="DSM-container">
      <h1>Demon Shuriken Master</h1>
      <p className="DSM-p">Welcome to the mini website for Demon Shuriken Master.</p>
      <button onClick={toggleMute} className="mute-button">
        {isMuted ? "Unmute" : "Mute"}
      </button>
      {/* Add more content as needed */}
    </div>
  );
}

export default MiniWebsiteDemonShurikenMaster;