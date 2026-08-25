import NightSky from "../components/NightSky"

export default function Starvest() {
  return (
    <NightSky stars={false}>
        <div className="items-center justify-start text-center gap-6 p-8 pt-10 md:pt-60 flex flex-col max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-moonlight">Starvest</h1>

          <p className="text-base md:text-xl max-w-2xl text-moonlight animate-[fadeInUp_0.6s_ease-out]">
            <span className="font-bold text-sunset">Scope:</span> 36-hour hackathon project focused on space (DAHacks 3.0), team of 4, owned satellite data integration and frontend development.
          </p>

          <p className="text-base md:text-xl max-w-2xl text-moonlight animate-[fadeInUp_0.6s_ease-out_0.15s_backwards]">
            <span className="font-bold text-sunset">Project Description:</span> StarVest is a mobile application that uses satellite data, soil moisture, and weather conditions to recommend crops suited to specific growing environments.
          </p>

          <p className="text-base md:text-xl max-w-2xl text-moonlight animate-[fadeInUp_0.6s_ease-out_0.25s_backwards]">
            <span className="font-bold text-sunset">Problem Solved:</span> Farmers and agricultural users often lack an easy way to combine satellite and environmental data when planning crops. StarVest translates space-based data into practical recommendations for agricultural planning.
          </p>

          <p className="text-base md:text-xl max-w-2xl text-moonlight animate-[fadeInUp_0.6s_ease-out_0.35s_backwards]">
            <span className="font-bold text-sunset">Outcome:</span> Users gain accessible, data-driven insights that help them make more informed crop-selection decisions using information collected from space.
          </p>

          <p className="text-base md:text-xl max-w-2xl text-cloud animate-[fadeInUp_0.6s_ease-out_0.45s_backwards]">
            <span className="font-bold text-sunset">Tech Stack:</span> React Native, Expo, satellite data, weather APIs, AI/ML
          </p>
      </div>
    </NightSky>
  );
}