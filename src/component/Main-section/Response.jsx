import { useContext } from "react";
import { GeminiContext } from "../../AnswerBuddyContext";
import { assets } from "../../assets/assets";
import ReactMarkdown from "react-markdown";
import TypingMarkdownMessage from "./TypingMarkdownMessage";
import "./response.css";
export const Response = () => {
  const { resultData, isLoading, responseHistory } = useContext(GeminiContext);

  const responseEffect = (index, response) => {
    if (index === responseHistory.length - 1) {
      return <TypingMarkdownMessage text={response} />;
    } else {
      return <ReactMarkdown>{response}</ReactMarkdown>;
    }
  };
  return (
    <ul className="response   overflow-y-scroll">
      {responseHistory.map((currRes, index) => {
        const { question, response } = currRes;
        return (
          <li key={index} className="mt-10  flex items-end flex-col">
            <div className="rounded-[5px] flex max-w-fit justify-end items-baseline gap-x-4 question text-end mb-10  py-2 pl-8 pr-4 bg-[#f0f4f9] ">
              <p className="text-gray-600 text-[16px]  font-light min-w-fit ">
                {question}
              </p>
              <img
                className="w-8 rounded-[50px]"
                src={assets.user_icon}
                alt=""
              />
            </div>
            <div className="bg-[#f0f4f9] self-start rounded-[5px]  flex items-baseline py-3 pl-3 pr-5 mt-2 ">
              <img className=" w-8" src={assets.gemini_icon} alt="" />
              {isLoading &&
              index === responseHistory.length - 1 &&
              response === "" ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <div className="text-gray-00 text-[16px] ">
                  {responseEffect(index, response)}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Format = (res) => {
  return <ReactMarkdown>{res}</ReactMarkdown>;
};
