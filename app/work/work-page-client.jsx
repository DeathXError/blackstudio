"use client";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import { Eye, Heart, MessageCircle, Play, Volume2, VolumeX } from "lucide-react";
import { memo, useRef, useState } from "react";
import WebProjects from "./_components/web-projects";

const reelData = [
  {
    url: "https://www.instagram.com/reel/DOqItYGEtyO/",
    videoUrl: "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto/f_auto/v1778483179/1_a6qnsj.mp4",
    username: "drnehagupta17",
    profilePic: "/profile-pic/1.jpg",
    meta: "Original audio",
    reach: "26.6M",
    likes: "28.7K",
    comments: "1612",
  },
  {
    url: "https://www.instagram.com/reel/DNPrcPROAtp/",
    videoUrl: "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto,f_auto,so_2/v1778483179/2_fu6e1e.mp4",
    username: "armaanmalik",
    profilePic: "/profile-pic/2.jpg",
    meta: "Live performance",
    reach: "2.3M",
    likes: "68.3K",
    comments: "514",
  },
  {
    url: "https://www.instagram.com/reel/DJBZ0BbIV7Z/",
    videoUrl: "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto/f_auto/v1778483189/3_txzxya.mp4",
    username: "dr.mananvora",
    profilePic: "/profile-pic/3.jpg",
    meta: "Brand breakdown",
    reach: "1.7M",
    likes: "60.9K",
    comments: "676",
  },
  {
    url: "https://www.instagram.com/reel/DTkDC-jCHAE/",
    videoUrl: "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto/f_auto/v1778483179/4_rsgmct.mp4",
    username: "thebarbank",
    profilePic: "/profile-pic/4.jpg",
    meta: "Original audio",
    reach: "1M",
    likes: "571",
    comments: "5",
  },
  {
    url: "https://www.instagram.com/reel/DTSedfOCEBW/",
    videoUrl: "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto/f_auto/v1778483186/5_n63igd.mp4",
    username: "thebarstockexchangeofficial",
    profilePic: "/profile-pic/5.jpg",
    meta: "Campaign edit",
    reach: "314K",
    likes: "806",
    comments: "9",
  },
  {
    url: "https://www.instagram.com/reel/DU0L__bkvHh/",
    videoUrl: "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto/f_auto/v1778483195/6_ms5ltg.mp4",
    username: "drnehagupta17",
    profilePic: "/profile-pic/1.jpg",
    meta: "Original audio",
    reach: "156K",
    likes: "2.8K",
    comments: "302",
  },
  {
    url: "https://www.instagram.com/reel/DXLm4FRiZEZ/",
    videoUrl: "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto/f_auto/v1778483197/7_b85efv.mp4",
    username: "shreya_rao_k",
    profilePic: "/profile-pic/7.jpg",
    meta: "Content reel",
    reach: "50K",
    likes: "483",
    comments: "5",
  },
  {
    url: "https://www.instagram.com/reel/DFdG6n0I7Ql/",
    videoUrl: "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto/f_auto/v1778483194/8_irw0fy.mp4",
    username: "dr.gaurav.gangwani",
    profilePic: "/profile-pic/8.jpg",
    meta: "Original audio",
    reach: "18k",
    likes: "432",
    comments: "22",
  },
  {
    url: "https://www.instagram.com/reel/DNiVJyKB8Gc/",
    videoUrl: "https://res.cloudinary.com/dhajqibnu/video/upload/q_auto/f_auto/v1778483191/9_fmwycm.mp4",
    username: "ncpamumbai",
    profilePic: "/profile-pic/9.jpg",
    meta: "Short-form cut",
    reach: "4k",
    likes: "63",
    comments: "5",
  },
];

const youtubeUrls = [
  "https://www.youtube.com/watch?v=S6IhA5DjUKc",
  "https://www.youtube.com/watch?v=Ln0afttKHPk",
  "https://www.youtube.com/watch?v=V4PvFVCTZpk",
  "https://www.youtube.com/watch?v=Sn3TH2oQcDg",
];

