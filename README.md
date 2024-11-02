# Pun-Time

A joke fetching and translation app built with Next.js and TypeScript.

## Table of Contents

- [Getting Started](#getting-started)
- [Setup](#setup)
- [Running the App](#running-the-app)
- [Running Tests](#running-tests)
- [Building and Deploying](#building-and-deploying)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Welcome to Pun-Time! This app fetches jokes from an API and translates them into different languages.

Built from the ground up using a robust CI/CD pipeline, this application exemplifies best practices in software development. At its core, it harnesses the power of React's latest features, including React Server Components, in addition to the newest Turbopack compiler to optimize performance and enhance user interactivity. The application's data management is handled by TanStack Query, ensuring efficient, seamless data synchronization and caching. This powerful library simplifies complex data fetching scenarios, reducing server load and improving overall application responsiveness.

On the UI front, the project showcases a sleek, modern interface built with Tailwind CSS, providing a highly customizable and responsive design system. The UI is further enhanced by Lucide's crisp, scalable icons and the elegant, accessible components from shadcn/ui. To ensure a smooth user experience during data loading, the application employs React Skeleton, creating seamless loading states that maintain the app's visual structure and reduce perceived wait times. By strategically implementing React Server Components where appropriate, the application achieves an optimal balance between server-side rendering and client-side interactivity. This approach significantly improves initial page load times, enhances SEO, and provides a more responsive user interface.

End-to-End (E2E) testing is rigorously implemented using Cypress, guaranteeing the application's reliability and functionality across various user scenarios. This comprehensive testing approach ensures a robust, bug-free experience for all users.

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/your-username/pun-time.git
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Create a new file named `.env` in the root directory and add the following variables:

   - `NEXT_PUBLIC_JOKE_API_BASE_URL`: the base URL of the joke API
   - `DEEPL_API_KEY`: the API key for the translation API

## Running the App

1. Start the development server:

   ```
   pnpm dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Running Tests

This app integrates Cypress for E2E Testing.

Run the test script:

```
    pnpm cypress run
```

Cypress will run all the tests in the `cypress/e2e` directory.

## Building and Deploying

1. Build the app:

   ```
   pnpm build
   ```

2. Deploy the app to your preferred platform (e.g. Vercel, Netlify, etc.)

## Contributing

Contributions are welcome! Please submit a pull request with your changes and a brief description of what you've changed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Citations:
[1] https://sv443.net/jokeapi/v2/
[2] https://www.deepl.com/en/pro-api
