"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full px-6 md:px-0"
    >
      <div className="md:absolute w-auto h-auto md:top-[80px] z-[5]">
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromTop}
              className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              About Me
            </motion.div>
          )}
        </InView>
      </div>

      <div className="flex flex-col items-center justify-start relative md:mt-[120px] lg:mt-16 z-[20] w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-10 w-full">
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromLeft(0.5)}
                className="flex flex-col items-center justify-center rounded-full border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500 p-[3px]"
              >
                <div className="rounded-full overflow-hidden bg-[#0b0b16]">
                  <img src="/logo.png" alt="Mhs" width={220} />
                </div>
              </motion.div>
            )}
          </InView>

          <div className="flex-1">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromRight(0.5)}
                  className="Welcome-box px-[18px] py-[14px] border border-[#7042f88b] opacity-[0.95]"
                >
                  <h2 className="text-white text-xl font-semibold mb-3">Muhammed (Mhs)</h2>
                  <p className="text-gray-300 leading-relaxed">
                    I&apos;m a high school student (self-taught) focused on backend development. I build real products
                    (blog platforms, e-commerce) and I&apos;m currently developing a modular web framework with a clean
                    architecture: authentication, RBAC, logs, dynamic menus/pages, and admin tooling.
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200">
                    <div className="border border-[#2A0E61] rounded-lg p-3">
                      <span className="font-semibold text-white">Backend</span>
                      <div className="text-gray-300 mt-1">Django, PHP, REST APIs</div>
                    </div>
                    <div className="border border-[#2A0E61] rounded-lg p-3">
                      <span className="font-semibold text-white">Databases</span>
                      <div className="text-gray-300 mt-1">PostgreSQL, MySQL</div>
                    </div>
                    <div className="border border-[#2A0E61] rounded-lg p-3">
                      <span className="font-semibold text-white">Security</span>
                      <div className="text-gray-300 mt-1">JWT, roles/permissions, audit logs</div>
                    </div>
                    <div className="border border-[#2A0E61] rounded-lg p-3">
                      <span className="font-semibold text-white">Workflow</span>
                      <div className="text-gray-300 mt-1">Git, Docker, clean code</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </InView>

            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromBottom}
                  className="mt-5 Welcome-box px-[18px] py-[12px] border border-[#7042f88b] opacity-[0.9]"
                >
                  <p className="text-gray-300 text-sm">
                    Goal: become a strong software engineer by shipping real systems and improving architecture every week.
                  </p>
                </motion.div>
              )}
            </InView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
