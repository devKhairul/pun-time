"use client";
import { useState, useEffect } from "react";
import { JokeData } from "@/types/index";
import { JokeFetcherProps } from "@/types/index";

export default function JokeFetcher({ onJokesFetched }: JokeFetcherProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchJoke() {
			try {
				setIsLoading(true);
				setError(null);

				const response = await fetch(
					`${process.env.NEXT_PUBLIC_JOKE_API_BASE_URL}?blacklistFlags=racist,sexist&type=single&amount=6`
				);

				if (!response.ok) {
					throw new Error("Failed to fetch joke");
				}

				const jokeData: JokeData = await response.json();
				onJokesFetched(jokeData);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
			} finally {
				setIsLoading(false);
			}
		}

		fetchJoke();
	}, [onJokesFetched]);

	// if (isLoading) {
	// 	return <div>Loading jokes...</div>;
	// }

	// if (error) {
	// 	return <div>Error: {error}</div>;
	// }

	return null;
}
