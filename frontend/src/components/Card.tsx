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
      className="block bg-white/10 hover:bg-white/20 rounded-xl p-6 text-left transition">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-white/80">{description}</p>
    </Link>
  )
}