function getYoutubeEmbedUrl(url) {
  const videoId = new URL(url).searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}?rel=0`;
}

const reels = reelData.map(({ url, videoUrl, username, profilePic, meta, reach, likes, comments }) => ({
  url,
  videoUrl,
  profile: { username, profilePic, meta },
  stats: { reach, likes, comments },
}));

const youtubeVideos = youtubeUrls.map((url, index) => ({
  embedUrl: getYoutubeEmbedUrl(url),
  title: `YouTube video ${index + 1}`,
}));

const SectionHeading = memo(function SectionHeading({ title, description }) {
  return (
    <div className="px-2 mx-auto max-w-[760px] text-center">
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 mx-auto max-w-[620px] text-md leading-7 text-white/46 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
});

const InstagramEmbed = memo(function InstagramEmbed({ url, videoUrl, profile, stats }) {
  const avatarLabel = profile?.username?.slice(0, 2).toUpperCase() || "IG";
  const [showProfileImage, setShowProfileImage] = useState(Boolean(profile?.profilePic));
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
    <div className="group w-full max-w-[420px] rounded-xl border border-white/10 bg-black transition-all duration-300 hover:-translate-y-1 hover:border-white/18">
      {profile && (
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),rgba(255,255,255,0.04))] text-sm font-bold uppercase text-white">
              {showProfileImage ? (
                <Image
                  src={profile.profilePic}
                  alt={`${profile.username} profile picture`}
                  fill
                  sizes="44px"
                  className="object-cover"
                  onError={() => setShowProfileImage(false)}
                />
              ) : (
                avatarLabel
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white flex items-center gap-1">
                {profile.username}
                <Image
                  src="/profile-pic/verified.png"
                  alt="Blue tick"
                  width={16}
                  height={16}
                />
              </p>
              <p className="truncate text-xs text-white/46">{profile.meta}</p>
            </div>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-lg border border-brand-accent/20 bg-brand-accent px-3 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-brand-accent/70"
          >
            View video
          </a>
        </div>
      )}

      <div
        className="relative aspect-9/16 w-full overflow-hidden bg-[#070908] flex items-center justify-center group/video cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          playsInline
          loop
          muted={isMuted}
          className="w-full h-full object-contain"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Play/Pause Overlay — always visible when paused */}
        <div className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100 bg-black/20"}`}>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md">
            <Play className="h-6 w-6 ml-1" fill="currentColor" />
          </div>
        </div>

        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover/video:opacity-100 hover:bg-black/60"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      {stats && (
        <div className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] px-3 pb-3 pt-3">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="rounded-lg border border-white/8 bg-blue-500/10 px-3 py-1 transition-all duration-300 group-hover:border-blue-500/12 group-hover:bg-blue-500/12">
              <div className="flex items-center gap-2 text-white/72">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20 text-blue-500/70">
                  <Eye className="h-3.5 w-3.5" />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/70">Reach</p>
              </div>
              <p className="mt-1 text-lg font-bold tracking-normal text-white sm:text-xl">{stats.reach}</p>
            </div>

            <div className="rounded-lg border border-white/8 bg-white/3 px-3 py-1 transition-all duration-300 group-hover:border-white/12 group-hover:bg-white/4.5">
              <div className="flex items-center gap-2 text-white/72">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent/12 text-brand-accent">
                  <Heart className="h-3.5 w-3.5" />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/42">Likes</p>
              </div>
              <p className="mt-1 text-lg font-bold tracking-normal text-white sm:text-xl">{stats.likes}</p>
            </div>

            <div className="rounded-lg border border-white/8 bg-white/3 px-2 py-1 transition-all duration-300 group-hover:border-white/12 group-hover:bg-white/4.5">
              <div className="flex items-center gap-1 text-white/72">
                <span className="flex px-2 h-7 w-7 items-center justify-center rounded-full bg-brand-accent/12 text-brand-accent">
                  <MessageCircle className="h-3.5 w-3.5" />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/42">Comments</p>
              </div>
              <p className="mt-1 text-lg font-bold tracking-normal text-white sm:text-xl">{stats.comments}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

const YoutubeEmbed = memo(function YoutubeEmbed({ embedUrl, title }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/3 transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/4.5">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
});

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#020403] text-white">
      <Navbar />

      <div className="px-5 pb-24 pt-36 sm:px-7 sm:pt-40 lg:pb-28">
        <section className="mx-auto max-w-[820px] text-center">
          <p className="inline-flex rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase text-brand-accent">
            Featured work
          </p>
          <h1 className="mt-6 max-w-[980px] font-bold leading-[1.04] tracking-normal text-white text-4xl md:text-5xl lg:text-6xl">
            Showcasing our best work
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg leading-9 text-white/58 sm:text-xl">
            A selection of short-form edits and other works that we are proud of.
          </p>
        </section>

        <section id="reels-showcase" className="mx-auto mt-24 max-w-[1180px] scroll-mt-32">
          <SectionHeading
            title="Reels"
            description="Short-form edits built for stronger hooks, sharper pacing, and a cleaner brand feel."
          />
          <div className="mt-10 grid items-start justify-items-center gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
            {reels.map((reel) => (
              <div key={reel.url} className="flex w-full justify-center">
                <InstagramEmbed
                  url={reel.url}
                  videoUrl={reel.videoUrl}
                  profile={reel.profile}
                  stats={reel.stats}
                />
              </div>
            ))}
          </div>
        </section>

        <section id="youtube-showcase" className="mx-auto mt-24 max-w-[1180px] scroll-mt-32">
          <SectionHeading
            title="YouTube videos"
            description="Longer edits with more room for story, structure, and measured pacing."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            {youtubeVideos.map((video) => (
              <YoutubeEmbed key={video.embedUrl} embedUrl={video.embedUrl} title={video.title} />
            ))}
          </div>
        </section>

        <WebProjects />
      </div>
      <Footer />
    </main>
  );
}