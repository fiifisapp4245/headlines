'use client';

import { Article } from '@/lib/types';

interface ArticleImageProps {
  article: Article;
  className?: string;
}

/**
 * Renders an article's preview image with a two-stage fallback:
 * 1. Try previewImageUrl (real source image)
 * 2. On failure, try fallbackImageUrl (placehold.co)
 * 3. On second failure, hide the img so the parent's fallback div shows through
 *
 * Uses direct DOM mutation instead of React state to avoid closure/batching
 * issues with rapid onError cycles. referrerPolicy="no-referrer" suppresses
 * the Referer header so most hotlink-protection checks are bypassed.
 */
export function ArticleImage({ article, className }: ArticleImageProps) {
  if (!article.previewImageUrl) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={article.previewImageUrl}
      alt=""
      className={className}
      referrerPolicy="no-referrer"
      onError={(e) => {
        const img = e.currentTarget;
        if (article.fallbackImageUrl && img.src !== article.fallbackImageUrl) {
          // First failure: try the placehold.co fallback
          img.src = article.fallbackImageUrl;
        } else {
          // Second failure: hide the img so the parent fallback div shows
          img.style.display = 'none';
        }
      }}
    />
  );
}
