import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { WhyAttend } from "@/components/sections/why-attend";
import { FeaturedSpeakers } from "@/components/sections/featured-speakers";
import { Sponsors } from "@/components/sections/sponsors";
import { Gallery } from "@/components/sections/gallery";
import { Timeline } from "@/components/sections/timeline";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <WhyAttend />
      <FeaturedSpeakers />
      <Sponsors />
      <Gallery />
      <Timeline />
      <FAQ />
      <Contact />
    </>
  );
}
