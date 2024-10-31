// @/types/index.ts

export interface Joke {
	id: string;
	joke: string;
	category: string;
}

export interface JokeData {
	jokes: Joke[];
	error: boolean;
}

export interface JokeCardProps {
	jokeData: Joke;
	selectedLanguage: string;
}

export interface JokeFetcherProps {
	onJokesFetched: (jokes: JokeData) => void;
}
