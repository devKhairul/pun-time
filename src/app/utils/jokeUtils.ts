import { Joke, JokesResponse } from "../types/jokeTypes";

/**
 * Fetches a list of jokes from the JokeAPI.
 *
 * @returns {Promise<JokesResponse>} A promise that resolves to a JokesResponse object containing an array of jokes.
 * @throws {Error} Throws an error if the fetch operation fails.
 */
export const fetchJokes = async (): Promise<JokesResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_JOKE_API_BASE_URL}?blacklistFlags=racist,sexist&type=single&amount=8&lang=en`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch jokes");
  }
  return response.json();
};

/**
 * Translates a given text to a target language using the DeepL API.
 *
 * @param text The text to translate.
 * @param targetLang The target language to translate to.
 * @returns {Promise<string>} A promise that resolves to the translated text.
 * @throws {Error} Throws an error if the translation operation fails.
 */
export const translateText = async (text: string, targetLang: string) => {
  if (targetLang === "EN") return text;

  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        targetLang,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.translations[0].text;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // Return original text in case translation fails
  }
};

export const translateJokes = async (
  jokes: Joke[],
  targetLang: string,
  setTranslatedJokes: (jokes: Joke[]) => void,
  setTranslating: (translating: boolean) => void
) => {
  try {
    const translated = await Promise.all(
      jokes.map(async (joke) => ({
        ...joke,
        joke: await translateText(joke.joke, targetLang),
        category: await translateText(joke.category, targetLang),
      }))
    );
    setTranslatedJokes(translated);
    setTranslating(false);
  } catch (error) {
    console.error("Translation error:", error);
    setTranslatedJokes(jokes); // Fallback to original if translation fails
  }
};
