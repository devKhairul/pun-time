Here's the README.md file for your Pun-Time app:

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

4. Run the setup script:
   ```
   pnpm setup
   ```

## Running the App

1. Start the development server:

   ```
   pnpm dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Running Tests

Run the test script:

```
pnpm test
```

Jest will run all the tests in the `tests` directory.

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
[2] https://dante.univ-tlse2.fr/access/files/original/b9c57bb0a76401d7608a0556b37d66366ad79220.pdf
[3] https://www.reddit.com/r/languagelearning/comments/rno6tr/what_examples_have_you_seen_of_things_getting/
[4] https://linguagreca.com/blog/2013/03/jokes-translators-intepreters-linguists/
[5] https://wstyler.ucsd.edu/puns/
[6] https://absolutewrite.com/forums/index.php
[7] https://www.researchgate.net/publication/261660600_Translating_Jokes_for_Dubbed_Television_Situation_Comedies
[8] https://inews.co.uk/light-relief/jokes/best-pun-based-jokes-170096
