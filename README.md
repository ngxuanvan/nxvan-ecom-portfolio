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

Replace these files with final optimized assets while keeping the same filenames, or update the paths in `src/data/portfolio.ts`:

```text
profile-placeholder.svg
project-tetra-toys.svg
project-resip.svg
project-seo-case-study.svg
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
