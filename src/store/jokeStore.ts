// jokeStore.ts
import { create } from "zustand";
import { fetchJokes, translateJokes } from "@/app/utils/jokeUtils";
import { Joke, JokesResponse } from "@/app/types/jokeTypes";

interface JokeState {
  selectedLanguage: string;
  isFetching: boolean;
  translatedJokes: Joke[];
  translating: boolean;
  jokeData: JokesResponse | null;
  isLoading: boolean;
  error: Error | null;
  setSelectedLanguage: (language: string) => void;
  setIsFetching: (isFetching: boolean) => void;
  setTranslatedJokes: (jokes: Joke[]) => void;
  setTranslating: (translating: boolean) => void;
  setJokeData: (data: JokesResponse | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: Error | null) => void;
  fetchJokes: () => Promise<void>;
  translateJokes: () => void;
  initializeJokes: () => Promise<void>;
}

export const useJokeStore = create<JokeState>((set, get) => ({
  selectedLanguage: "EN",
  isFetching: false,
  translatedJokes: [],
  translating: false,
  jokeData: null,
  isLoading: false,
  error: null,
  setSelectedLanguage: (language) => set({ selectedLanguage: language }),
  setIsFetching: (isFetching) => set({ isFetching }),
  setTranslatedJokes: (jokes) => set({ translatedJokes: jokes }),
  setTranslating: (translating) => set({ translating }),
  setJokeData: (data) => set({ jokeData: data }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  fetchJokes: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await fetchJokes();
      set({ jokeData: data, isLoading: false });
    } catch (error) {
      set({ error: error as Error, isLoading: false });
    }
  },

  initializeJokes: async () => {
    const { jokeData, fetchJokes, translateJokes } = get();
    if (!jokeData) {
      await fetchJokes();
    }
    translateJokes();
  },
  translateJokes: () => {
    const { jokeData, selectedLanguage, setTranslatedJokes, setTranslating } =
      get();
    if (jokeData && jokeData.jokes) {
      if (selectedLanguage === "EN") {
        setTranslatedJokes(jokeData.jokes);
      } else {
        setTranslating(true);
        translateJokes(
          jokeData.jokes,
          selectedLanguage,
          setTranslatedJokes,
          setTranslating
        );
      }
    }
  },
}));
