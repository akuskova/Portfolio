import NightSky from "../components/NightSky";

export default function Browzen() {
  return (
    <NightSky stars={false}>
      <div className="items-center justify-start text-center gap-6 p-8 pt-10 md:pt-60 flex flex-col max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-moonlight">Browzen</h1>

        <p className="text-base md:text-xl max-w-2xl text-moonlight animate-[fadeInUp_0.6s_ease-out]">
          <span className="font-bold text-sunset">Scope:</span> 36-hour hackathon project (VenusHacks 2026), team of 4, owned backend architecture.
        </p>

        <p className="text-base md:text-xl max-w-2xl text-moonlight animate-[fadeInUp_0.6s_ease-out_0.15s_backwards]">
          <span className="font-bold text-sunset">Project Description:</span> A Chrome extension that lets users delegate the confusing parts of the web to an AI agent working invisibly on their behalf. Users say what they need in plain language or voice; a sandboxed browser handles the messy site; the side panel shows a calm, one-decision-at-a-time interface built for how their brain actually works.
        </p>

        <p className="text-base md:text-xl max-w-2xl text-moonlight animate-[fadeInUp_0.6s_ease-out_0.25s_backwards]">
          <span className="font-bold text-sunset">Problem Solved:</span> Users with ADHD, dyslexia, or age-related decline are locked out of essential services — Medicare, hospital portals, government forms — because those sites are cluttered, jargon-heavy, and unforgiving.
        </p>

        <p className="text-base md:text-xl max-w-2xl text-moonlight animate-[fadeInUp_0.6s_ease-out_0.35s_backwards]">
          <span className="font-bold text-sunset">Outcome:</span> Users can now complete tasks they previously needed a caregiver's help for — independently, faster, without ever seeing the messy underlying site.
        </p>

        <p className="text-base md:text-xl max-w-2xl text-cloud animate-[fadeInUp_0.6s_ease-out_0.45s_backwards]">
          <span className="font-bold text-sunset">Tech Stack:</span> Python, FastAPI, Playwright, browser-use, React, WebSockets
        </p>
      </div>
    </NightSky>
  );
}