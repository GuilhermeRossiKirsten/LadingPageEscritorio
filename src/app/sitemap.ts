import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.kirstenneto.adv.br/",
      lastModified: new Date("2024-01-10"),
      changeFrequency: "never",
      priority: 1,
    },
  ];
}
