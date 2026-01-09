"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const HeroContent = () => {
  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className="flex flex-row items-center justify-center px-6 md:px-20 mt-24 md:mt-28 w-full z-[20]"
        >
          <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-start">
            <div className="flex flex-row gap-3 flex-wrap">
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
              >
                <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px]">Backend Developer</h1>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
              >
                <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px]">Django • PHP</h1>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
              >
                <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px]">High school student (self-taught)</h1>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-3 mt-2 text-4xl md:text-5xl font-bold text-white max-w-[720px] w-auto h-auto z-20 leading-tight"
            >
              <span>
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Muhammed (Mhs)
                </span>
                .
              </span>
              <span className="text-lg md:text-xl text-gray-300 font-medium">
                I build secure, scalable web apps and I&apos;m currently developing my own modular web framework.
              </span>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.8)}
              className="text-sm md:text-md text-gray-400 max-w-[720px] z-30"
            >
              <ul className="list-disc pl-5 space-y-2">
                <li>Built a detailed Django Blog Platform (auth, comments, admin, SEO-friendly structure).</li>
                <li>Built an Apparel E-commerce project (products, variants, cart, orders).</li>
                <li>Built a PHP Blog (legacy stack) and now turning everything into reusable modules.</li>
              </ul>
            </motion.div>

            <motion.a
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(1)}
              href="#projects"
              className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[220px]"
            >
              View Projects
            </motion.a>
          </div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromRight(0.8)}
            className="hidden md:flex w-full h-full justify-center items-center"
          >
            <Image src="/mainIcons.svg" alt="hero icons" width={600} height={600} />
          </motion.div>
        </div>
      )}
    </InView>
  );
};

export default HeroContent;
