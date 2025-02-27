"use client";
import { QuestionsCounter } from "./QuestionsCounter";
import { QuestionsSection } from "./QuestionsSection";
import EnneagramaButton from "../UI/Buttons/EnneagramaButton";
import MainButton from "../UI/Buttons/MainButton";
import { useState, useEffect, useRef } from "react";
import { enneagrama } from "@/_libs/enneagrama";
import { EnneagramaResult } from "./EnneagramaResult";
import NextPrevButton from "../UI/Buttons/NextPrevButton";
import { useRootContext } from "@/state/rootContext";
import { ConfirmLeaveModal } from "../modals/ConfirmLeaveModal";

export const Enneagrama = ({ lang }) => {
  const localizedTests = enneagrama(lang);
  const {
    setPreventNavigation,
    showModal: isModalOpen,
    setShowModal,
    setLastUrl,
  } = useRootContext();
  const [backUrl, setBackUrl] = useState("");

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
      localStorage.removeItem("currentQuestion");
      localStorage.removeItem("generalCount");
      localStorage.removeItem("userAnswers");
    }
    setPreventNavigation(false);
    if (backUrl) {
      setLastUrl(backUrl);
    }
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
    <div className='max-w-[842px] h-auto mt-[15px]'>
      <div className='text-end w-full flex justify-between'>
        <MainButton
          className='md:w-[120px] md:mr-[10px] h-[30px]'
          label={lang.enneagram_block.back_btn}
          onClick={() => {
            setBackUrl(`/${lang.locale}/get-tested`);
            showModal();
          }}
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
      <ConfirmLeaveModal
        isModalOpen={isModalOpen}
        handleClose={() => setShowModal(false)}
        handleLeavePage={() => handleLeavePage()}
        lang={lang}
      />
    </div>
  );
};
