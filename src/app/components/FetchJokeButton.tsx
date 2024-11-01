import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FetchJokesButtonProps } from "../types/jokeTypes";

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
