import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // When deploying to GitHub Pages under a repo (https://<user>.github.io/personal-portfolio/)
  // set base to the repo name so asset URLs are correct.
  base: './',
});
