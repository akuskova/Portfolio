type LoadingProps = {
  message?: string;
  fullscreen?: boolean;
};

export default function Loading({ message = "Loading…", fullscreen = true }: LoadingProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${fullscreen ? "min-h-screen" : "py-16"}`}>
      <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
      {message && <p className="text-lg text-gray-500 mt-4">{message}</p>}
    </div>
  );
}