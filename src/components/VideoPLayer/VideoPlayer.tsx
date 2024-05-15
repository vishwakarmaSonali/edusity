import { useRef } from "react";
import "./VideoPlayer.css";
import collegeVideo from "../../assets/college.mp4";
const VideoPlayer = ({ playState, setPlayState }: any) => {
  const player = useRef(null);

  const closePLayer = (e: any) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePLayer}
    >
      <video src={collegeVideo} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
