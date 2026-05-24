import CaseStudies from "@/components/sections/case-studies";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Nav from "@/components/sections/nav";
import Pillars from "@/components/sections/pillars";
import Problem from "@/components/sections/problem";
import Security from "@/components/sections/security";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Pillars />
        <CaseStudies />
        <Team />
        <Testimonials />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
