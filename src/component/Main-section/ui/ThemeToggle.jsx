import { Moon, Sun } from "lucide-react";
import { GeminiContext } from "../../../AnswerBuddyContext";
import { useContext } from "react";

export const ThemeToggle = () => {
  const { setDarkMode, darkMode } = useContext(GeminiContext);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 cursor-pointer rounded-full transition ${
        darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
      }`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
};
