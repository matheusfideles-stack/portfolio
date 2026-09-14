import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { ContactFooter } from "@/components/contact-footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Journey />
        <Projects />
        <Certifications />
      </main>
      <ContactFooter />
    </>
  );
}
