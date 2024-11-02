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

const languages = {
  EN: "English",
  ES: "Spanish",
  FR: "French",
  DE: "German",
};

/**
 * LanguageSelector component provides a dropdown menu for selecting a language.
 * It displays the current selected language and allows users to change the language
 * through the dropdown options.
 *
 * Props:
 * - selectedLanguage: A string representing the current selected language.
 * - onLanguageChange: A function to call when the selected language changes.
 */
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
          {Object.entries(languages).map(([value, label]) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
