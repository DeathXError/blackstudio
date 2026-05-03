"use client";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Script from "next/script";
import { memo, useCallback, useEffect, useRef, useState } from "react";

const reelUrls = [
  "https://www.instagram.com/reels/DNPrcPROAtp/",
  "https://www.instagram.com/reels/DJBZ0BbIV7Z/",
  "https://www.instagram.com/reels/DTSedfOCEBW/",
  "https://www.instagram.com/reels/DTkDC-jCHAE/",
  "https://www.instagram.com/reels/DFdG6n0I7Ql/",
  "https://www.instagram.com/reels/DU0L__bkvHh/",
  "https://www.instagram.com/reels/DXLm4FRiZEZ/",
  "https://www.instagram.com/reels/DNiVJyKB8Gc/",
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

const reels = reelUrls.map((url) => {
  const canonicalUrl = normalizeInstagramUrl(url);

  return {
    canonicalUrl,
    embedUrl: `${canonicalUrl}?utm_source=ig_embed&utm_campaign=loading`,
  };
});

const youtubeVideos = youtubeUrls.map((url, index) => ({
  embedUrl: getYoutubeEmbedUrl(url),
  title: `YouTube video ${index + 1}`,
}));

// Section Heading Component
const SectionHeading = memo(function SectionHeading({ title, description }) {
  return (
    <div className="px-2 max-w-[760px] text-start">
      <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-[620px] text-sm leading-7 text-white/46 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
});

// Instagram Embed Component
const InstagramEmbed = memo(function InstagramEmbed({
  canonicalUrl,
  embedUrl,
  showSkeleton,
}) {
  return (
    <div className="w-full max-w-[420px] rounded-lg border border-white/10 bg-white/3 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/4.5 sm:p-4">
      <div className="relative overflow-visible rounded-md bg-[#0a0d0c] sm:min-h-[620px]">
        {showSkeleton && (
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between bg-[#0a0d0c] p-5 transition-opacity duration-300">
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
        <blockquote
          className="instagram-media m-0! w-full min-w-0 max-w-full overflow-hidden rounded-md"
          data-instgrm-permalink={embedUrl}
          data-instgrm-version="14"
          style={{
            background: "#0a0d0c",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <a href={canonicalUrl} target="_blank" rel="noreferrer" />
        </blockquote>
      </div>
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
          <h1 className="text-4xl font-bold leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-6xl">
            Work
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-base leading-8 text-white/58 sm:text-lg sm:leading-9">
            A selection of short-form edits crafted for pace, clarity, and
            stronger attention.
          </p>
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
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
