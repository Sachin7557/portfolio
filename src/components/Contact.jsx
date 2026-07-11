import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { fadeIn } from "../animation/fadeIn";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Feel free to contact me for internships, freelance work or
            collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">
              Let's Connect 👋
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-xl">
                <FaEnvelope className="text-blue-500 text-2xl" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-semibold">
                    ranasachinkumar436@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-xl">
                <FaPhoneAlt className="text-green-500 text-2xl" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="font-semibold">
                    +91 7903360379
                  </p>
                </div>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/Sachin7557"
                target="_blank"
                rel="noreferrer"
                className="text-4xl hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sachin-kumar-rana-601943288"
                target="_blank"
                rel="noreferrer"
                className="text-4xl hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.form
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-2xl shadow-xl"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none mb-5"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none mb-5"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none mb-5"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none mb-5 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}