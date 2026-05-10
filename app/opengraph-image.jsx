import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blackstudioo.com";

export const alt = "Blackstudio digital creative agency";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        color: "white",
      }}
    >
      <img
        src={logoSrc}
        alt="Blackstudio logo"
        width={300}
        style={{ marginBottom: 40 }}
      />

      <div
        style={{
          fontSize: 72,
          fontWeight: 800,
          margin: 0,
          textAlign: "center",
          background: "linear-gradient(90deg, #ffffff, #38bdf8)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        BlackStudio
      </div>

      <p
        style={{
          fontSize: 32,
          marginTop: 20,
          opacity: 0.9,
          textAlign: "center",
        }}
      >
        Video Editing & Creative Services
      </p>

      <p
        style={{
          fontSize: 22,
          marginTop: 10,
          opacity: 0.6,
        }}
      >
        Editing • Web • Design • Content
      </p>
    </div>,
    {
      ...size,
    },
  );
}
