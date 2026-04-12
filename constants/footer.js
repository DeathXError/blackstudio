export const serviceLinks = [
    { label: "Video Editing", path: "#about" },
    { label: "Web Development", path: "#about" },
    { label: "Brand Design", path: "#about" },
    { label: "Content Systems", path: "#about" },
];

export const InstagramIcon = ({ className = "" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
    >
        <rect
            x="5"
            y="5"
            width="14"
            height="14"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.4" cy="7.8" r="1" fill="currentColor" />
    </svg>
);

export const LinkedinIcon = ({ className = "" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
    >
        <path
            d="M6.5 10v8M6.5 7v.1M11 18v-8M11 13.5c.4-2.1 1.7-3.5 3.6-3.5 2.2 0 3.4 1.5 3.4 4.1V18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.9"
        />
    </svg>
);

const XIcon = ({ className = "" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
    >
        <path
            d="M7 6l10 12M17 6L7 18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
        />
    </svg>
);

const YoutubeIcon = ({ className = "" }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
    >
        <rect
            x="4.5"
            y="7"
            width="15"
            height="10"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.8"
        />
        <path d="M10.5 9.8v4.4l4-2.2-4-2.2Z" fill="currentColor" />
    </svg>
);

export const socialLinks = [
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: InstagramIcon,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: LinkedinIcon,
    },
    {
        label: "X",
        href: "https://x.com",
        icon: XIcon,
    },
    {
        label: "YouTube",
        href: "https://youtube.com",
        icon: YoutubeIcon,
    },
];