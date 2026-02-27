import { Zap } from 'lucide-react';

interface DailyBriefingProps {
  text: string;
}

export function DailyBriefing({ text }: DailyBriefingProps) {
  return (
    <div className="border-b border-border bg-muted/40 px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-start gap-2.5 lg:items-center">
        <span className="mt-0.5 flex shrink-0 items-center gap-1 rounded bg-foreground px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-background lg:mt-0">
          <Zap size={9} />
          Today
        </span>
        <p className="text-sm leading-snug text-foreground/80">{text}</p>
      </div>
    </div>
  );
}
