import { Joke, JokesResponse } from "../types/jokeTypes";

export const fetchJokes = async (): Promise<JokesResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_JOKE_API_BASE_URL}?blacklistFlags=racist,sexist&type=single&amount=2&lang=en`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch jokes");
  }
  return response.json();
};

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
    return text; // Return original text if translation fails
  }
};

export const translateJokes = async (
  jokes: Joke[],
  targetLang: string,
  setTranslatedJokes: (jokes: Joke[]) => void
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
  } catch (error) {
    console.error("Translation error:", error);
    setTranslatedJokes(jokes); // Fallback to original jokes if translation fails
  }
};
