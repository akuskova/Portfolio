import { Link } from "react-router-dom"

interface ProjectCardProps {
  title: string
  description: string
  to: string
}

export default function Card({ title, description, to }: ProjectCardProps) {
  return (
    <Link
      to={to}
      className="block bg-stormy border border-stormy hover:border-sunset rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sunset/20">
      <h2 className="text-xl md:text-2xl font-bold text-moonlight mb-2">{title}</h2>
      <p className="text-sm md:text-base text-moonlight/80">{description}</p>
    </Link>
  )
}



                 