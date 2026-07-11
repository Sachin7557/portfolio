import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import profile from "../assets/profile.jpg";
import { fadeIn } from "../animation/fadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-blue-400 text-lg font-semibold mb-4"
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-7xl font-extrabold leading-tight"
          >
            Sachin{" "}
            <span className="text-blue-500">
              Kumar Rana
            </span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "UI Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl sm:text-3xl md:text-4xl mt-6 text-gray-300 font-semibold"
          />

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-gray-400 mt-8 leading-8 max-w-xl"
          >
            Passionate Computer Science Engineering student with experience
            building responsive and modern web applications using React,
            Tailwind CSS, JavaScript and REST APIs.
          </motion.p>
                    {/* Buttons */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-stretch gap-4 mt-10 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 25px rgb(59 130 246)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto text-center px-7 py-3 rounded-xl bg-blue-500 font-semibold"
            >
              View Projects
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.08,
                borderColor: "#3b82f6",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-7 py-3 rounded-xl border border-gray-500 flex items-center justify-center gap-2"
            >
              <HiDownload />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center gap-6 mt-10 sm:flex-row"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://github.com/Sachin7557"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-blue-500"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: -10 }}
              href="https://www.linkedin.com/in/sachin-kumar-rana-601943288"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-blue-500"
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            style={{ width: 430, height: 430 }}
            className="absolute rounded-full bg-blue-500/20 blur-3xl"
          />

          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="Sachin Kumar Rana"
            animate={{
              y: [0, -18, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
            }}
            className="relative z-10 w-full rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.6)]"
            style={{ maxWidth: 430 }}
          />
        </motion.div>
      </div>
    </section>
  );
}