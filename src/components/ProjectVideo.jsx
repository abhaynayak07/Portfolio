"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function ProjectVideo({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

    if (isVisible) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isVisible]);

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

  return (
    <div className="project-single-banner" onClick={togglePlay}>
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
    </div>
  );
}
