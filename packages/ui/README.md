## Shadcn/ui

Add components to the project:

```bash
npx shadcn@latest add <component>
```

## MediaText Component

The MediaText component provides a responsive layout for displaying media (images/videos) alongside text content. It supports different aspect ratios for mobile and desktop devices.

### Basic Usage

```tsx
import { MediaText, MediaTextImage, MediaTextContent, MediaTextTitle, MediaTextDescription } from '@boilerplate/ui/media-text'

<MediaText>
  <MediaTextImage>
    <img src="/image.jpg" alt="Description" />
  </MediaTextImage>
  <MediaTextContent>
    <MediaTextTitle>Title</MediaTextTitle>
    <MediaTextDescription>Description</MediaTextDescription>
  </MediaTextContent>
</MediaText>
```

### Responsive Aspect Ratios

You can specify different aspect ratios for mobile and desktop:

```tsx
// Mobile: 1:1 (square), Desktop: 16:9 (widescreen)
<MediaTextImage ratioMobile={1} ratioDesktop={16 / 9}>
  <img src="/image.jpg" alt="Description" />
</MediaTextImage>

// Mobile: 4:3, Desktop: 21:9 (ultrawide)
<MediaTextImage ratioMobile={4 / 3} ratioDesktop={21 / 9}>
  <img src="/image.jpg" alt="Description" />
</MediaTextImage>
```

### Available Props

- `ratio` - Default aspect ratio (used when ratioMobile/ratioDesktop are not provided)
- `ratioMobile` - Aspect ratio for mobile devices (defaults to ratio if not provided)
- `ratioDesktop` - Aspect ratio for desktop devices (defaults to ratio if not provided)
- `reversed` - Reverses the order of media and content on desktop

### Common Aspect Ratios

- `1` - Square (1:1)
- `4/3` - Standard (4:3)
- `3/2` - Classic (3:2)
- `16/9` - Widescreen (16:9)
- `21/9` - Ultrawide (21:9)