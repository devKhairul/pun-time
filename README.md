Sure! Here’s the updated README.md file for your Pun-Time app, with the `pnpm setup` section removed and the CLI command for running tests updated to use Cypress.

```markdown
# Pun-Time

A joke fetching and translation app built with Next.js and TypeScript.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the App](#running-the-app)
- [Running Tests](#running-tests)
- [Building and Deploying](#building-and-deploying)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Welcome to Pun-Time! This app fetches jokes from an API and translates them into different languages.

## Prerequisites

- Node.js (version 14 or higher)
- pnpm (version 6 or higher)
- TypeScript (version 4 or higher)

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
- `NEXT_PUBLIC_TRANSLATION_API_KEY`: the API key for the translation API

## Running the App

1. Start the development server:
```

pnpm dev

```

2. Open your browser and navigate to `http://localhost:3000`

## Running Tests

Run the test script using Cypress:
```

pnpm cypress open

```
or to run tests in headless mode:
```

pnpm cypress run

```

Cypress will execute all tests defined in the test directory.

## Building and Deploying

1. Build the app:
```

pnpm build

```

2. Deploy the app to your preferred platform (e.g., Vercel, Netlify, etc.)

## License

This project is licensed under the MIT License.
```

Feel free to adjust any other sections as needed!
