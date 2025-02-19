"use client";
import { QuestionsCounter } from "./QuestionsCounter";
import { QuestionsSection } from "./QuestionsSection";
import EnneagramaButton from "../UI/Buttons/EnneagramaButton";
import MainButton from "../UI/Buttons/MainButton";
import { useState, useEffect, useRef } from "react";
import { Modal } from "antd";
import { ipi } from "@/_libs/ipi";
import Image from "next/image";
import { IPIResult } from "./IPIResult";
import NextPrevButton from "../UI/Buttons/NextPrevButton";
import { useScreenSize } from "@/hooks/useScreenSize";
import leaveTestingRobot from "/public/_assets/images/sadRobot.svg";
import { Checkbox } from "../UI/Checkbox/Checkbox";
import { cn } from "@/_helpers/cn";

export const IPI = ({ lang }) => {
  const { isMobile } = useScreenSize();
  const localizedTests = ipi(lang);

  const contentRef = useRef(null);

  const [selectedValue, setSelectedValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [height, setHeight] = useState("auto");
  const [isShownResult, setIsShownResult] = useState(false);
  const [generalQuestions] = useState(localizedTests.length);
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const storedCurrentQuestion = localStorage.getItem("ipi_currentQuestion");
    return storedCurrentQuestion ? parseInt(storedCurrentQuestion, 10) : 0;
  });
  const [userAnswers, setUserAnswers] = useState(() => {
    const storedUserAnswers = localStorage.getItem("ipi_userAnswers");
    const parsed = JSON.parse(storedUserAnswers);
    return parsed ?? {};
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLeavePage = () => {
    localStorage.removeItem("ipi_currentQuestion");
    localStorage.removeItem("ipi_generalCount");
    localStorage.removeItem("ipi_userAnswers");
    window.location.href = `/${lang.locale}/get-tested`;
  };

  useEffect(() => {
    const storedCurrentQuestion = localStorage?.getItem("ipi_currentQuestion");
    const storedUserAnswers = JSON.parse(localStorage?.getItem("ipi_userAnswers"));

    if (storedCurrentQuestion) {
      setCurrentQuestion(parseInt(storedCurrentQuestion, 10));
    }
    if (storedUserAnswers || Object.keys(userAnswers).length === 0) {
      setUserAnswers(storedUserAnswers ?? {});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ipi_currentQuestion", currentQuestion);
    localStorage.setItem("ipi_userAnswers", JSON.stringify(userAnswers));
  }, [currentQuestion, userAnswers]);

  useEffect(() => {
    setHeight(isShownResult ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isShownResult]);

  useEffect(() => {
    localStorage.setItem("ipi_userAnswers", JSON.stringify(userAnswers));
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

  return (
    <div className='max-w-[842px] h-auto mt-[15px]'>
      <div className='text-end w-full flex justify-between'>
        <MainButton
          className='md:w-[120px] md:mr-[10px] h-[30px]'
          label={lang.enneagram_block.back_btn}
          onClick={showModal}
        />
        <QuestionsCounter
          className='w-[250px] md:w-auto'
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
        <div className='w-[512px] border-solid border-[6px] border-white h-[77px] flex gap-[55px] items-center justify-center'>
          <Checkbox value={1} checked={selectedValue === 1} onChange={handleSubmit} />
          <Checkbox value={2} checked={selectedValue === 2} onChange={handleSubmit} />
          <Checkbox value={3} checked={selectedValue === 3} onChange={handleSubmit} />
          <Checkbox value={4} checked={selectedValue === 4} onChange={handleSubmit} />
          <Checkbox value={5} checked={selectedValue === 5} onChange={handleSubmit} />
          <Checkbox value={6} checked={selectedValue === 6} onChange={handleSubmit} />
          <Checkbox value={7} checked={selectedValue === 7} onChange={handleSubmit} />
        </div>
        <div className='w-[512px] flex gap-[58px] items-center justify-center mt-[10px] text-[#5D5D5D] font-medium font-unbounded'>
          <span>3</span>
          <span>2</span>
          <span>1</span>
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>

      <div className='mb-[50px] md:mb-0 flex justify-evenly mt-[20px] w-[300px] mx-auto'>
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
      {Object.keys(userAnswers || {}).length === 30 && currentQuestion + 1 === generalQuestions && (
        <button
          onClick={() => {
            setIsShownResult(!isShownResult);
            setTimeout(() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }, 200);
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
      {isShownResult && currentQuestion + 1 === generalQuestions && (
        <IPIResult
          contentRef={contentRef}
          answers={userAnswers}
          lang={lang}
          questions={localizedTests}
        />
      )}
      <Modal
        className='w-[800px] h-[360px]'
        open={isModalOpen}
        width={!isMobile ? 800 : 350}
        height={360}
        footer={[]}
        closable={true}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className='flex items-center'>
          <Image
            className='hidden md:block ml-[30px] w-[192px] h-[280px]'
            src={leaveTestingRobot}
            alt={"robot look"}
            loading='lazy'
          />
          <div className='md:ml-[50px]'>
            <h1 className='text-center md:text-left text-[30px] md:text-[42px] font-unbounded'>
              {lang.enneagram_block.modal_window_h1}
            </h1>
            <p className='text-center md:text-left text-[18px] font-normal font-montserrat leading-[130%] w-[300px] md:w-[350px] mb-[20px] md:mb-[50px]'>
              {lang.enneagram_block.modal_window_p}
            </p>
            <div className='flex items-center flex-col gap-[10px] md:flex-row md:w-[500px]'>
              <EnneagramaButton
                onClick={handleLeavePage}
                className='w-[209px] h-[38px] md:mr-[15px] bg-[#7DACF1]'
                label={lang.enneagram_block.modal_leave_btn}
              />
              <EnneagramaButton
                className='w-[209px] h-[38px]'
                onClick={handleCancel}
                label={lang.enneagram_block.modal_continue_btn}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
