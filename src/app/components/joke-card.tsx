import * as React from "react";
import { JokeCardProps } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function JokeCard({ jokeData }: JokeCardProps) {
	return (
		<Card className="flex flex-col gap-4 md:min-h-[280px] lg:min-h-[250px] relative">
			<CardContent className="p-6">
				<p className="text-xl font-medium mb-2">{jokeData.joke}</p>
			</CardContent>
			<CardFooter className="p-6 md:absolute md:bottom-0">
				<Badge
					variant="default"
					className="text-sm bg-cyan-950">
					{jokeData.category}
				</Badge>
			</CardFooter>
		</Card>
	);
}
