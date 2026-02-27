import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RefreshConfirmationProps {
  visible: boolean;
}

export function RefreshConfirmation({ visible }: RefreshConfirmationProps) {
  return (
    <div
      className={cn(
        'fixed bottom-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-lg transition-all duration-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      )}
    >
      <CheckCircle2 size={15} className="text-green-500" />
      Refreshed
    </div>
  );
}
