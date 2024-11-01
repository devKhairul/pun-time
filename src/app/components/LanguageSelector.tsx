import React from "react";
import { Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LanguageSelectorProps } from "../types/jokeTypes";

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center gap-4">
      <Languages />
      <Select onValueChange={onLanguageChange} defaultValue={selectedLanguage}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="EN">English</SelectItem>
          <SelectItem value="DE">German</SelectItem>
          <SelectItem value="FR">French</SelectItem>
          <SelectItem value="ES">Spanish</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
