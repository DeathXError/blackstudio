"use client";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Eye, Heart, MessageCircle } from "lucide-react";
import Script from "next/script";
import { memo, useCallback, useEffect, useRef, useState } from "react";

const reelData = [
  { url: "https://www.instagram.com/reels/DNPrcPROAtp/", reach: "214K", likes: "63.4K", comments: "1.8K" },
  { url: "https://www.instagram.com/reels/DJBZ0BbIV7Z/", reach: "188K", likes: "60.9K", comments: "1.2K" },
  { url: "https://www.instagram.com/reels/DOqItYGEtyO/", reach: "126K", likes: "18.7K", comments: "624" },
  { url: "https://www.instagram.com/reels/DFdG6n0I7Ql/", reach: "98K", likes: "12.3K", comments: "482" },
  { url: "https://www.instagram.com/reels/DU0L__bkvHh/", reach: "156K", likes: "42.1K", comments: "935" },
  { url: "https://www.instagram.com/reels/DXLm4FRiZEZ/", reach: "73K", likes: "9.8K", comments: "312" },
  { url: "https://www.instagram.com/reels/DNiVJyKB8Gc/", reach: "201K", likes: "55.6K", comments: "1.5K" },
  { url: "https://www.instagram.com/reels/DTSedfOCEBW/", reach: "89K", likes: "14.2K", comments: "578" },
  { url: "https://www.instagram.com/reels/DTkDC-jCHAE/", reach: "142K", likes: "38.5K", comments: "821" },
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

const reels = reelData.map(({ url, reach, likes, comments }) => {
  const canonicalUrl = normalizeInstagramUrl(url);

  return {
    canonicalUrl,
    embedUrl: `${canonicalUrl}?utm_source=ig_embed&utm_campaign=loading`,
    stats: { reach, likes, comments },
  };
});

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
const INSTAGRAM_EMBED_MAX_HEIGHT = 750;

const InstagramEmbed = memo(function InstagramEmbed({
  canonicalUrl,
  embedUrl,
  showSkeleton,
  stats,
}) {
  const embedRef = useRef(null);

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
      margin: "0 auto",
      width: "100%",
      maxWidth: "100%",
      minWidth: "0",
      overflow: "hidden",
      borderRadius: "6px",
    });

    const link = document.createElement("a");
    link.href = canonicalUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    blockquote.appendChild(link);
    wrapper.appendChild(blockquote);

    // Process the embed
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  }, [embedUrl, canonicalUrl]);

  return (
    <div className="w-full max-w-[420px] rounded-xl border border-white/10 bg-black transition-all duration-300 hover:-translate-y-1 hover:border-white/18">
      {/* Embed area — clipped */}
      <div
        className="instagram-embed-container relative overflow-hidden rounded-t-xl bg-black"
        style={{ maxHeight: `${INSTAGRAM_EMBED_MAX_HEIGHT}px` }}
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
        <div className="grid grid-cols-3 items-center justify-items-center gap-3 border-t border-white/10 bg-[#0a0d0c] px-4 py-4">
          <div>
          <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-brand-accent" />
                <span className="text-sm font-bold text-brand-accent">{stats.reach}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-normal text-white/38">
                Reach
              </p>
          </div>
          {/* <div className="flex items-center gap-1.5 h-full border-r border-white/8 px-2 py-1">
            <svg className="h-3.5 w-3.5 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="text-sm font-semibold text-brand-accent">{stats.reach}</span>
            <span className="ml-0.5 text-[10px] font-medium uppercase tracking-wider text-white/35">Reach</span>
          </div>
          <div className="flex items-center gap-1.5 border border-white/18 rounded-full px-2 py-1">
            <svg className="h-3.5 w-3.5 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="text-sm font-semibold text-brand-accent">{stats.likes}</span>
            <span className="ml-0.5 text-[10px] font-medium uppercase tracking-wider text-white/35">Likes</span>
          </div>
          <div className="flex items-center gap-1.5 border border-white/18 rounded-full px-2 py-1">
            <svg className="h-3.5 w-3.5 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="text-sm font-semibold text-brand-accent">{stats.comments}</span>
            <span className="ml-0.5 text-[10px] font-medium uppercase tracking-wider text-white/35">Comments</span>
          </div> */}
          <div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-brand-accent" />
                <span className="text-sm font-bold text-brand-accent">{stats.likes}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-normal text-white/38">
                Likes
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-brand-accent" />
                <span className="text-sm font-bold text-brand-accent">{stats.comments}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-normal text-white/38">
                Comments
              </p>
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
      </div>

      <Footer />
    </main>
  );
}
