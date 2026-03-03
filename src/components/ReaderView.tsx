'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, Bookmark, BookmarkCheck, Share2, ExternalLink, Lock } from 'lucide-react';
import { Article } from '@/lib/types';
import { formatTimeAgo, cn } from '@/lib/utils';
import { ArticleImage } from './ArticleImage';

interface ReaderViewProps {
  article: Article;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onClose: () => void;
}

export function ReaderView({ article, isSaved, onToggleSave, onClose }: ReaderViewProps) {
  const [copied, setCopied] = useState(false);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Escape to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(article.articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silent fail
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      {/* ── Header ── */}
      <div className="shrink-0 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <div className="flex items-center gap-1.5">
            {article.categories.map((cat) => (
              <span
                key={cat}
                className={cn(
                  'rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider',
                  cat === 'TELECOM_AI'
                    ? 'bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400'
                    : 'bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400'
                )}
              >
                {cat === 'TELECOM_AI' ? 'Telecom & AI' : 'General AI'}
              </span>
            ))}
          </div>

          <span className="text-sm font-medium text-muted-foreground">{article.source}</span>
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 pb-32 pt-8 sm:px-6">
          {/* Title */}
          <h1 className="font-display text-2xl font-black leading-tight text-foreground sm:text-3xl lg:text-[2rem]">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span className="font-medium text-foreground/70">{article.source}</span>
            {article.author && (
              <>
                <span>·</span>
                <span>{article.author}</span>
              </>
            )}
            <span>·</span>
            <span>{formatTimeAgo(article.publishedAt)}</span>
          </div>

          {/* Hero image */}
          {article.previewImageUrl && (
            <div className="relative mt-5 w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <div className={cn(
                'absolute inset-0',
                article.categories[0] === 'TELECOM_AI' ? 'bg-blue-950' : 'bg-violet-950'
              )} />
              <ArticleImage
                article={article}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )}

          {/* AI summary pill */}
          <div className="mt-4 border border-border bg-muted/40 px-3 py-2.5">
            <p className="text-sm leading-relaxed text-foreground/80">
              <span className="mr-1.5 font-semibold text-foreground">Summary:</span>
              {article.summary}
            </p>
          </div>

          {/* Body */}
          <div className="mt-6">
            {article.partialContent ? (
              <PaywallNotice source={article.source} url={article.articleUrl} />
            ) : (
              <div className="space-y-4">
                {article.body
                  ?.split('\n')
                  .filter((p) => p.trim())
                  .map((para, i) => (
                    <p
                      key={i}
                      className="text-base leading-[1.8] text-foreground/90"
                    >
                      {para}
                    </p>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Action bar (pinned bottom) ── */}
      <div className="shrink-0 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
          <button
            onClick={() => onToggleSave(article.id)}
            className={cn(
              'flex flex-1 items-center justify-center gap-1.5 py-2.5 text-sm font-medium transition-colors',
              isSaved
                ? 'bg-foreground text-background'
                : 'border border-border hover:bg-muted'
            )}
          >
            {isSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
            {isSaved ? 'Saved' : 'Save'}
          </button>

          <button
            onClick={handleShare}
            className="flex flex-1 items-center justify-center gap-1.5 border border-border py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Share2 size={14} />
            {copied ? 'Copied!' : 'Share'}
          </button>

          <a
            href={article.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 border border-border py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <ExternalLink size={14} />
            Original
          </a>
        </div>
      </div>
    </div>
  );
}

function PaywallNotice({ source, url }: { source: string; url: string }) {
  return (
    <div className="flex flex-col items-center gap-3 border border-border bg-muted/40 px-6 py-10 text-center">
      <Lock size={20} className="text-muted-foreground" />
      <p className="text-sm text-muted-foreground">
        Full article is behind a paywall.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        <ExternalLink size={13} />
        Read on {source}
      </a>
    </div>
  );
}
