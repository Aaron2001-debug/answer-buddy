import React, { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

const TypingMarkdownMessage = ({ text, speed = 30, onDone }) => {
  const [displayedText, setDisplayedText] = useState("");
  console.log(text);
  const bottomRef = useRef(null);
  useEffect(() => {
    const text2 = text.split(" ");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text2.slice(0, i + 1).join(" "));
      i++;
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 10);
      if (i === text2.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onDone]);

  return (
    <>
      <ReactMarkdown>{displayedText}</ReactMarkdown>
      <div ref={bottomRef}></div>
    </>
  );
};

export default TypingMarkdownMessage;
