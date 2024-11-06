"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import JokeCard from "@/app/components/JokeCard";
import LanguageSelector from "@/app/components/LanguageSelector";
import FetchJokesButton from "@/app/components/FetchJokeButton";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { fetchJokes, translateJokes } from "@/app/utils/jokeUtils";
import { Joke, JokesResponse } from "@/app/types/jokeTypes";

/**
 * The homepage of the PunTime application.
 *
 * Fetches jokes from the JokeAPI and displays them in a card layout.
 * Allows the user to select a language and translate the jokes.
 *
 * @returns A React component that renders a joke layout.
 */
export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isFetching, setIsFetching] = useState(false);
  const [translatedJokes, setTranslatedJokes] = useState<Joke[]>([]);
  const [translating, setTranslating] = useState(false);

  const {
    data: jokeData,
    isLoading,
    error,
    refetch,
  } = useQuery<JokesResponse, Error>({
    queryKey: ["jokes"],
    queryFn: fetchJokes,
    enabled: true,
  });

  useEffect(() => {
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
  }, [jokeData, selectedLanguage]);

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
  };

  const handleFetchJokes = () => {
    setIsFetching(true);
    refetch().finally(() => {
      setIsFetching(false);
    });
  };

  return (
    <div className="container p-6 mx-auto">
      <div className="grid items-start pb-20 gap-8 font-[family-name:var(--font-geist-sans)]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">
              <span className="underline text-slate-500">P</span>unTime
            </h1>
            <p>A simple application that fetches random jokes. Laugh away!</p>
          </div>

          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        <FetchJokesButton
          onClick={handleFetchJokes}
          isLoading={isLoading || isFetching}
        />

        {error && (
          <p className="text-red-500">Error fetching jokes: {error.message}</p>
        )}

        <main className="grid lg:grid-cols-2 gap-8 items-start">
          {isLoading || isFetching ? (
            <div className="col-span-2 flex justify-center items-center">
              <Loader2 className="h-10 w-10 animate-spin" />
            </div>
          ) : translatedJokes.length > 0 ? (
            translatedJokes.map((joke: Joke) => (
              <Card key={joke.id} className="lg:min-h-[260px] relative">
                <CardContent className="px-6 py-4">
                  <JokeCard
                    jokeData={joke}
                    translating={translating}
                    selectedLanguage={selectedLanguage}
                  />
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-2 flex justify-center items-center">
              No jokes available
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
