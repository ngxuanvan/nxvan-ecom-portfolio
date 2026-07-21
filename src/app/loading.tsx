export default function Loading() {
  return (
    <main className="min-h-[100dvh] bg-[#f7f5f0] px-4 py-10 text-stone-950 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 pt-20">
          <div className="h-6 w-52 overflow-hidden rounded-md bg-stone-200">
            <div className="h-full w-1/2 animate-shimmer bg-white/70" />
          </div>
          <div className="h-16 max-w-2xl overflow-hidden rounded-md bg-stone-200">
            <div className="h-full w-1/2 animate-shimmer bg-white/70" />
          </div>
          <div className="h-24 max-w-xl overflow-hidden rounded-md bg-stone-200">
            <div className="h-full w-1/2 animate-shimmer bg-white/70" />
          </div>
        </div>
        <div className="min-h-[520px] overflow-hidden rounded-md bg-stone-200">
          <div className="h-full w-1/2 animate-shimmer bg-white/70" />
        </div>
      </div>
    </main>
  );
}
