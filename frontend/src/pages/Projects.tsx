import { Link } from "react-router-dom"

export default function Projects(){
    return(
        <div className="min-h-screen w-full relative bg-linear-to-r from-blue-900 via-cyan-700 to-teal-400 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
            <h1 className="text-6xl font-bold">Projects</h1>
            <Link to="/projects/browzen" className="block px-4 py-2 text-lg hover:underline">Browzen</Link>
            <Link to="/projects/starvest" className="block px-4 py-2 text-lg hover:underline">Starvest</Link>
            <Link to="/projects/dha" className="block px-4 py-2 text-lg hover:underline">DHA</Link>
            <Link to="/projects/search-engine" className="block px-4 py-2 text-lg hover:underline">Search Engine</Link>
        </div>
    )
}

