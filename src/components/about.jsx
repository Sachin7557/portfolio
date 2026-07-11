import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { fadeIn } from "../animation/fadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24"
    >
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
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm a Computer Science Engineering student passionate about
            creating modern, responsive and user-friendly web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8">
              Hello! I'm <span className="text-blue-500 font-semibold">Sachin Kumar Rana</span>,
              a passionate Frontend Developer and Computer Science Engineering
              student. I enjoy building clean, responsive and interactive web
              applications using React.js, JavaScript and Tailwind CSS.
            </p>

            <p className="text-gray-300 leading-8 mt-5">
              I have completed a Frontend Development Internship where I worked
              on real-world projects and gained experience in React, APIs,
              GitHub and responsive UI development.
            </p>

            <button className="mt-8 px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition">
              Download CV
            </button>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6"
          >

            {/* Education */}
            <div className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">
              <FaUserGraduate className="text-4xl text-blue-500 mb-4" />

              <h3 className="text-2xl font-semibold">
                Education
              </h3>

              <p className="text-gray-400 mt-3">
                B.Tech in Computer Science Engineering
              </p>

              <p className="text-gray-500 text-sm mt-2">
                2023 - 2027
              </p>
            </div>

            {/* Internship */}
            <div className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">
              <FaBriefcase className="text-4xl text-green-500 mb-4" />

              <h3 className="text-2xl font-semibold">
                Internship
              </h3>

              <p className="text-gray-400 mt-3">
                Frontend Developer Intern
              </p>

              <p className="text-gray-500 mt-2">
                Bluestock Fintech Pvt. Ltd.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">
              <FaLaptopCode className="text-4xl text-yellow-400 mb-4" />

              <h3 className="text-2xl font-semibold">
                Skills
              </h3>

              <p className="text-gray-400 mt-3">
                React.js, JavaScript, Tailwind CSS,
                HTML, CSS, Git & GitHub
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}