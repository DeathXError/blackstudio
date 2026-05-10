import ServicesPageClient from "./services-page-client";

export const metadata = {
  title: "Services",
  description:
    "Explore Blackstudio services across video editing, web development, graphic design, and content creation for modern brand launches.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
