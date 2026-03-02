# Sketch Reel Box Portfolio

A modern, responsive bento-box portfolio for sketches and video reels.

## How to Update Your Projects

To update the content of your portfolio, you only need to modify one file: `src/data/projects.ts`.

### 1. Upload Your Media
- **Images:** Place your image files in the `public/assets/` folder (you may need to create it).
- **Videos:** You can use YouTube/Vimeo embed links or direct video file paths.

### 2. Update the Data
Open `src/data/projects.ts` and add or edit entries in the `projects` array.

#### Example Entry:
```typescript
{
  id: 'unique-id',
  title: 'My Awesome Work',
  description: 'A brief description of what this is.',
  type: 'image', // or 'video'
  thumbnail: '/assets/my-work.jpg', // Path to your image in public/assets/
  category: 'Sketch', // Category for filtering
  size: 'large', // small, medium, large, wide, tall
}
```

#### Video Entry:
```typescript
{
  id: 'video-1',
  title: 'My Animation Reel',
  description: 'Check out my latest reel.',
  type: 'video',
  thumbnail: '/assets/reel-thumb.jpg',
  url: 'https://www.youtube.com/embed/VIDEO_ID', // Embed URL
  category: 'Reel',
  size: 'wide',
}
```

### 3. Push to GitHub
Once you save the changes and push to your GitHub repository, your site will automatically update if you have set up a deployment (like Vercel or GitHub Pages).

## Customization
- **Colors & Fonts:** Modify `src/index.css` and Tailwind classes in `src/App.tsx`.
- **Layout:** The grid automatically adjusts based on the `size` property of each project.
