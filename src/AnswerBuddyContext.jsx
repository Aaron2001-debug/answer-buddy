import { createContext, useState, useEffect, useRef } from "react";
import { main } from "./config/gemini";
export const GeminiContext = createContext();
export const GeminiProvider = ({ children }) => {
  const [expandMenu, setExpandMenu] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const [responseHistory, setResponseHistory] = useState([]);
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [resultData, setResultData] = useState("");
  const [isData, setIsData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const staticPrompt = useRef(null);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true" ? true : false;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  const geminiAi = async () => {
    setResultData("");
    setIsLoading(true);

    // Step 1: Save the question with empty response first
    setResponseHistory((prev) => [
      ...prev,
      { question: inputPrompt, response: "" },
    ]);

    const res = await main(inputPrompt);

    // Step 2: Update the latest item (the one we just added)
    setResponseHistory((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        question: inputPrompt,
        response: res,
      };
      return updated;
    });

    setResultData(res);
    setIsLoading(false);
    setPrevPrompts((prev) => [...prev, res]);
    setIsData(true);
    setInputPrompt("");
  };

  const newChat = () => {
    setIsData(false);
    setResponseHistory([]);
  };
  return (
    <GeminiContext.Provider
      value={{
        expandMenu,
        setExpandMenu,
        geminiAi,
        inputPrompt,
        setInputPrompt,
        isLoading,
        setIsLoading,
        isData,
        responseHistory,
        setIsData,
        resultData,
        setResultData,
        newChat,
        setDarkMode,
        darkMode,
        staticPrompt,
      }}
    >
      {children}
    </GeminiContext.Provider>
  );
};
