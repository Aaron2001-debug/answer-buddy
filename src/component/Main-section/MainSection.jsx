import { useContext } from "react";
import cardData from "../../api/cards.json";
import { assets } from "../../assets/assets";
import { GeminiContext } from "../../AnswerBuddyContext";

import { Response } from "./Response";
import "./main.css";
import { Grid } from "./Grid";

export const MainSection = () => {
  const { geminiAi, setInputPrompt, inputPrompt, isData, darkMode } =
    useContext(GeminiContext);

  return (
    <div
      className="flex-1 relative"
      style={{ backgroundColor: darkMode ? "#1e1e1e" : "#ffffff" }}
    >
      <header
        className="nav flex justify-between text-[22px] p-[15px]"
        style={{ color: darkMode ? "#ffffff" : "#585858" }}
      >
        <div
          className="text-2xl font-semibold tracking-tight"
          style={{ color: darkMode ? "#ffffff" : "#4b5563" }}
        >
          ANSWER-<span className="text-blue-600">BUDDY</span>
        </div>
        <div>
          <img
            className="rounded-[50px] w-[45px]"
            src={assets.user_icon}
            alt=""
          />
        </div>
      </header>

      <section className="h-[85vh] flex flex-col max-w-[70vw] m-auto justify-between mt-2">
        {isData ? <Response /> : <Grid cardData={cardData} />}

        <div
          className="w-[70vw] flex justify-between py-[12px] px-[10px] rounded-[50px] mt-10 relative"
          style={{ backgroundColor: darkMode ? "#2A2A2A" : "#f0f4f9" }}
        >
          <input
            className={`outline-none cursor-pointer w-[85%] ${
              darkMode
                ? "text-white placeholder:text-gray-400"
                : "text-gray-600 placeholder:text-gray-500"
            }`}
            type="text"
            placeholder="Enter prompt here"
            onChange={(e) => setInputPrompt(e.target.value)}
            value={inputPrompt}
          />

          <div className="flex space-x-4">
            <img
              className="w-6 cursor-pointer"
              src={assets.gallery_icon}
              alt=""
            />
            <img className="w-6 cursor-pointer" src={assets.mic_icon} alt="" />
            <img
              className="w-6 cursor-pointer"
              src={assets.send_icon}
              alt=""
              onClick={() => geminiAi()}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
