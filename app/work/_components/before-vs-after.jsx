"use client";

import { Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

const beforeAndAfter = [
  {
    videoUrl:
      "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto/f_auto/v1778526176/Shreya_le1i7r.mp4",
    title: "Shreya Rao K",
    description:
      "Detailed before and after breakdown of standard editing procedures.",
  },
  {
    videoUrl:
      "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto/f_auto/v1778526181/Belmarose_h2qrvc.mp4",
    title: "Belmarose Edit",
    description:
      "Color grading, pacing adjustments, and overall visual refinement.",
  },
  {
    videoUrl:
      "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto/f_auto/v1778526184/Neha_pwkamp.mp4",
    title: "Dr Neha Gupta",
    description: "Dynamic contrast, exposure recovery, and visual enhancement.",
  },
];

function BeforeAfterVideo({ videoUrl, title, description }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex w-full max-w-[340px] flex-col gap-5">
      <div
        className="relative aspect-8/13 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070908] flex items-center justify-center group/video cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          playsInline
          loop
          muted={isMuted}
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Play/Pause Overlay */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isPlaying ? "opacity-0" : "opacity-100 bg-black/20"
          }`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md">
            <Play className="h-6 w-6 ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover/video:opacity-100 hover:bg-black/60"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="px-2 text-center">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/58">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function BeforeAndAfter() {
  return (
    <div className="mt-10 grid items-start justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
      {beforeAndAfter.map((item, index) => (
        <BeforeAfterVideo
          key={index}
          videoUrl={item.videoUrl}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
