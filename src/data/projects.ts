export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video' | 'link';
  thumbnail: string;
  url?: string; // For video or external link
  aspectRatio?: '16/9' | '9/16';
  category: string;
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  content?: {
    type: 'image' | 'video' | 'text';
    value: string;
  }[];
}
