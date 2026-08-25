import { Outlet } from "react-router-dom"

export default function PageLayout() {
  return (
    <div className="w-full bg-evening text-moonlight">
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
    </div>
  )
}