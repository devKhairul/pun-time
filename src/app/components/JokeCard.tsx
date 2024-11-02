import { Badge } from "@/components/ui/badge";
import { JokeCardProps } from "../types/jokeTypes";
import { Loader } from "lucide-react";

const JokeCard: React.FC<JokeCardProps> = ({
  jokeData,
  selectedLanguage,
  translating,
}) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-between">
      {translating ? (
        <p className="text-lg font-semibold">
          <Loader className="animate-spin" />
        </p>
      ) : (
        <p className="text-lg font-semibold">{jokeData.joke}</p>
      )}

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
