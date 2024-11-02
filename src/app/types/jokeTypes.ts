export interface Joke {
  id: number;
  joke: string;
  category: string;
}

export interface JokesResponse {
  jokes: Joke[];
}

export interface JokeCardProps {
  jokeData: Joke;
  selectedLanguage: string;
  translating: boolean;
}

export interface FetchJokesButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (value: string) => void;
}
