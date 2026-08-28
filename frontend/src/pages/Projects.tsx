import Card from "../components/Card";
import NightSky from "../components/NightSky";


const projects = [
  { title: "Browzen", description: "AI-powered Chrome extension that navigates confusing websites on behalf of users with cognitive disabilities.", to: "/projects/browzen", image: "/assets/Browzen.png", tech: ["Python", "FastAPI", "Playwright", "React", "WebSockets"] },
  { title: "Starvest", description: "Mobile app that turns satellite and weather data into personalized crop recommendations for farmers.", to: "/projects/starvest", image: "/assets/StarvestIcon.png", tech: ["React Native", "Expo", "ML"]},
  { title: "DHA", description: "Rebuilt the Downtown Hamilton Association's website with a searchable map-based business directory over a 16-week client engagement.", to: "/projects/dha", image:"/assets/HDA.png", tech: ["Squarespace", "Storepoint","HTML/CSS", "JavaScript"] },
  { title: "Search Engine", description: "Disk-aware search engine over 56,000 web pages with sub-300 ms queries — no external infrastructure required.", to: "/projects/search-engine", image:"/assets/SearchEngine.png", tech: ["Python", "BeautifulSoup", "NLTK", "FastAPI"] },

  
]

export default function Projects() {
  return (
    <NightSky className="min-h-screen" aurora={false} >
      <div className="text-moonlight px-4 py-8 md:px-20 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 animate-[fadeInUp_0.6s_ease-out]">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-[fadeInUp_0.6s_ease-out_0.15s_backwards] max-w-5xl mx-auto">
          {projects.map((project) => (
            <Card key={project.to} {...project} />
          ))}
        </div>
      </div>
    </NightSky> 
  )
}


