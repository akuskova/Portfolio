import Hero from "../components/Hero";

export default function Starvest() {
  return (
    <Hero>
      <h1 className="text-5xl font-bold">Starvest</h1>
      <p className="text-xl max-w-2xl">Scope: 36-hour hackathon project focused on space (DAHacks 3.0), team of 4 people, owned satellite data integration and frontend development</p>
      <p className="text-xl max-w-2xl">Project Description: StarVest is a mobile application that uses satellite data, soil moisture, and weather conditions to recommend crops suited to specific growing environments.</p>
      <p className="text-xl max-w-2xl">Problem Solved: Farmers and agricultural users often lack an easy way to combine satellite and environmental data when planning crops. StarVest translates space-based data into practical recommendations for agricultural planning.</p>
      <p className="text-xl max-w-2xl">Outcome: Users gain accessible, data-driven insights that help them make more informed crop-selection decisions using information collected from space.</p>
      <p className="text-xl max-w-2xl">Tech Stack: React Native, Expo, satellite data, weather APIs, AI/ML</p>
    </Hero>
  )
}