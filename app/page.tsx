import Hero from "@/app/components/sections/hero";
import Services from "@/app/components/sections/services";
import AboutUs from "@/app/components/sections/aboutus";
import Projects from "@/app/components/sections/projects";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Projects />
      </main>
    </>
  );
}
