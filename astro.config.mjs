import { defineConfig } from 'astro/config';

export default defineConfig({
  // 👇 Set this to your GitHub repo name
  // e.g. if repo is github.com/johndoe/portfolio → base: '/portfolio'
  // If repo is yourusername.github.io → remove the base line entirely
  base: '/your-repo-name',
  site: 'https://yourusername.github.io',
});
