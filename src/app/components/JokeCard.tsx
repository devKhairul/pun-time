import { Badge } from "@/components/ui/badge";
import { JokeCardProps } from "../types/jokeTypes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**
 * A single joke card component.
 * @param jokeData the joke data to render
 * @param translating whether the joke is currently being translated
 * @returns a JSX element with the joke content and category
 */
const JokeCard: React.FC<JokeCardProps> = ({ jokeData, translating }) => {
  return (
    <div className="flex flex-col gap-2">
      {translating ? (
        <div className="w-full">
          <Skeleton count={3} />
        </div>
      ) : (
        <p className="text-lg font-semibold joke-text">{jokeData.joke}</p>
      )}

      <div className="flex gap-2 lg:absolute lg:bottom-5">
        {translating ? (
          <>
            <Skeleton width={80} height={24} />
          </>
        ) : (
          <>
            <Badge
              variant="default"
              className="text-sm bg-cyan-950 justify-end"
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
