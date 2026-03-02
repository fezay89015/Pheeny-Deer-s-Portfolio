export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video' | 'link';
  thumbnail: string;
  url?: string; // For video or external link
  category: string;
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Character Sketch',
    description: 'A detailed character design for a fantasy game.',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/sketch1/800/600',
    category: 'Sketch',
    size: 'large',
  },
  {
    id: '2',
    title: 'Animation Reel 2024',
    description: 'A collection of my best animation work from the past year.',
    type: 'video',
    thumbnail: 'https://picsum.photos/seed/reel1/800/600',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    category: 'Reel',
    size: 'wide',
  },
  {
    id: '3',
    title: 'Environment Study',
    description: 'Digital painting of a futuristic cityscape.',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/env1/400/300',
    category: 'Sketch',
    size: 'small',
  },
  {
    id: '4',
    title: 'Motion Graphics',
    description: 'Experimental motion graphics using After Effects.',
    type: 'video',
    thumbnail: 'https://picsum.photos/seed/motion1/400/600',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Reel',
    size: 'tall',
  },
  {
    id: '5',
    title: 'UI Design Concept',
    description: 'Modern dashboard interface for a creative tool.',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/ui1/800/400',
    category: 'Design',
    size: 'medium',
  },
  {
    id: '6',
    title: 'Concept Art',
    description: 'Early concept art for a sci-fi project.',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/concept1/400/300',
    category: 'Sketch',
    size: 'small',
  },
  {
    id: '7',
    title: 'Short Film',
    description: 'A 3D animated short film about a lonely robot.',
    type: 'video',
    thumbnail: 'https://picsum.photos/seed/film1/800/600',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Reel',
    size: 'large',
  },
];
