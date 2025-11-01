
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import DarkVeil from "./Darkveil";

const ParallaxBackground = () => {
 
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        
        <div
          className="absolute inset-0 w-full h-screen -z-50"
        />
        <DarkVeil />
      </div>
    </section>
  );
};

export default ParallaxBackground;