import { useEffect, useState } from "react"
import Loading from "../components/LoadingScreen";

interface Photo {
  id: number
  src: { medium: string; large: string }
  alt: string
  photographer: string
}

export default function API() {
  const [photo, setPhoto] = useState<Photo | null>(null)
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading")

  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/data`)
      if (!response.ok) throw new Error(`API responded with ${response.status}`)
      const data = await response.json()
      setPhoto(data)
      setStatus("loaded")
    } catch (error) {
      console.error('Error fetching data:', error)
      setStatus("error")
    }
  }

    useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData()
    }, [])

  const handleClick = () => {
    setStatus("loading")
    fetchData()
  }

  return (
    <>
      <h1 className="text-5xl font-bold">API</h1>
      <p className="text-xl max-w-2xl">Generate Random Image :3</p>

      {status === "loading" && <p>Loading photo...</p>}
      {status === "loading" && <Loading fullscreen={false} message="Loading photo…" />}
      {status === "loaded" && photo?.src && (
        <img src={photo.src.large} alt={photo.alt} className="rounded-lg max-w-xl w-full h-auto" />
      )}

      <button
        onClick={handleClick}
        disabled={status === "loading"}
        className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition disabled:opacity-50"
      >
        {status === "loading" ? "Loading..." : "New Random Image"}
      </button>
    </>
  )
}