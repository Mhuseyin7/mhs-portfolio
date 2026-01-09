import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>

      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10 max-w-6xl">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Framework Core"
          description="A modular web framework I&apos;m building: auth, RBAC/policies, audit logs, dynamic menus/pages, admin tooling."
          href="https://github.com/Mhuseyin7"
          tags={["Auth", "RBAC", "Logs", "Architecture"]}
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Django Blog Platform"
          description="A detailed blog system with authentication, posts, categories, comments/likes, admin workflows, and SEO-friendly routing."
          href="https://github.com/Mhuseyin7"
          tags={["Django", "PostgreSQL", "Admin", "SEO"]}
        />
        <ProjectCard
          src="/CardImage.png"
          title="Apparel E-commerce"
          description="An e-commerce project with products, variants (size/color), stock, cart, orders, and admin management."
          href="https://github.com/Mhuseyin7"
          tags={["E-commerce", "CRUD", "Inventory", "Orders"]}
        />
      </div>

      <p className="text-gray-400 text-sm mt-10 px-6 text-center max-w-3xl">
        I&apos;m actively improving these projects and moving them into clean, reusable modules inside my framework.
      </p>
    </div>
  );
};

export default Projects;
