export type Category = 'GENERAL_AI' | 'TELECOM_AI';
export type TabId = 'all' | 'general' | 'telecom' | 'saved';

export interface Section {
  id: string;
  label: string;
  accentClass: string;
  articleIds: string[];
}
export type HeatSignal = 'BREAKING' | 'HOT' | 'NEW' | null;

export interface Article {
  id: string;
  title: string;
  source: string;
  articleUrl: string;
  publishedAt: string;
  summary: string;
  categories: Category[];
  isHero?: boolean;
  // v1.1 additions
  body?: string;
  author?: string;
  heatSignal?: HeatSignal;
  previewImageUrl?: string;
  partialContent?: boolean;
}
