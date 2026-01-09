"use client";

import { Backend_skill, Frontend_skill } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex h-fit flex-col items-center justify-center gap-3 overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex w-[95%] flex-col items-center justify-center gap-4">
        {/* Row 1: Frontend + Backend */}
        <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="h-full w-full lg:w-1/2">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.5)}
                  className="w-full rounded-md border border-[#7042f88b] px-[10px] py-[8px] text-[white] opacity-[0.9]"
                >
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent">
                    Frontend
                  </span>

                  <div className="my-4 flex flex-row flex-wrap items-center justify-around gap-5">
                    {Frontend_skill.map((image, index) => (
                      <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </InView>
          </div>

          <div className="h-full w-full lg:w-1/2">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromRight(0.5)}
                  className="h-full w-full rounded-md border border-[#7042f88b] px-[10px] py-[8px] text-[white] opacity-[0.9]"
                >
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent">
                    Backend
                  </span>

                  <div className="my-4 flex flex-row flex-wrap items-center justify-around gap-5">
                    {Backend_skill.map((image, index) => (
                      <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </InView>
          </div>
        </div>
      </div>

      {/* Background video */}
      <div className="absolute top-24 hidden h-full w-full md:block">
        <div className="absolute z-[-10] flex h-full w-full items-center justify-center bg-cover opacity-30">
          <video
            className="h-auto w-full"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
