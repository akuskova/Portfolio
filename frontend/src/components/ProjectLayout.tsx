import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router";


export default function ProjectLayout() {
  return (
    <div className="flex flex-col gap-4 items-center">
        <Outlet />
            <Link to="/projects" className="inline-block mt-6">
                <FontAwesomeIcon icon={faRotateLeft} className="text-3xl text-white hover:scale-110" />
            </Link>
    </div>
  )
}
