"use client";
import { QuestionsCounter } from "./QuestionsCounter";
import { QuestionsSection } from "./QuestionsSection";
import MainButton from "../UI/Buttons/MainButton";
import { useState, useEffect, useRef } from "react";
import { ipi } from "@/_libs/ipi";
import { IPIResult } from "./IPIResult";
import NextPrevButton from "../UI/Buttons/NextPrevButton";
import { Checkbox } from "../UI/Checkbox/Checkbox";
import { cn } from "@/_helpers/cn";
import { useRootContext } from "@/state/rootContext";
import { ConfirmLeaveModal } from "../modals/ConfirmLeaveModal";

export const IPI = ({ lang }) => {
  const localizedTests = ipi(lang);

  const contentRef = useRef(null);

  const [selectedValue, setSelectedValue] = useState(null);
  const [isShownResult, setIsShownResult] = useState(false);
  const [generalQuestions] = useState(localizedTests.length);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [backUrl, setBackUrl] = useState("");

  const {
    setPreventNavigation,
    showModal: isModalOpen,
    setShowModal,
    setLastUrl,
  } = useRootContext();

  useEffect(() => {
    setPreventNavigation(true);
    return () => {
      setPreventNavigation(false);
    };
  }, []);

  const showModal = () => {
    setShowModal(true);
  };

  const handleLeavePage = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("ipi_currentQuestion");
      localStorage.removeItem("ipi_generalCount");
      localStorage.removeItem("ipi_userAnswers");
    }
    setTimeout(() => {
      setPreventNavigation(false);
    }, 100);
    if (backUrl) {
      setLastUrl(backUrl);
    }
  };

  useEffect(() => {
    if (userAnswers[currentQuestion]) {
      setSelectedValue(parseInt(userAnswers[currentQuestion], 10));
    } else {
      setSelectedValue(null);
    }
  }, [currentQuestion, userAnswers]);

  const handleSubmit = (event) => {
    if (currentQuestion === generalQuestions) {
      return false;
    }

    const { value } = event.target;
    setSelectedValue(+value);

    setUserAnswers((prevUserAnswers) => ({
      ...prevUserAnswers,
      [currentQuestion]: value,
    }));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isModalOpen) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "auto";
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        document.documentElement.style.overflow = "auto";
      }
    };
  }, [isModalOpen]);

  return (
    <div>
      <div className='max-w-[842px] mobile:max-w-[370px] mobileS:max-w-[360px] h-auto mt-[15px]'>
        <div className='text-end w-full flex justify-between mobile:justify-normal mobile:gap-[6px]'>
          <MainButton
            className='md:w-[120px] md:mr-[10px] h-[30px]'
            label={lang.enneagram_block.back_btn}
            onClick={() => {
              setBackUrl(`/${lang.locale}/get-tested`);
              showModal();
            }}
          />
          <QuestionsCounter
            className='mobile:flex-1'
            curr={currentQuestion + 1}
            general={generalQuestions}
            lang={lang}
          />
        </div>
        <div className='mt-[10px] mb-[20px]'>
          <QuestionsSection
            lang={lang}
            isShownResult={isShownResult}
            setIsShownResult={setIsShownResult}
            checkFinish={currentQuestion >= generalQuestions}
            question={localizedTests.map((question) => question.text)[currentQuestion]}
          />
        </div>

        <div className='flex justify-center flex-col items-center'>
          <div className='mobile:max-w-[380px] mobile:gap-[32px] mobile:px-[24px] rounded-[10px] px-[30px] max-w-[512px] shadow-shadow-20 border-solid border-[6px] border-white h-[77px] flex gap-[55px] items-center justify-center'>
            <Checkbox value={1} checked={selectedValue === 1} onChange={handleSubmit} />
            <Checkbox value={2} checked={selectedValue === 2} onChange={handleSubmit} />
            <Checkbox value={3} checked={selectedValue === 3} onChange={handleSubmit} />
            <Checkbox value={4} checked={selectedValue === 4} onChange={handleSubmit} />
            <Checkbox value={5} checked={selectedValue === 5} onChange={handleSubmit} />
            <Checkbox value={6} checked={selectedValue === 6} onChange={handleSubmit} />
            <Checkbox value={7} checked={selectedValue === 7} onChange={handleSubmit} />
          </div>
          <div className='mobile:max-w-[380px] mobile:gap-[36px] max-w-[512px] flex gap-[58px] items-center justify-center mt-[10px] text-[#5D5D5D] font-medium font-unbounded'>
            <span>3</span>
            <span>2</span>
            <span>1</span>
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </div>

        <div className='mb-[50px] md:mb-0 mobile:mb-0 flex justify-evenly mt-[20px] w-[300px] mx-auto'>
          <NextPrevButton
            disabled={currentQuestion === 0}
            className='previous-block block-button bg-transparent w-[140px] h-[17px] text-[#000] hover:bg-transparent hover:font-bold'
            label={lang.test_page.prev_block_btn}
            onClick={() => {
              if (currentQuestion > 0) {
                setCurrentQuestion((prev) => prev - 1);
              }
            }}
          />
          {currentQuestion < generalQuestions && (
            <NextPrevButton
              disabled={!selectedValue || currentQuestion + 1 === generalQuestions}
              className='block-button bg-transparent w-[130px] h-[17px] text-[#000] hover:bg-transparent hover:font-bold'
              label={lang.test_page.next_block_btn}
              onClick={() => {
                setCurrentQuestion((prev) => prev + 1);
              }}
            />
          )}
        </div>
        {Object.keys(userAnswers || {}).length === 30 &&
          currentQuestion + 1 === generalQuestions && (
            <button
              ref={contentRef}
              onClick={() => {
                setIsShownResult(!isShownResult);
                if (!isShownResult) {
                  setTimeout(() => {
                    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 200);
                }
              }}
              className='flex items-center justify-center flex-col gap-[5px] w-full py-[26px]'
            >
              <span className='text-[#262626] text-center font-unbounded text-[16px] md:text-[22px]'>
                {lang.ipi_page.get_result_btn}
              </span>
              <svg
                className={cn("w-[18px] h-[10px] md:w-22 md:h-11 duration-300", {
                  "rotate-180": isShownResult,
                })}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 22 11'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.219168 0.375342C0.564178 -0.0559202 1.19347 -0.125842 1.62473 0.219168L11 7.71941L20.3753 0.219168C20.8066 -0.125842 21.4359 -0.0559202 21.7809 0.375342C22.1259 0.806604 22.056 1.4359 21.6247 1.78091L11 10.2807L0.375342 1.78091C-0.0559202 1.4359 -0.125842 0.806604 0.219168 0.375342Z'
                  fill='#262626'
                />
              </svg>
            </button>
          )}
        <ConfirmLeaveModal
          isModalOpen={isModalOpen}
          handleClose={() => setShowModal(false)}
          handleLeavePage={() => handleLeavePage()}
          lang={lang}
        />
      </div>
      {isShownResult && currentQuestion + 1 === generalQuestions && (
        <IPIResult
          // contentRef={contentRef}
          answers={userAnswers}
          lang={lang}
          questions={localizedTests}
        />
      )}
    </div>
  );
};
