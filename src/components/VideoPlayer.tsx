import { MouseEvent, useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  source: string;
  poster: string;
  videoLabel: string;
  playLabel: string;
  pauseLabel: string;
  fallbackText: string;
}

const CONTROL_BAR_HEIGHT = 56;

const VideoPlayer = ({
  source,
  poster,
  videoLabel,
  playLabel,
  pauseLabel,
  fallbackText,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.pause();
    video.load();
    setIsPlaying(false);
  }, [source, poster]);

  const play = async () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    try {
      await video.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.paused) {
      void play();
      return;
    }

    video.pause();
  };

  const handleVideoClick = (event: MouseEvent<HTMLVideoElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientY >= bounds.bottom - CONTROL_BAR_HEIGHT) {
      return;
    }

    togglePlayback();
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        className="video-player__video"
        src={source}
        poster={poster}
        controls
        playsInline
        preload="auto"
        aria-label={videoLabel}
        onClick={handleVideoClick}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        {fallbackText}
      </video>
      {!isPlaying && (
        <button type="button" className="video-player__overlay" aria-label={playLabel} onClick={() => void play()}>
          <span className="video-player__play-icon" aria-hidden="true" />
        </button>
      )}
      <button
        type="button"
        className="video-player__toggle"
        aria-label={isPlaying ? pauseLabel : playLabel}
        onClick={togglePlayback}
      >
        <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
        {isPlaying ? pauseLabel : playLabel}
      </button>
    </div>
  );
};

export default VideoPlayer;
