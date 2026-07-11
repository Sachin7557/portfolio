import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              Sachin<span className="text-white">.</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Frontend Developer | React Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">

            <a
              href="https://github.com/Sachin7557"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-blue-500 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sachin-kumar-rana-601943288"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Back To Top */}
          <button
            onClick={scrollTop}
            className="bg-blue-500 hover:bg-blue-600 p-4 rounded-full transition duration-300"
          >
            <FaArrowUp />
          </button>

        </div>

        <hr className="my-6 border-slate-700" />

        <p className="text-center text-gray-500">
          © {year} Sachin Kumar Rana. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}