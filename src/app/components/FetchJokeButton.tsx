import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FetchJokesButtonProps } from "../types/jokeTypes";

/**
 * FetchJokesButton component renders a button for fetching jokes.
 *
 * Props:
 * - onClick: A function that triggers fetching more jokes.
 * - isLoading: A boolean indicating whether jokes are currently being fetched.
 *
 * The button displays a loading spinner when `isLoading` is true,
 * otherwise it displays the text "Fetch More".
 */
const FetchJokesButton: React.FC<FetchJokesButtonProps> = ({
  onClick,
  isLoading,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <Button onClick={onClick} disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Fetching...
          </>
        ) : (
          "Fetch More"
        )}
      </Button>
    </div>
  );
};

export default FetchJokesButton;
