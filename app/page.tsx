"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stacks from "@/components/Stacks";
import Work from "@/components/Work";

const page = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <Marquee />
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="stacks">
        <Stacks />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default page;
