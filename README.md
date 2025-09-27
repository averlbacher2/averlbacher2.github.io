# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact form setup (Formspree)

This site can submit the contact form to Formspree. To enable form submissions, set an environment variable named `VITE_FORMSPREE_ENDPOINT` to your Formspree form endpoint (for example `https://formspree.io/f/your-id`).

1. Create a `.env` file in the project root (don't commit secrets):

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-id
```

2. Restart the dev server and the contact form will use that endpoint.

If the endpoint is not set, the form will remain a UI placeholder and will show a helpful error message when attempting to submit.
