"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { InView } from "react-intersection-observer";

const SKILLS = [
  { title: "Backend", desc: "Django, PHP, REST APIs" },
  { title: "Databases", desc: "PostgreSQL, MySQL" },
  { title: "Security", desc: "JWT, roles/permissions, audit logs" },
  { title: "Engineering", desc: "Clean architecture, testing mindset, Git" },
] as const;

function About() {
  const reduceMotion = useReducedMotion();

  const initialState = reduceMotion ? false : "hidden";
  const animateState = (inView: boolean) =>
    reduceMotion ? "visible" : inView ? "visible" : "hidden";

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative z-[20] flex min-h-screen w-full flex-col items-center justify-center px-6 py-20 md:px-0"
    >
      {/* Title (galaxy yapıyı bozmaz, üstte kalır) */}
      <div className="md:absolute md:top-[80px] z-[25] h-auto w-auto">
        <InView triggerOnce={false} threshold={0.35}>
          {({ inView, ref }) => (
            <motion.h2
              ref={ref}
              id="about-title"
              initial={initialState}
              animate={animateState(inView)}
              variants={slideInFromTop}
              className="text-[38px] sm:text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              About Me
            </motion.h2>
          )}
        </InView>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-[25] flex w-full max-w-5xl flex-col items-center justify-start md:mt-[150px] lg:mt-[120px]">
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:items-start">
          {/* Avatar */}
          <InView triggerOnce={false} threshold={0.35}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={initialState}
                animate={animateState(inView)}
                variants={slideInFromLeft(0.45)}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative rounded-full border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500 p-[3px] shadow-[0_0_60px_rgba(112,66,248,0.22)]">
                  <div className="relative overflow-hidden rounded-full bg-[#0b0b16]">
                    <Image
                      src="/logo.png"
                      alt="Mhs"
                      width={240}
                      height={240}
                      className="h-[210px] w-[210px] sm:h-[230px] sm:w-[230px] object-cover"
                      priority={false}
                    />
                  </div>

                  {/* subtle ring shine */}
                  <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
                </div>

                <p className="mt-4 text-xs text-gray-400 text-center max-w-[240px]">
                  Building real products • learning by shipping
                </p>
              </motion.div>
            )}
          </InView>

          {/* Main Card */}
          <div className="flex-1 w-full">
            <InView triggerOnce={false} threshold={0.25}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial={initialState}
                  animate={animateState(inView)}
                  variants={slideInFromRight(0.45)}
                  className="Welcome-box relative overflow-hidden rounded-2xl border border-[#7042f88b] bg-[#0b0b16]/40 px-5 py-5 backdrop-blur-xl sm:px-6 sm:py-6"
                >
                  {/* top highlight line */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                  {/* header */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      Muhammed <span className="text-white/70">(Mhs)</span>
                    </h3>
                    <p className="text-sm text-gray-300/90">
                      High school student (self-taught) focused on backend development.
                    </p>
                  </div>

                  {/* description */}
                  <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-gray-300">
                    <p>
                      I build real products (blog platforms, e-commerce) and I care about
                      clean architecture and maintainable code.
                    </p>
                    <p>
                      I&apos;m developing a modular web framework: authentication, RBAC,
                      logs, dynamic menus/pages, and admin tooling.
                    </p>
                  </div>

                  {/* skill cards */}
                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {SKILLS.map((item) => (
                      <div
                        key={item.title}
                        className="group rounded-2xl border border-[#2A0E61] bg-[#0b0b16]/40 p-4 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#7042f88b] hover:shadow-[0_0_30px_rgba(112,66,248,0.10)]"
                      >
                        <span className="mb-1 block text-sm font-semibold text-white">
                          {item.title}
                        </span>
                        <div className="text-sm leading-relaxed text-gray-300">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* subtle bottom fade */}
                  <div className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[520px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
                </motion.div>
              )}
            </InView>

            {/* Goal Card */}
            <InView triggerOnce={false} threshold={0.25}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial={initialState}
                  animate={animateState(inView)}
                  variants={slideInFromBottom}
                  className="Welcome-box mt-5 rounded-2xl border border-[#7042f88b] bg-[#0b0b16]/30 px-5 py-4 backdrop-blur-xl sm:px-6"
                >
                  <p className="text-sm leading-relaxed text-gray-300">
                    Goal: become a strong software engineer by shipping real systems and
                    improving architecture every week.
                  </p>
                </motion.div>
              )}
            </InView>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
