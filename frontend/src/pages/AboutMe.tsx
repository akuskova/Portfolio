import NightSky from "../components/NightSky";
import { useLockScroll } from "../hooks/useLockScroll";

export default function AboutMe() {
  useLockScroll();

  return (
    <NightSky className="min-h-[calc(100vh-5rem)]">
      <div className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-8 max-w-5xl mx-auto">

        <img
          src="/assets/profilePic.jpeg"
          alt="Anna Kuskova"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shrink-0
                     transition duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-sunset/40
                     animate-[fadeInUp_0.6s_ease-out]"
        />

        <div className="flex flex-col gap-6 text-center md:text-left">
          <p className="text-lg md:text-3xl text-moonlight leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.15s_backwards]">
            I'm a computer science student at UC Irvine, minoring in statistics.
          </p>

          <p className="text-base md:text-xl text-cloud leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.25s_backwards]">
            The work I'm drawn to focuses on making websites more usable for the communities existing tools leave behind. Accessible interfaces, simpler forms, and small changes that make daily tasks less exhausting for the people who need them most.
          </p>

          <p className="text-base md:text-xl text-cloud leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.45s_backwards]">
            Currently: looking for internships and collaborators working on software that reaches real people. Reach out any time.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="mailto:anna.kuskova@email.com"
              className="bg-sunset text-evening font-bold px-6 py-3 rounded-full hover:bg-sunset-glow transition"
            >
              Get in touch
            </a>
            <a
              href="/assets/AnnaKResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-moonlight text-moonlight font-bold px-6 py-3 rounded-full hover:border-sunset hover:text-sunset transition"
            >
              View resume
            </a>
          </div>
        </div>

      </div>
    </NightSky>
  );
}