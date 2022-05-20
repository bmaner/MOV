import { cls } from "../../libs/client/utils";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styles from "../../styles/styles.module.css";

export default function MusicPlayer() {
  const musicTracks = [
    {
      name: "Ballerina",
      src: "https://makerealmoment.s3.ap-northeast-2.amazonaws.com/ballerina_by_yehezkel-raz_Artlist.mp3",
    },
    {
      name: "Shifting-winds",
      src: "https://makerealmoment.s3.ap-northeast-2.amazonaws.com/shifting-winds+by+peter-john+Artlist.wav",
    },
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className={cls(styles.font_regular_500)}>
      <AudioPlayer
        style={{
          borderRadius: "1rem",
          width: "300px",
          position: "absolute",
          bottom: 10,
          left: 10,
          color: "rgba(0,0,0,0.9)",
          background: "#f2f2f2",
          zIndex: 100,
        }}
        autoPlay
        src={musicTracks[trackIndex].src}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: ${musicTracks[trackIndex].name}`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    </div>
  );
}
