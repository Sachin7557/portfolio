import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { fadeIn } from "../animation/fadeIn";

import weatherImg from "../assets/weather.jpg";
import swiggyImg from "../assets/swiggy.jpg";
import ipoImg from "../assets/ipo.jpg";

const projects = [
  {
    title: "Weather App",
    image: weatherImg,
    description:
      "A responsive weather application built with React.js that fetches live weather data using an API.",
    tech: ["React", "CSS", "Weather API"],
    github: "https://github.com/Sachin7557",
    live: "https://weather-ashy-nu.vercel.app/",
  },
  {
    title: "Swiggy Clone",
    image: swiggyImg,
    description:
      "A food delivery frontend inspired by Swiggy with categories, restaurant cards and search functionality.",
    tech: ["React", "Tailwind CSS", "JSON Server"],
    github: "https://github.com/Sachin7557",
    live: "https://swiggy-l52w.vercel.app/",
  },
  {
    title: "IPO Dashboard",
    image: ipoImg,
    description:
      "Admin dashboard to manage IPO listings with CRUD operations and responsive UI.",
    tech: ["React", "Tailwind", "REST API"],
    github: "https://github.com/Sachin7557",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Some projects I've built using modern web technologies.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn("up", index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-blue-500 transition sm:w-auto"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition sm:w-auto"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}