"use client";
import { QuestionsCounter } from "./QuestionsCounter";
import { QuestionsSection } from "./QuestionsSection";
import EnneagramaButton from "../UI/Buttons/EnneagramaButton";
import MainButton from "../UI/Buttons/MainButton";
import { useState, useEffect, useRef } from "react";
import { Modal } from "antd";
import Link from "next/link";
import { enneagrama } from "@/_libs/enneagrama";
import Image from "next/image";
import { EnneagramaResult } from "./EnneagramaResult";
import NextPrevButton from "../UI/Buttons/NextPrevButton";
import { useScreenSize } from "@/hooks/useScreenSize";
import leaveTestingRobot from "/public/_assets/images/sadRobot.svg";

export const Enneagrama = ({ lang }) => {
  const { isMobile } = useScreenSize();
  const localizedTests = enneagrama(lang);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    // window.history.back(); // Go back to the previous page
  };

  const handleLeavePage = () => {
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("generalCount");
    localStorage.removeItem("userAnswers");
    window.location.href = `/${lang.locale}/get-tested`; // Redirect to the specified URL
  };
  const [height, setHeight] = useState("auto");

  const contentRef = useRef(null);
  const [isShownResult, setIsShownResult] = useState(false);
  const [generalQuestions] = useState(localizedTests.length);

  useEffect(() => {
    // Завантаження даних з localStorage при старті компоненту
    const storedCurrentQuestion = localStorage?.getItem("currentQuestion");
    const storedGeneralCount = localStorage?.getItem("generalCount");
    const storedUserAnswers = localStorage?.getItem("userAnswers");

    // Встановлення станів з даних localStorage, якщо вони існують
    if (storedCurrentQuestion) {
      setCurrentQuestion(parseInt(storedCurrentQuestion, 10));
    }
    if (storedGeneralCount) {
      setGeneralCount(parseInt(storedGeneralCount, 10));
    }
    if (storedUserAnswers || Object.keys(userAnswers).length === 0) {
      setUserAnswers(JSON.parse(storedUserAnswers));
    }
  }, []);
  const [generalCount, setGeneralCount] = useState(() => {
    const storedGeneralCount = localStorage.getItem("generalCount");
    return storedGeneralCount ? parseInt(storedGeneralCount, 10) : 0;
  });

  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const storedCurrentQuestion = localStorage.getItem("currentQuestion");
    return storedCurrentQuestion ? parseInt(storedCurrentQuestion, 10) : 0;
  });
  const [userAnswers, setUserAnswers] = useState(() => {
    const storedUserAnswers = localStorage.getItem("userAnswers");
    return storedUserAnswers ? JSON.parse(storedUserAnswers) : {};
  });

  useEffect(() => {
    // Зберігаємо дані в локальному сховищі
    localStorage.setItem("currentQuestion", currentQuestion);
    localStorage.setItem("generalCount", generalCount);
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  }, [currentQuestion, generalCount, userAnswers]);

  useEffect(() => {
    setHeight(isShownResult ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isShownResult]);

  useEffect(() => {
    // Обновляем высоту при загрузке компонента
    setHeight(isShownResult ? `${contentRef.current.scrollHeight}px` : "0px");
  }, []);

  const handleSubmit = (type = "Yes") => {
    if (currentQuestion === generalQuestions) {
      return false;
    }
    const answerScore = type === "Yes" ? "так" : "ні";

    setUserAnswers((prevUserAnswers) => ({
      ...prevUserAnswers,
      [currentQuestion]: answerScore,
    }));

    if (type === "Yes") {
      setCurrentQuestion((prev) => prev + 1);
      setGeneralCount((prev) => prev + 1);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
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
          current={currentQuestion}
          general={generalQuestions}
          lang={lang}
        />
      </div>
      <div className='mt-[10px] mb-[20px]'>
        <QuestionsSection
          lang={lang}
          isShownResult={isShownResult}
          setIsShownResult={setIsShownResult}
          checkFinish={currentQuestion === generalQuestions}
          question={localizedTests.map((question) => question.text)[currentQuestion]}
        />
      </div>
      {currentQuestion !== generalQuestions && (
        <div className='w-full flex flex-col md:flex-row items-center justify-between gap-[16px]'>
          <EnneagramaButton
            disabled={currentQuestion === generalQuestions ? true : false}
            className='w-full md:w-[270px] h-[40px] md:h-[50px]'
            onClick={() => handleSubmit("Yes")}
            label={lang.enneagram_block.yes_btn}
          />
          <EnneagramaButton
            disabled={currentQuestion === generalQuestions ? true : false}
            className='w-full md:w-[270px] h-[40px] md:h-[50px]'
            onClick={() => handleSubmit("No")}
            label={lang.enneagram_block.yes_no_btn}
          />
          <EnneagramaButton
            disabled={currentQuestion === generalQuestions ? true : false}
            className='w-full md:w-[270px] h-[40px] md:h-[50px]'
            onClick={() => handleSubmit("No")}
            label={lang.enneagram_block.no_btn}
          />
        </div>
      )}

      <div className='mb-[50px] md:mb-0 flex justify-evenly mt-[20px] w-[300px] mx-auto'>
        {currentQuestion > 0 && currentQuestion !== generalQuestions && (
          <NextPrevButton
            className='previous-block block-button bg-transparent w-[140px] h-[17px] text-[#000] hover:bg-transparent hover:font-bold'
            label={lang.test_page.prev_block_btn}
            onClick={() => {
              if (currentQuestion > 0) {
                setCurrentQuestion((prev) => prev - 1);
              }
            }}
          />
        )}
        {/* {currentQuestion < generalQuestions && (
          <NextPrevButton
            className="block-button bg-transparent w-[130px] h-[17px] text-[#000] hover:bg-transparent hover:font-bold"
            label={lang.test_page.next_block_btn}
            onClick={() => setCurrentQuestion((prev) => prev + 1)}
          />
        )} */}
      </div>
      {isShownResult && (
        <EnneagramaResult
          contentRef={contentRef}
          height={height}
          answers={userAnswers}
          lang={lang}
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
