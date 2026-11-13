import Hero from "@/app/components/sections/hero";
import Services from "@/app/components/sections/services";
import AboutUs from "@/app/components/sections/aboutus";
import Projects from "@/app/components/sections/projects";
import WhatsappFloat from "./components/sections/whatsapp-float";
import Nav from "./components/sections/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Projects />
        <WhatsappFloat />
      </main>
    </>
  );
}
