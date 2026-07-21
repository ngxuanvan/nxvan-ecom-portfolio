# Portfolio Nguyễn Xuân Văn

Single-page personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and npm.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Edit Portfolio Content

All editable portfolio content lives in:

```text
src/data/portfolio.ts
```

Update the text, project data, skills, education, contact details, and placeholder social URLs there.

## Replace Images

Local image placeholders are stored in:

```text
public/images/
```

Current folder structure:

```text
public/images/profile/
public/images/experience/
public/images/projects/
public/images/certificates/
public/cv/
```

Each experience should have its own folder, for example:

```text
public/images/experience/duong-gia-phat/
```

Project galleries are read from slug-based folders:

```text
public/images/projects/{project-slug}/
```

For example:

```text
public/images/projects/tetratoys/
public/images/projects/resip/
public/images/projects/seo-case-study/
```

Do not hardcode image paths inside React components. Store every image path in `src/data/portfolio.ts` under each project’s `images` object:

```ts
images: {
  cover: { src: "/images/projects/example/cover.webp", alt: "..." },
  gallery: [{ src: "/images/projects/example/01-overview.webp", alt: "..." }],
  screenshots: []
}
```

The gallery automatically renders every image defined in `cover`, `gallery`, and `screenshots`. If no images are defined, the website displays a clean placeholder automatically.

Replace shared files with final optimized assets while keeping the same filenames, or update the paths in `src/data/portfolio.ts`:

```text
profile-placeholder.svg
og-image.svg
```

Recommended production formats: `.webp`, `.avif`, or optimized `.svg` where appropriate.

## Replace CV

The placeholder CV file is:

```text
public/cv/nguyen-xuan-van-cv.pdf
```

Replace it with the final PDF using the same filename so the existing “Tải CV” buttons continue to work.

## Deploy To Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Use the default build command:

```bash
npm run build
```

5. Deploy.

## Custom Domain

1. Open the Vercel project settings.
2. Go to Domains.
3. Add the custom domain.
4. Follow Vercel’s DNS instructions at the domain registrar.
5. Wait for DNS verification and SSL provisioning to complete.
