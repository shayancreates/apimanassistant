"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image1 from "@/assets/imgs/abstract/1.png";
import Image2 from "@/assets/imgs/abstract/2.png";
import Image3 from "@/assets/imgs/abstract/3.png";
import Image4 from "@/assets/imgs/abstract/4.png";
import Image5 from "@/assets/imgs/abstract/5.png";
import Image6 from "@/assets/imgs/abstract/6.png";
import Image7 from "@/assets/imgs/abstract/7.png";
import { AuroraText } from "./magicui/aurora-text";
const cards = [
  { url: Image1, id: 1 },
  { url: Image2, id: 2 },
  { url: Image3, id: 3 },
  { url: Image4, id: 4 },
  { url: Image5, id: 5 },
  { url: Image6, id: 6 },
  { url: Image7, id: 7 },
];

const Example = () => {
  return (
    <div className="bg-black text-white">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-950">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="main">
      <div className="relative h-[432px] w-[768px] shrink-0 overflow-hidden rounded-xl shadow-lg">
        <img
          src={card.url.src}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Example;
