export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-top text-center gap-6 p-8 pt-20 md:pt-60">
      {children}
    </div>
  );
}