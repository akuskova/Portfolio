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
      className="block bg-white/10 hover:bg-white/20 rounded-xl p-4 md:p-6 text-left transition md:max-w-lg md:mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm md:text-base text-white/80">{description}</p>
    </Link>
  )
}