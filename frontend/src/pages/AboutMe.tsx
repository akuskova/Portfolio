import NightSky from "../components/NightSky"
import { useLockScroll } from "../hooks/useLockScroll"

export default function AboutMe() {
  useLockScroll()

  return (
    <NightSky className="min-h-[calc(100vh-5rem)]">
      <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center gap-6 p-8">
        <h1 className="text-3xl md:text-6xl font-bold animate-[fadeInUp_0.6s_ease-out]">
          About Me
        </h1>
        <p className="text-base md:text-2xl max-w-2xl animate-[fadeInUp_0.6s_ease-out_0.15s_backwards]">
          I am a passionate software developer with experience in building web applications using modern technologies. I enjoy solving complex problems and continuously learning new skills.
        </p>
        <p className="text-base md:text-2xl max-w-2xl animate-[fadeInUp_0.6s_ease-out_0.25s_backwards]">
          In my free time, I like to contribute to open-source projects and explore new programming languages and frameworks.
        </p>
      </div>
    </NightSky>
  );
}