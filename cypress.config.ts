import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000", // Adjust this to match your development server URL
  },
  env: {
    NEXT_PUBLIC_JOKE_API_BASE_URL: "https://v2.jokeapi.dev/joke",
  },
});
