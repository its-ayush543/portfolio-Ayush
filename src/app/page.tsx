"use client";

import { DATA } from "@/app/data";
import {
  AboutMe,
  Contact,
  Experience,
  Footer,
  Header,
  Navbar,
  Projects,
  Skills,
} from "@/components/sections";
import TargetCursor from "@/components/ui/target-cursor";
import useMobileDetection from "@/hooks/use-mobile";

export default function Page() {
  const checkMobile = useMobileDetection();

  return (
    <div className="bg-background mx-auto px-4 pt-6 sm:pt-12 w-full lg:w-2/3 xl:w-1/2 text-foreground">
      <Navbar />

      <main className="px-4 min-h-lvh">
        <Header data={DATA.HEADER} />
        <AboutMe data={DATA.ABOUT_ME} />
        <Experience data={DATA.EXPERIENCE} />
        <Projects data={DATA.PROJECTS} all={DATA.ALL_PROJECTS} />
        <Skills data={DATA.SKILLS} />
        <Contact data={DATA.HEADER} />
        <Footer />
      </main>

      {!checkMobile && <TargetCursor spinDuration={2} hideDefaultCursor />}
    </div>
  );
}
