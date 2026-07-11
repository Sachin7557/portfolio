import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { fadeIn } from "../animation/fadeIn";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: "95%", color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, level: "90%", color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, level: "85%", color: "text-yellow-400" },
  { name: "React.js", icon: <FaReact />, level: "85%", color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "90%", color: "text-sky-400" },
  { name: "Node.js", icon: <FaNodeJs />, level: "75%", color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, level: "70%", color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, level: "60%", color: "text-green-400" },
  { name: "Git", icon: <FaGitAlt />, level: "85%", color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub />, level: "90%", color: "text-white" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950">
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
            My <span className="text-blue-500">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies I use to build modern web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn(index % 2 === 0 ? "left" : "right", index * 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 p-6 rounded-2xl shadow-lg"
            >

              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className={`text-3xl ${skill.color}`}>
                    {skill.icon}
                  </span>

                  <h3 className="text-xl font-semibold">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-blue-400 font-semibold">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-blue-500 rounded-full"
                />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}