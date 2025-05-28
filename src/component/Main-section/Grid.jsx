import { useContext } from "react";
import { assets } from "../../assets/assets";
import { GeminiContext } from "../../AnswerBuddyContext";
import "./response.css";
export const Grid = ({ cardData }) => {
  const { staticPrompt, setInputPrompt, geminiAi } = useContext(GeminiContext);
  return (
    <>
      <div>
        <div className="text-[#c4c7c5] text-[45px]">
          <h1 className="greet">Hello,Uday.</h1>
          <p>How can I help you today?</p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(4,180px)] gap-x-5  justify-center">
        {cardData.map((currCard, index) => {
          const { text, icon } = currCard;

          return (
            <div
              onClick={(e) => {
                const ele = e.target.closest(".default-prompt");
                if (!ele) return;
                setInputPrompt(ele.textContent);
                geminiAi();
              }}
              key={index}
              className="card-item rounded-[10px] bg-[#f0f4f9] flex flex-col justify-between h-[28vh] px-6 py-5 text-[16px]"
            >
              <p className="default-prompt text-gray-600 font-light">{text}</p>
              <div className="flex justify-end">
                <img
                  className="w-10 bg-white p-2 rounded-[50px]"
                  src={assets[icon]}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
