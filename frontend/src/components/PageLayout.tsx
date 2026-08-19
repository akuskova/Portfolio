import { Outlet } from "react-router-dom"

export default function PageLayout() {
  return (
    <div className="min-h-screen w-full bg-linear-to-r from-blue-900 via-cyan-700 to-teal-400 text-white">
      <main className="min-h-screen flex items-center justify-center text-center flex-col gap-10 p-52">
        <Outlet />
      </main>
    </div>
  )
}