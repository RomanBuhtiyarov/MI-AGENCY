"use client";

import { QuestionsCounter } from "@/components/TestingUser/Enneagrama/QuestionsCounter";
import { QuestionsSection } from "@/components/TestingUser/Enneagrama/QuestionsSection";
import EnneagramaButton from "@/components/UI/Buttons/EnneagramaButton";
import MainButton from "@/components/UI/Buttons/MainButton";
import ArrowButton from "@/components/UI/Buttons/ArrowButton";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import Link from "next/link";
import enneagrama from "@/_libs/enneagrama";
import Image from "next/image";
import { EnneagramaResult } from "./EnneagramaResult";
import NextPrevButton from "@/components/UI/Buttons/NextPrevButton";
export const Enneagrama = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    // window.history.back(); // Go back to the previous page
  };

  const handleLeavePage = () => {
    localStorage.clear();
    window.location.href = "/get-tested"; // Redirect to the specified URL
  };

  const [isShownResult, setIsShownResult] = useState(false);
  const [generalQuestions] = useState(enneagrama.length);

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
    // Завантаження даних з localStorage при старті компоненту
    const storedCurrentQuestion = localStorage.getItem("currentQuestion");
    const storedGeneralCount = localStorage.getItem("generalCount");
    const storedUserAnswers = localStorage.getItem("userAnswers");

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
    <div className="max-w-[842px] h-auto mt-[15px]">
      <div className="text-end w-full flex justify-between ">
        <MainButton
          className="w-[107px] h-[30px]"
          label="Назад"
          onClick={showModal}
        />
        <QuestionsCounter
          current={currentQuestion}
          general={generalQuestions}
        />
      </div>
      <div className="mt-[10px] mb-[20px]">
        <QuestionsSection
          isShownResult={isShownResult}
          setIsShownResult={setIsShownResult}
          checkFinish={currentQuestion === generalQuestions}
          question={
            enneagrama.map((question) => question.text)[currentQuestion]
          }
        />
      </div>
      <div className="w-full flex items-center justify-between gap-[16px]">
        <EnneagramaButton
          disabled={currentQuestion === generalQuestions ? true : false}
          className="w-[270px] h-[50px]"
          onClick={() => handleSubmit("Yes")}
          label="Так"
        />
        <EnneagramaButton
          disabled={currentQuestion === generalQuestions ? true : false}
          className="w-[270px] h-[50px]"
          onClick={() => handleSubmit("No")}
          label="I Так, i нi"
        />
        <EnneagramaButton
          disabled={currentQuestion === generalQuestions ? true : false}
          className="w-[270px] h-[50px]"
          onClick={() => handleSubmit("No")}
          label="Нi"
        />
      </div>
      <div className="flex justify-around mt-[20px] w-[300px] mx-auto">
        {currentQuestion > 0 && (
          <NextPrevButton
            className="previous-block block-button bg-transparent w-[135px] h-[17px] text-[#000] hover:bg-transparent hover:font-bold"
            label="Попередній блок"
            onClick={() => {
              if (currentQuestion > 0) {
                setCurrentQuestion((prev) => prev - 1);
              }
            }}
          />
        )}
        {currentQuestion < generalQuestions && (
          <NextPrevButton
            className="block-button bg-transparent w-[128px] h-[17px] text-[#000] hover:bg-transparent hover:font-bold"
            label="Наступний блок"
            onClick={() => setCurrentQuestion((prev) => prev + 1)}
          />
        )}
      </div>
      {isShownResult && <EnneagramaResult answers={userAnswers} />}
      <Modal
        width={"800px"}
        height={"360px"}
        open={isModalOpen}
        footer={[]}
        closable={false}
      >
        <div className="flex items-center ">
          <Image
            className="ml-[30px]"
            src={"/_assets/images/leave_testing_robot.png"}
            alt={"robot look"}
            loading="lazy"
            width={192}
            height={280}
          />
          <div className="ml-[50px]">
            <h1 className="text-[42px] font-unbounded ">Ви впевнені?</h1>
            <p className="text-[18px] font-normal font-montserrat leading-[130%] w-[350px] mb-[50px]">
              Якщо ви залишите сторінку зараз, ми не зможемо зберегти ваші
              результати. Продовжити?
            </p>
            <div className="w-[500px]">
              <EnneagramaButton
                onClick={handleLeavePage}
                className="w-[209px] h-[38px] mr-[15px]"
                label={"Залишити сторінку"}
              />
              <EnneagramaButton
                className="w-[209px] h-[38px]"
                onClick={handleCancel}
                label="Продовжити"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
