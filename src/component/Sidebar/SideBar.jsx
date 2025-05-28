import { useContext } from "react";
import { GeminiContext } from "../../AnswerBuddyContext";
import { ThemeToggle } from "../Main-section/ui/ThemeToggle";
import {
  HelpCircle,
  History,
  Settings,
  Menu,
  Plus,
  MessageCircle,
} from "lucide-react";
import "./sidebar.css";

export const SideBar = () => {
  const {
    expandMenu,
    setExpandMenu,
    newChat,
    darkMode,
    staticPrompt,
    geminiAi,
    setInputPrompt,
  } = useContext(GeminiContext);

  const handleExpandMenu = () => {
    setExpandMenu(!expandMenu);
  };

  // Helper class strings based on darkMode
  const textColor = darkMode ? "text-gray-200" : "text-gray-700";
  const textColorMedium = darkMode ? "text-gray-300" : "text-gray-500";
  const bgColor = darkMode ? "#2A2A2A" : "#f0f4f9";
  const hoverBgLight = "#e2e8f0";
  const hoverBgDark = "#3A3F44";
  const newChatBg = darkMode ? "#333A41" : "#e6eaf1";
  const newChatTextColor = darkMode ? "#e5e7eb" : "#4b5563";

  return (
    <div
      className="min-h-screen flex flex-col justify-between p-2.5 transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col gap-y-9">
        <div className="cursor-pointer flex justify-between items-center">
          <Menu
            onClick={handleExpandMenu}
            className={`w-8 h-8 cursor-pointer`}
            style={{ color: darkMode ? "#e5e7eb" : "#374151" }}
          />
          {expandMenu && <ThemeToggle />}
        </div>

        <div
          onClick={newChat}
          className="cursor-pointer px-4 py-2 rounded-full flex items-center gap-x-2 hover:opacity-90"
          style={{ backgroundColor: newChatBg }}
        >
          <Plus className="w-5 h-5" style={{ color: newChatTextColor }} />
          {expandMenu && (
            <p className="text-sm" style={{ color: newChatTextColor }}>
              New chat
            </p>
          )}
        </div>

        {expandMenu && (
          <div className="cursor-pointer">
            <p className={`${textColorMedium} text-sm`}>Recent</p>
            <div
              className="mt-3 ml-1 flex items-center gap-2 p-2 rounded cursor-pointer"
              style={{
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = darkMode
                  ? hoverBgDark
                  : hoverBgLight)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <MessageCircle className={`w-6 h-6 ${textColor}`} />
              <p
                onClick={(e) => {
                  setInputPrompt(e.target.textContent);
                  geminiAi();
                }}
                className={`text-sm truncate max-w-[150px] ${textColor}`}
              >
                hkjhjkhkjh....
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-5">
        {[
          { Icon: HelpCircle, label: "Help" },
          { Icon: History, label: "History" },
          { Icon: Settings, label: "Settings" },
        ].map(({ Icon, label }) => (
          <div
            key={label}
            className="cursor-pointer flex items-center gap-2 hover:opacity-80"
          >
            <Icon className={`w-6 h-6 ${textColor}`} />
            {expandMenu && (
              <p className={`text-[15px] font-medium ${textColor}`}>{label}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
