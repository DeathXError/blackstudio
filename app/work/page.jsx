import WorkPageClient from "./work-page-client";

export const metadata = {
  title: "Work",
  description:
    "See Blackstudio work across short-form reels, YouTube edits, and website projects built for sharper pacing and clearer brand presentation.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return <WorkPageClient />;
}
