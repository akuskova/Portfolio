import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router";


export default function ProjectLayout() {
  return (
    <div className="flex flex-col gap-4 items-center">
        <Outlet />
        <Link
        to="/projects"
        className="relative z-10 inline-block mt-2 mb-13"
      >
            <FontAwesomeIcon icon={faRotateLeft} className="text-3xl text-white" />
        </Link>
    </div>
  )
}
