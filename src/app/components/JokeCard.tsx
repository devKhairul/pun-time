import { Badge } from "@/components/ui/badge";
import { JokeCardProps } from "../types/jokeTypes";

const JokeCard: React.FC<JokeCardProps> = ({ jokeData, selectedLanguage }) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-between">
      <p className="text-lg font-semibold joke-text">{jokeData.joke}</p>
      <div className="flex gap-2 items-center absolute bottom-6">
        <Badge variant="default" className="text-sm bg-cyan-950">
          {jokeData.category}
        </Badge>

        <Badge variant={"destructive"} className="text-sm text-white">
          {selectedLanguage}
        </Badge>
      </div>
    </div>
  );
};

export default JokeCard;
