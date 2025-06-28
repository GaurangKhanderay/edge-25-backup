export const generateMetadata = ({
  title = `${process.env.NEXT_PUBLIC_APP_NAME ?? "EDGE"} - Explore, Develop, Grow, Excel`,
  description = `${
    process.env.NEXT_PUBLIC_APP_NAME ?? "EDGE"
  } is VIT Pune's Annual Student Summit. A transformative platform offering students a unique opportunity to gain practical insights from industry mentors.`,
  image = "/assets/thumbnail.png",
  iconUrl = "/assets/abhivriddhi logo.png",
  keywords = [
    "Abhivriddhi",
    "Abhivriddhi VIT Pune",
    "edge",
    "edge 25",
    "EDGE",
    "EDGE 2025",
    "EDGE 25",
    "abhivriddhi edge",
    "abhivriddhi vit",
    "abhivriddhi vit pune",
    "edge.abhivriddhivitpune.in",
    "abhivriddhivitpune",
    "VIT Pune",
    "Student Summit",
    "Explore",
    "Develop",
    "Grow",
    "Excel",
    "Industry Mentors",
  ],
  canonical = process.env.NEXT_PUBLIC_SITE_URL ?? "https://edge-25.vercel.app",
  noIndex = false,
} = {}) => {
  const metadataBase = process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : new URL("https://edge-25.vercel.app");

  return {
    metadataBase,
    title,
    description,
    keywords: keywords.join(", "),
    icons: [
      {
        rel: "icon",
        url: iconUrl,
        type: "image/png",
        sizes: "2048x564",
      },
      {
        rel: "apple-touch-icon",
        url: iconUrl,
        sizes: "2048x564",
      },
    ],
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      ...(image && {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@Gaurang Khanderay",
      ...(image && { images: [image] }),
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
    link: [
      {
        rel: "canonical",
        href: canonical,
      },
    ],
  };
};
