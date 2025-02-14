import { useState, useMemo } from "react";
import arrowRight from "/public/_assets/images/arrows/arrowRight.svg";
import { cn } from "@/_helpers/cn";
import lowLevelImage from "/public/_assets/images/ipi_answers/low.png";
import optimalLevelImage from "/public/_assets/images/ipi_answers/optimal.png";
import highLevelImage from "/public/_assets/images/ipi_answers/high.png";
import { ipi_results } from "@/_libs/ipi_results";

const ProgressBar = ({ max, value }) => {
  return (
    <div className='mt-[9px] w-[546px]'>
      <div className='flex justify-between px-[7px] mb-[5px] text-[#5D5D5D] font-semibold'>
        <div>{value}</div>
        <div>{max}</div>
      </div>
      <div className='flex items-center gap-[11px]'>
        <div className='bg-white rounded-[9px] p-[10px]  '>
          <div className='flex-start rounded-[29px] w-[521px]  h-[16px] overflow-hidden bg-[#EFF3FB] font-monserrat text-xs font-[600] relative'>
            <div
              className='rounded-[6px] h-full items-baseline justify-center overflow-hidden break-all bg-[#6764E7] relative transition-all duration-300 ease-in-out;'
              style={{ width: `${(value / max) * 100}%` }}
            />
          </div>
        </div>
        <div className='text-[#262626] text-[25px] font-unbounded'>{value}</div>
      </div>
    </div>
  );
};

export const IPIResult = ({ answers, lang, contentRef, questions }) => {
  const localizedResults = ipi_results(lang);
  const [expanded, setExpanded] = useState(new Array(7).fill(false));

  const toggleExpanded = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const { scores, total } = useMemo(() => {
    const scores = {};
    let total = 0;

    questions.forEach((question) => {
      const correctAnswer = answers[(question.number - 1).toString()];
      const questionType = question.type;

      if (correctAnswer) {
        const answerValue = parseInt(correctAnswer);
        scores[questionType] = (scores[questionType] || 0) + answerValue;
        total += answerValue;
      }
    });

    return { scores, total };
  }, [answers, questions]);

  const { resultImage, totalText } = useMemo(() => {
    let resultImage;
    const totalText = {};
    if (total <= 90) {
      resultImage = lowLevelImage;
      totalText.title = lang.ipi_results.total.low_level.title;
      totalText.level = lang.ipi_results.total.low_level.level;
      totalText.description = lang.ipi_results.total.low_level.description;
    } else if (total <= 163) {
      resultImage = optimalLevelImage;
      totalText.title = lang.ipi_results.total.optimal_level.title;
      totalText.level = lang.ipi_results.total.optimal_level.level;
      totalText.description = lang.ipi_results.total.optimal_level.description;
    } else {
      resultImage = highLevelImage;
      totalText.title = lang.ipi_results.total.high_level.title;
      totalText.level = lang.ipi_results.total.high_level.level;
      totalText.description = lang.ipi_results.total.high_level.description;
    }

    return { resultImage, totalText };
  }, [total]);

  return (
    <div ref={contentRef}>
      <div>
        <div className='text-[#262626] text-3xl font-unbounded'>{lang.ipi_results.total.title}</div>
        <ProgressBar max={210} value={total} />
        <div
          className={cn(
            "cursor-pointer font-unbounded text-xs font-medium text-[#262626] mt-[10px] flex items-center gap-2 duration-300",
            {
              "text-[#347AEC] text-[17px]": expanded[0],
            },
          )}
          onClick={() => toggleExpanded(0)}
        >
          {lang.ipi_results.more}{" "}
          <img
            src={arrowRight.src}
            alt='more'
            className={cn("duration-300", {
              "rotate-90 ": expanded[0],
            })}
          />
        </div>
        {expanded[0] && (
          <div>
            <div className='text-[#262626] font-medium leading-[20.8px] mt-[29px]'>
              {lang.ipi_results.total.description_1}
              <span className='font-bold'>{lang.ipi_results.total.description_2}</span>
              {lang.ipi_results.total.description_3}
            </div>
            <div className='mt-[39px] flex gap-[28px]'>
              <img src={resultImage.src} alt='result' className='w-[271px] h-[271px]' />
              <div>
                <div className='text-[#262626] font-bold text-[25px] leading-[32.5px]'>
                  {totalText.title} <span className='text-[#347AEC]'>{totalText.level}</span>
                </div>
                <div className='mt-[9px] text-lg leading-[23.4px]'>{totalText.description}</div>
              </div>
            </div>
          </div>
        )}
      </div>
      {localizedResults?.map((result, index) => {
        const expandedIndex = index + 1;
        const score = scores[index + 1];
        const levelkey = score <= 17 ? "low" : score <= 28 ? "optimal" : "high";

        return (
          <div key={result.title} className='mt-4'>
            <div className='text-[#262626] text-3xl font-unbounded'>{result.title}</div>
            <ProgressBar max={35} value={score} />
            <div
              className={cn(
                "cursor-pointer font-unbounded text-xs font-medium text-[#262626] mt-[10px] flex items-center gap-2 duration-300",
                {
                  "text-[#347AEC] text-[17px]": expanded[expandedIndex],
                },
              )}
              onClick={() => toggleExpanded(expandedIndex)}
            >
              {lang.ipi_results.more}{" "}
              <img
                src={arrowRight.src}
                alt='more'
                className={cn("duration-300", {
                  "rotate-90 ": expanded[expandedIndex],
                })}
              />
            </div>
            {expanded[expandedIndex] && (
              <div>
                {result.description}
                <div className='mt-[19px]'>
                  {result[levelkey].title}
                  {result[levelkey].description}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
