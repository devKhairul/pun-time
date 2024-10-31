"use client";
import { useState } from "react";
import { JokeData, Joke } from "@/types/index";
import JokeCard from "@/app/components/joke-card";
import JokeFetcher from "@/lib/api/jokes";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function HomePage() {
	const [selectedLanguage, setSelectedLanguage] = useState("EN");
	const [jokeData, setJokeData] = useState<JokeData | null>(null);

	console.log(jokeData);

	const handleLanguageChange = (value: string) => {
		setSelectedLanguage(value);
	};

	const handleJokesFetched = (fetchedJokes: JokeData) => {
		setJokeData(fetchedJokes);
	};

	return (
		<div className="grid min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-4xl font-bold">Let's have some pun</h1>

			<Select
				onValueChange={handleLanguageChange}
				defaultValue={selectedLanguage}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select language" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="EN">English</SelectItem>
					<SelectItem value="DE">German</SelectItem>
					<SelectItem value="FR">French</SelectItem>
					<SelectItem value="ES">Spanish</SelectItem>
				</SelectContent>
			</Select>

			<JokeFetcher onJokesFetched={handleJokesFetched} />

			<main className="grid md:grid-cols-2 gap-8 items-center sm:items-start">
				{jokeData && jokeData.jokes && jokeData.jokes.length > 0 ? (
					jokeData.jokes.map((joke: Joke) => (
						<JokeCard
							key={joke.id}
							jokeData={joke}
							selectedLanguage={selectedLanguage}
						/>
					))
				) : (
					<p>No jokes available</p>
				)}
			</main>
		</div>
	);
}
