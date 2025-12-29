"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function ProjectVideo({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Format time to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -25% 0px",
      }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    // Initialize video as paused
    videoRef.current.pause();
    setIsPlaying(false);

    // Set duration when metadata is loaded
    const handleLoadedMetadata = () => {
      setDuration(videoRef.current.duration);
    };

    // Update progress as video plays
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        const current = videoRef.current.currentTime;
        const total = videoRef.current.duration || 1;
        setCurrentTime(current);
        setProgress((current / total) * 100);
      }
    };

    videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    videoRef.current.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isVisible && isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVisible, isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleProgressClick = (e) => {
    if (!videoRef.current || !duration) return;

    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const newTime = clickPosition * duration;
    
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(clickPosition * 100);
  };

  return (
    <div className="project-single-banner">
      <div className="video-container" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          className="project-video"
        />

        <div className={`video-overlay ${isPlaying ? "hidden" : ""}`}>
          {isPlaying ? <Pause size={40} /> : <Play size={40} />}
        </div>

        {/* Progress Bar */}
        <div 
          className="progress-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="progress-time-display">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div 
            className="progress-bar"
            onClick={handleProgressClick}
          >
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}