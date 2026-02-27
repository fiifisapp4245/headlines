import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({
  message = 'No stories match this filter right now — check back soon.',
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
      <Inbox size={32} className="text-muted-foreground/40" />
      <p className="max-w-xs text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
