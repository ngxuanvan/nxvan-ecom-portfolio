import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nxvan-ecom-portfolio.vercel.app",
      lastModified: new Date("2026-07-21"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
