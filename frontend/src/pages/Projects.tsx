import Card from "../components/Card"

const projects = [
  { title: "Browzen", description: "AI-powered Chrome extension that navigates confusing websites on behalf of users with cognitive disabilities.", to: "/projects/browzen" },
  { title: "Starvest", description: "Mobile app that turns satellite and weather data into personalized crop recommendations for farmers.", to: "/projects/starvest" },
  { title: "DHA", description: "Rebuilt the Downtown Hamilton Association's website with a searchable map-based business directory over a 16-week client engagement.", to: "/projects/dha" },
  { title: "Search Engine", description: "Disk-aware search engine over 56,000 web pages with sub-300 ms queries — no external infrastructure required.", to: "/projects/search-engine" },
]

export default function Projects() {
  return (
    <div className="min-h-screen w-full flex items-center justify-start flex-col gap-10 text-white p-20">
      <h1 className="text-5xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {projects.map((project) => (
          <Card key={project.to} {...project} />
        ))}
      </div>

    </div>
  )
}
