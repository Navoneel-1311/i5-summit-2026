import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/events", "/team"];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
