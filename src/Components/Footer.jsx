import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
   <footer className="text-gray-400 py-6 mt-10 border-t border-gray-700 shadow-inner">
      <div className="flex flex-col items-center gap-4">

        {/* Name */}
        <h2 className="text-white text-lg font-semibold">
          Resham Parveen
        </h2>

        {/* Tagline */}
        <p className="text-sm">
          Aspiring Full Stack Developer 🚀
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Resham2323"
            target="_blank"
            className="hover:text-purple-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-purple-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Resham. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;