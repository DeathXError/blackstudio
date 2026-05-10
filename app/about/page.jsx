import AboutPageClient from "./about-page-client";

export const metadata = {
  title: "About",
  description:
    "Learn about Blackstudio, the creative team behind launch-ready video edits, websites, brand visuals, and content systems.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
