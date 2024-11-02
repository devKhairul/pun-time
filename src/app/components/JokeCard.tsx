import { Badge } from "@/components/ui/badge";
import { JokeCardProps } from "../types/jokeTypes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const JokeCard: React.FC<JokeCardProps> = ({ jokeData, translating }) => {
  return (
    <div className="flex flex-col gap-2 min-h-[150px]">
      {translating ? (
        <div className="w-full">
          <Skeleton count={3} />
        </div>
      ) : (
        <p className="text-lg font-semibold">{jokeData.joke}</p>
      )}

      <div className="flex gap-2 items-center absolute bottom-5">
        {translating ? (
          <>
            <Skeleton width={80} height={24} />
          </>
        ) : (
          <>
            <Badge
              variant="default"
              className="text-sm bg-cyan-950 absoulte bottom-1"
            >
              {jokeData.category}
            </Badge>
          </>
        )}
      </div>
    </div>
  );
};

export default JokeCard;
