"use client";
import { Button } from "./ui/button";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

const Faqlist = ({ question, answer }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="bg-[#ffffff]/5 hover:bg-[#ffffff]/10 transition-colors duration-200 ease-in-out flex flex-col gap-2 md:gap-8 p-4 md:p-8">
        <div className="flex justify-between items-center">
          <h3 className="text-white">{question}</h3>
          <Button
            variant="ghost"
            className="inline-flex items-center justify-center cursor-pointer group"
            onClick={() => setIsActive(!isActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-6 ${
                isActive ? "rotate-180" : ""
              } transition-transform duration-150 text-white group-hover:text-black`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Button>
        </div>
        {isActive && <p className="text-gray-400">{answer}</p>}
      </div>
    </div>
  );
};

export default Faqlist;
