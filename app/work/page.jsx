"use client";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import { Eye, Heart, MessageCircle } from "lucide-react";
import Script from "next/script";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import WebProjects from "./_components/web-projects";

const reelData = [
  {
    url: "https://www.instagram.com/reels/DOqItYGEtyO/",
    username: "drnehagupta17",
    profilePic: "/profile-pic/1.jpg",
    meta: "Original audio",
    reach: "26.6M",
    likes: "28.7K",
    comments: "1612",
  },
  {
    url: "https://www.instagram.com/reels/DNPrcPROAtp/",
    username: "armaanmalik",
    profilePic: "/profile-pic/2.jpg",
    meta: "Live performance",
    reach: "2.3M",
    likes: "68.3K",
    comments: "514",
  },
  {
    url: "https://www.instagram.com/reels/DJBZ0BbIV7Z/",
    username: "dr.mananvora",
    profilePic: "/profile-pic/3.jpg",
    meta: "Brand breakdown",
    reach: "1.7M",
    likes: "60.9K",
    comments: "676",
  },
  {
    url: "https://www.instagram.com/reels/DTkDC-jCHAE/",
    username: "thebarbank",
    profilePic: "/profile-pic/4.jpg",
    meta: "Original audio",
    reach: "1M",
    likes: "571",
    comments: "5",
  },
  {
    url: "https://www.instagram.com/reels/DTSedfOCEBW/",
    username: "thebarstockexchangeofficial",
    profilePic: "/profile-pic/5.jpg",
    meta: "Campaign edit",
    reach: "314K",
    likes: "806",
    comments: "9",
  },
  {
    url: "https://www.instagram.com/reels/DU0L__bkvHh/",
    username: "drnehagupta17",
    profilePic: "/profile-pic/1.jpg",
    meta: "Original audio",
    reach: "156K",
    likes: "2.8K",
    comments: "302",
  },
  {
    url: "https://www.instagram.com/reels/DXLm4FRiZEZ/",
    username: "shreya_rao_k",
    profilePic: "/profile-pic/7.jpg",
    meta: "Content reel",
    reach: "50K",
    likes: "483",
    comments: "5",
  },
  {
    url: "https://www.instagram.com/reels/DFdG6n0I7Ql/",
    username: "dr.gaurav.gangwani",
    profilePic: "/profile-pic/8.jpg",
    meta: "Original audio",
    reach: "18k",
    likes: "432",
    comments: "22",
  },
  {
    url: "https://www.instagram.com/reels/DNiVJyKB8Gc/",
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

function processInstagramEmbeds() {
  if (typeof window !== "undefined" && window.instgrm?.Embeds?.process) {
    window.instgrm.Embeds.process();
  }
}

function normalizeInstagramUrl(url) {
  return url.replace("/reels/", "/reel/");
}

function getYoutubeEmbedUrl(url) {
  const videoId = new URL(url).searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}?rel=0`;
}

const reels = reelData.map(
  ({ url, username, profilePic, meta, reach, likes, comments }) => {
    const canonicalUrl = normalizeInstagramUrl(url);

    return {
      canonicalUrl,
      embedUrl: `${canonicalUrl}?utm_source=ig_embed&utm_campaign=loading`,
      profile: { username, profilePic, meta },
      stats: { reach, likes, comments },
    };
  },
);

const youtubeVideos = youtubeUrls.map((url, index) => ({
  embedUrl: getYoutubeEmbedUrl(url),
  title: `YouTube video ${index + 1}`,
}));

// Section Heading Component
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

// Instagram Embed Component
const INSTAGRAM_EMBED_MAX_HEIGHT = 450;
const INSTAGRAM_HEADER_CROP = 56; // px to crop from top (white header)
const INSTAGRAM_ZOOM_SCALE = 1.18; // zoom to fill black bars around video

const InstagramEmbed = memo(function InstagramEmbed({
  canonicalUrl,
  embedUrl,
  showSkeleton,
  profile,
  stats,
}) {
  const embedRef = useRef(null);
  const avatarLabel = profile?.username?.slice(0, 2).toUpperCase() || "IG";
  const [showProfileImage, setShowProfileImage] = useState(
    Boolean(profile?.profilePic),
  );

  // Inject the blockquote into a ref-only div so React never manages it.
  // Instagram's script can freely replace/modify it without conflicting with React.
  useEffect(() => {
    const wrapper = embedRef.current;
    if (!wrapper || wrapper.childElementCount > 0) return;

    const blockquote = document.createElement("blockquote");
    blockquote.className = "instagram-media";
    blockquote.dataset.instgrmPermalink = embedUrl;
    blockquote.dataset.instgrmVersion = "14";
    Object.assign(blockquote.style, {
      background: "#000",
      margin: "0",
      padding: "0",
      width: "100%",
      maxWidth: "100%",
      minWidth: "0",
      overflow: "hidden",
      borderRadius: "0",
      border: "none",
      boxShadow: "none",
    });

    const link = document.createElement("a");
    link.href = canonicalUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    blockquote.appendChild(link);
    wrapper.appendChild(blockquote);

    // Force black background and crop the white header
    function forceBlackTheme() {
      // Disconnect to avoid infinite loop (our style changes trigger mutations)
      observer.disconnect();

      wrapper.querySelectorAll("*").forEach((el) => {
        // Force black bg and remove borders on all elements
        el.style.setProperty("background-color", "#000", "important");
        el.style.setProperty("border", "none", "important");
        el.style.setProperty("box-shadow", "none", "important");

        if (el.tagName === "IFRAME") {
          // Shift iframe upward to crop the white header
          el.style.setProperty(
            "margin-top",
            `-${INSTAGRAM_HEADER_CROP * INSTAGRAM_ZOOM_SCALE}px`,
            "important",
          );
          // Zoom to fill the black padding bars around the video
          el.style.setProperty(
            "transform",
            `scale(${INSTAGRAM_ZOOM_SCALE})`,
            "important",
          );
          el.style.setProperty("transform-origin", "top center", "important");
        } else {
          el.style.setProperty("padding", "0", "important");
          el.style.setProperty("margin", "0", "important");
        }
      });

      // Reconnect observer
      observer.observe(wrapper, { childList: true, subtree: true });
    }

    // Watch for Instagram's script to modify the DOM (childList only, not attributes)
    const observer = new MutationObserver(() => {
      forceBlackTheme();
    });

    observer.observe(wrapper, { childList: true, subtree: true });

    // Process the embed
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }

    return () => observer.disconnect();
  }, [embedUrl, canonicalUrl]);

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
            href={canonicalUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-lg border border-brand-accent/20 bg-brand-accent px-3 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-brand-accent/70"
          >
            View video
          </a>
        </div>
      )}

      {/* Embed area — clipped, min-height ensures skeleton is visible before iframe loads */}
      <div
        className="instagram-embed-container relative overflow-hidden bg-black"
        style={{
          maxHeight: `${INSTAGRAM_EMBED_MAX_HEIGHT}px`,
          minHeight: `${INSTAGRAM_EMBED_MAX_HEIGHT}px`,
        }}
      >
        {/* Skeleton overlay — managed by React, safe to toggle */}
        {showSkeleton && (
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between bg-black p-5 transition-opacity duration-300">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 animate-pulse rounded-full bg-white/8" />
              <div className="space-y-2">
                <div className="h-3 w-28 animate-pulse rounded-full bg-white/8" />
                <div className="h-3 w-20 animate-pulse rounded-full bg-white/6" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-3 w-full animate-pulse rounded-full bg-white/8" />
              <div className="h-3 w-5/6 animate-pulse rounded-full bg-white/6" />
              <div className="h-3 w-2/3 animate-pulse rounded-full bg-white/6" />
            </div>
            <div className="space-y-3">
              <div className="h-12 w-full animate-pulse rounded-md bg-white/8" />
              <div className="h-12 w-full animate-pulse rounded-md bg-white/6" />
            </div>
          </div>
        )}
        {/* Embed target — React does NOT manage children, Instagram script does */}
        <div ref={embedRef} />
      </div>

      {/* Stats bar */}
      {stats && (
        <div className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] px-3 pb-3 pt-3">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="rounded-lg border border-white/8 bg-blue-500/10 px-3 py-1 transition-all duration-300 group-hover:border-blue-500/12 group-hover:bg-blue-500/12">
              <div className="flex items-center gap-2 text-white/72">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20 text-blue-500/70">
                  <Eye className="h-3.5 w-3.5" />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/70">
                  Reach
                </p>
              </div>
              <p className="mt-1 text-lg font-bold tracking-normal text-white sm:text-xl">
                {stats.reach}
              </p>
            </div>

            <div className="rounded-lg border border-white/8 bg-white/3 px-3 py-1 transition-all duration-300 group-hover:border-white/12 group-hover:bg-white/4.5">
              <div className="flex items-center gap-2 text-white/72">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent/12 text-brand-accent">
                  <Heart className="h-3.5 w-3.5" />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/42">
                  Likes
                </p>
              </div>
              <p className="mt-1 text-lg font-bold tracking-normal text-white sm:text-xl">
                {stats.likes}
              </p>
            </div>

            <div className="rounded-lg border border-white/8 bg-white/3 px-2 py-1 transition-all duration-300 group-hover:border-white/12 group-hover:bg-white/4.5">
              <div className="flex items-center gap-1 text-white/72">
                <span className="flex px-2 h-7 w-7 items-center justify-center rounded-full bg-brand-accent/12 text-brand-accent">
                  <MessageCircle className="h-3.5 w-3.5" />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/42">
                  Comments
                </p>
              </div>
              <p className="mt-1 text-lg font-bold tracking-normal text-white sm:text-xl">
                {stats.comments}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

// Youtube Embed Component
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

// Work Page
export default function WorkPage() {
  const skeletonTimeoutRef = useRef(null);
  const [showInstagramSkeleton, setShowInstagramSkeleton] = useState(true);

  const handleInstagramReady = useCallback(() => {
    if (skeletonTimeoutRef.current) {
      window.clearTimeout(skeletonTimeoutRef.current);
    }

    setShowInstagramSkeleton(true);
    processInstagramEmbeds();

    skeletonTimeoutRef.current = window.setTimeout(() => {
      setShowInstagramSkeleton(false);
    }, 1400);
  }, []);

  useEffect(() => {
    let frameId;

    if (typeof window !== "undefined" && window.instgrm?.Embeds?.process) {
      frameId = window.requestAnimationFrame(() => {
        handleInstagramReady();
      });
    }

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      if (skeletonTimeoutRef.current) {
        window.clearTimeout(skeletonTimeoutRef.current);
      }
    };
  }, [handleInstagramReady]);

  return (
    <main className="min-h-screen bg-[#020403] text-white">
      <Navbar />

      <Script
        id="instagram-embed-script"
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onReady={handleInstagramReady}
      />

      <div className="px-5 pb-24 pt-36 sm:px-7 sm:pt-40 lg:pb-28">
        {/* Hero Section */}
        <section className="mx-auto max-w-[820px] text-center">
          <p className="inline-flex rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase text-brand-accent">
            Featured work
          </p>
          <h1 className="mt-6 max-w-[980px] font-bold leading-[1.04] tracking-normal text-white text-4xl md:text-5xl lg:text-6xl">
            Showcasing our best work
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg leading-9 text-white/58 sm:text-xl">
            A selection of short-form edits and other works that we are proud
            of.
          </p>
        </section>

        {/* Reels */}
        <section className="mx-auto mt-24 max-w-[1180px]">
          <SectionHeading
            label="Section 01"
            title="Reels"
            description="Short-form edits built for stronger hooks, sharper pacing, and a cleaner brand feel."
          />

          <div className="mt-10 grid items-start justify-items-center gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
            {reels.map((reel) => (
              <div
                key={reel.canonicalUrl}
                className="flex w-full justify-center"
              >
                <InstagramEmbed
                  canonicalUrl={reel.canonicalUrl}
                  embedUrl={reel.embedUrl}
                  showSkeleton={showInstagramSkeleton}
                  profile={reel.profile}
                  stats={reel.stats}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Youtube Videos */}
        <section className="mx-auto mt-24 max-w-[1180px]">
          <SectionHeading
            label="Section 02"
            title="YouTube videos"
            description="Longer edits with more room for story, structure, and measured pacing."
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            {youtubeVideos.map((video) => (
              <YoutubeEmbed
                key={video.embedUrl}
                embedUrl={video.embedUrl}
                title={video.title}
              />
            ))}
          </div>
        </section>

        {/* Web Projects */}
        <WebProjects />
      </div>
      <Footer />
    </main>
  );
}
