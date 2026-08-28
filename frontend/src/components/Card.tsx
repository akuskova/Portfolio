import { Link } from "react-router-dom"

interface ProjectCardProps {
  title: string
  description: string
  to: string
  image?: string
  tech?: string[]
}

export default function Card({ title, description, to, image, tech }: ProjectCardProps) {
  return (
    <Link to={to} className="block bg-stormy hover:bg-storm-light border border-stormy hover:border-sunset rounded-xl overflow-hidden text-left transition">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-moonlight mb-2">{title}</h2>
        <p className="text-sm md:text-base text-moonlight/80">{description}</p>
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono bg-evening text-moonlight px-2 py-1 rounded-md border border-storm-light">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}



                 