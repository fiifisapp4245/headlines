export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-2 border-b border-border bg-card px-4 py-4 animate-pulse">
      <div className="flex gap-2">
        <div className="h-4 w-12 rounded bg-muted" />
        <div className="h-4 w-24 rounded bg-muted" />
      </div>
      <div className="h-4 w-full rounded bg-muted" />
      <div className="h-4 w-4/5 rounded bg-muted" />
      <div className="h-3 w-3/5 rounded bg-muted" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="border-b border-border px-4 py-6 sm:px-6 sm:py-8 animate-pulse">
      <div className="mx-auto max-w-7xl flex flex-col gap-3">
        <div className="flex gap-2">
          <div className="h-5 w-16 rounded bg-muted" />
          <div className="h-5 w-20 rounded bg-muted" />
        </div>
        <div className="h-8 w-full rounded bg-muted" />
        <div className="h-8 w-3/4 rounded bg-muted" />
        <div className="h-5 w-full rounded bg-muted" />
        <div className="h-5 w-2/3 rounded bg-muted" />
      </div>
    </div>
  );
}
