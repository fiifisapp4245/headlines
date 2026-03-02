import { Article } from '@/lib/types';
import { formatTimeAgo } from '@/lib/utils';
import { Radio } from 'lucide-react';

interface SidebarProps {
  telecomArticles: Article[];
  lastUpdated: string;
  onOpen: (article: Article) => void;
}

export function Sidebar({ telecomArticles, lastUpdated, onOpen }: SidebarProps) {
  const spotlight = telecomArticles.slice(0, 4);

  return (
    <aside className="hidden lg:block w-full">
      {/* Telecom spotlight */}
      <div className=" border border-border bg-card p-4">
        <div className="mb-3 flex items-center gap-2">
          <Radio size={13} className="text-blue-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
            Telecom & AI Spotlight
          </span>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {spotlight.map((article) => (
            <div key={article.id} className="py-3 first:pt-0 last:pb-0">
              <button
                onClick={() => onOpen(article)}
                className="group block w-full text-left"
              >
                <p className="text-[13px] font-semibold leading-snug text-foreground transition-colors group-hover:text-foreground/70">
                  {article.title}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {article.source} · {formatTimeAgo(article.publishedAt)}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Latest update info */}
      <div className="mt-3  border border-border bg-card p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Feed Status
        </p>
        <p className="mt-1.5 text-xs text-foreground/70">
          Last refreshed at{' '}
          <span className="font-medium text-foreground" suppressHydrationWarning>
            {new Date(lastUpdated).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Auto-refresh every 2 hours
        </p>
      </div>
    </aside>
  );
}
