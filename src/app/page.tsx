import Image from "next/image";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Schedule from "./sections/Schedule";
import Gallery from "./sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Schedule />
      <Gallery />
    </>
  );
}
