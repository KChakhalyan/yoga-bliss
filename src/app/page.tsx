import Image from "next/image";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Schedule from "./sections/Schedule";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Schedule />
    </>
  );
}
