"use client";

import { mbi_results } from "@/_libs/mbi_results";
import React, { useState, useMemo } from "react";
import arrowRight from "/public/_assets/images/arrows/arrowRight.svg";
import { cn } from "@/_helpers/cn";

const ProgressBar = ({ max, value, lang, level }) => {
  return (
    <div className='flex gap-[25px]'>
      <div className='mt-[9px] w-[546px]'>
        <div className='flex justify-between px-[7px] mb-[5px] text-[#5D5D5D] font-semibold'>
          <div>{value}</div>
          <div>{max}</div>
        </div>
        <div className='flex items-center gap-[11px]'>
          <div className='bg-white rounded-[9px] p-[10px]  '>
            <div className='flex-start rounded-[29px] w-[521px]  h-[16px] overflow-hidden bg-[#EFF3FB] font-monserrat text-xs font-[600] relative'>
              <div
                className={cn(
                  "rounded-[6px] h-full items-baseline justify-center overflow-hidden break-all bg-gradient-to-r from-[#4485ED] to-[#6764E7] relative transition-all duration-300 ease-in-out",
                  {
                    "opacity-40": level === "low",
                    "opacity-70": level === "medium",
                    "": level === "high",
                  },
                )}
                style={{ width: `${(value / max) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-[40px] font-unbounded bg-gradient-to-r from-[#4485ED] to-[#6764E7] text-transparent bg-clip-text'>
          {value} / {max}
        </div>
        <div className='text-[#5D5D5D] font-medium'>{lang.mbi_results.scores}</div>
      </div>
    </div>
  );
};

const MBIResult = ({ lang, answers, questions }) => {
  const [expanded, setExpanded] = useState(new Array(3).fill(false));

  const toggleExpanded = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const results = useMemo(() => {
    const scores = {};

    questions.forEach((question, index) => {
      const correctAnswer = answers[index.toString()];
      const questionType = question.type;

      if (correctAnswer !== undefined) {
        const answerValue = parseInt(correctAnswer);
        scores[questionType] = (scores[questionType] || 0) + answerValue;
      }
    });

    const emotional_burnout = scores["1"];
    const alienation = scores["2"];
    const personal_accomplishments = scores["3"];
    return mbi_results({ lang, emotional_burnout, alienation, personal_accomplishments });
  }, [answers, questions]);

  return (
    <div>
      {results.map(({ content, title, max, value, level }, index) => {
        return (
          <div key={index} className='mb-[10px]'>
            <div>{title}</div>
            <ProgressBar max={max} value={value} lang={lang} level={level} />
            <div
              className={cn(
                "cursor-pointer font-unbounded text-xs font-medium text-[#262626] mt-[10px] flex items-center gap-2 duration-300",
                {
                  "text-[#347AEC] text-[17px]": expanded[index],
                },
              )}
              onClick={() => toggleExpanded(index)}
            >
              {lang.ipi_results.more}{" "}
              <div
                className={cn("w-[5px] h-[11px] bg-[#262626] duration-300", {
                  "bg-[#347AEC] rotate-90 w-[8px] h-[16px]": expanded[index],
                })}
                style={{
                  WebkitMask: `url(${arrowRight.src})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                }}
              />
            </div>
            {expanded[index] && content}
          </div>
        );
      })}
    </div>
  );
};

export default MBIResult;
