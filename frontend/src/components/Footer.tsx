import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  // Dont apply fixed footer to api and project pages.
  const isProjectDetail =
    location.pathname.startsWith("/projects") ||
    location.pathname == "/api" 

  return (
    <footer
      className={`${
        isProjectDetail ? "" : "md:fixed md:bottom-0 md:left-0 md:w-full md:z-40"
      } bg-midnight text-cloud border-t-2 border-sunset py-4 px-4`}
    >
      <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
        <p className="text-sm">&copy; 2026 Anna Kuskova. All rights reserved.</p>

        <a
          href="mailto:anna.kuskova@email.com"
          aria-label="Email"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-stormy text-moonlight text-lg hover:scale-110 hover:bg-sunset hover:text-evening transition"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://linkedin.com/in/akuskova"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-stormy text-moonlight text-lg hover:scale-110 hover:bg-sunset hover:text-evening transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/akuskova"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-stormy text-moonlight text-lg hover:scale-110 hover:bg-sunset hover:text-evening transition">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}