import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href?: string;
  tags?: string[];
}

const ProjectCard = ({ src, title, description, href, tags = [] }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0b0b16]/40">
      <Image
        src={src}
        alt={title}
        width={1200}
        height={800}
        className="w-full object-cover"
      />

      <div className="relative p-5">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full border border-[#2A0E61] text-gray-200 bg-[#0b0b16]/60"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-5 items-center justify-center px-4 py-2 rounded-lg border border-[#7042f88b] text-white hover:bg-white/10 transition"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
