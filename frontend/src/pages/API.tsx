import { useEffect, useState } from "react"
import Loading from "../components/LoadingScreen";

interface Photo {
  id: number
  src: { medium: string; large: string }
  alt: string
  photographer?: string
  theme?: string;                
  exhausted?: boolean
}

export default function API() {
  const [photo, setPhoto] = useState<Photo | null>(null)
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading")
  const [caption, setCaption] = useState<string | null>(null);
  const [captionStatus, setCaptionStatus] = useState<"idle" | "loading" | "loaded" | "error">("idle");

  const fetchData = async () => {
    try {
      // 1. Grab the seen IDs from localStorage
      const seenIds: number[] = JSON.parse(localStorage.getItem("seenPhotoIds") || "[]");
      const excludeParam = seenIds.length > 0 ? `?exclude=${seenIds.join(",")}` : "";
      

      // 2. Send them to the server as a query param
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/data${excludeParam}`);
      if (!response.ok) throw new Error(`API responded with ${response.status}`)
      const data : Photo = await response.json()
      setPhoto(data)
      setStatus("loaded")

      // 3. Update the seen list. If server said "exhausted", start a fresh cycle.
      if (data.exhausted) {
        localStorage.setItem("seenPhotoIds", JSON.stringify([data.id]));
      } else {
        localStorage.setItem(
          "seenPhotoIds",
          JSON.stringify([...seenIds, data.id])
        );
      }
      fetchCaption(data.src.large, data.alt);
    } catch (error) {
      console.error('Error fetching data:', error)
      setStatus("error")
    }
  }
  const fetchCaption = async (imageUrl: string, alt: string) => {
    setCaption(null);
    setCaptionStatus("loading");
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/caption`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl, alt }),
      });
      if (!response.ok) throw new Error(`Caption failed: ${response.status}`);
      const data = await response.json() as { caption: string };
      setCaption(data.caption);
      setCaptionStatus("loaded");
    } catch (error) {
      console.error("Error fetching caption:", error);
      setCaptionStatus("error");
    }
};

    useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData()
    }, [])
  
    const handleClick = () => {
      setStatus("loading");
      fetchData();
    };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-start text-center gap-6 p-8 pt-20 md:pt-15">
      <h1 className="text-5xl font-bold">API</h1>
      {status === "loading" && <Loading fullscreen={false} />}
      {status === "loaded" && photo?.src && (
        <>
          <img
            src={photo.src.large}
            alt={photo.alt}
            className="rounded-lg max-w-xl w-full h-auto"
          />

          {/* Caption row — reserves min-height so button doesn't jump around while caption loads */}
          <div className="max-w-xl min-h-[3rem] flex items-center justify-center">
            {captionStatus === "loading" && (
              <p className="text-white/60 italic">Generating caption…</p>
            )}
            {captionStatus === "loaded" && caption && (
              <p className="text-white/90 italic text-lg">"{caption}"</p>
            )}
            {captionStatus === "error" && (
              <p className="text-red-400 text-sm">Couldn't generate caption.</p>
            )}
          </div>
        </>
      )}

      <button
        onClick={handleClick}
        disabled={status === "loading"}
        className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition disabled:opacity-50"
      >
        {status === "loading" ? "Loading..." : "New Random Image"}
      </button>
    </div>
  )
}