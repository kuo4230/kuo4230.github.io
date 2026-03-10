# Portfolio — Portrait Split Theme

A calm, personal portfolio with a fixed sidebar and photo slot. Built with [Astro](https://astro.build), hosted on GitHub Pages.

## 🚀 Run Locally

```bash
npm install
npm run dev   # → http://localhost:4321
```

## 📸 Adding Your Photo

1. Add your photo file to the `/public/` folder — name it `photo.jpg` (or `.png`, `.webp`)
2. Open `src/pages/index.astro`
3. Find this section near the top:
   ```html
   <!-- TO ADD YOUR PHOTO -->
   🧑‍💻
   ```
4. Replace the emoji with:
   ```html
   <img src="/photo.jpg" alt="Jessica Kuo" />
   ```

**Tip:** A square photo works best (e.g. 400×400px). The sidebar will crop it into a circle automatically.

## ✏️ Personalising Your Content

All content lives in `src/pages/index.astro`. Search for these placeholders:

| Placeholder | Replace with |
|---|---|
| `Jessica Kuo` | Your real name |
| `your@email.com` | Your email address |
| `yourusername` | Your GitHub & LinkedIn handles |

### Update your projects
Find the `<!-- Projects -->` section and edit each `<article class="project-card">`:
- Change the `project-type` badge label
- Update the `<h3>` title
- Edit the `<p>` description
- Swap the `project-tags` chips

### Add more projects
Copy any `<article class="project-card">` block and paste it inside `.projects-list`.

## 🌐 Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages → Source → GitHub Actions**
3. Open `astro.config.mjs` and update:
   ```js
   base: '/your-repo-name',          // e.g. '/portfolio'
   site: 'https://yourusername.github.io',
   ```
   If your repo is named `yourusername.github.io`, remove the `base` line.
4. Push to `main` — GitHub Actions builds and deploys automatically ✓

## 📁 File Structure

```
portfolio/
├── public/
│   └── photo.jpg          ← your photo goes here
├── src/
│   ├── layouts/
│   │   └── Layout.astro   ← global styles & fonts
│   └── pages/
│       └── index.astro    ← all page content + sidebar
├── .github/workflows/
│   └── deploy.yml         ← auto GitHub Pages deploy
├── astro.config.mjs
└── package.json
```
