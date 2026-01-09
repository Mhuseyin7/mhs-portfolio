import React from "react";
import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";






const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-[18px]">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-bold text-[16px]">Muhammed (Mhs)</div>
          <div className="text-[13px] text-gray-400 mt-1">
            Backend Developer • High school student (self-taught)
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Mhuseyin7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <RxGithubLogo />
            <span className="text-[14px]">GitHub</span>
          </a>

          <a
            href="https://www.instagram.com/muhammedhuseyinkoca/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <RxInstagramLogo />
            <span className="text-[14px]">Instagram</span>
          </a>

          <a
            href="mailto:mhuseyinkoca@gmail.com"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <MdEmail />
            <span className="text-[14px]">Email</span>
          </a>
        </div>

        <div className="text-[12px] text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Muhammed (Mhs). Built with Next.js.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
