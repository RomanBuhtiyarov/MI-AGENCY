"use client";

import BlockTest from "@/components/TestingUser/BlockTest";
import { useEffect, useState } from "react";
import ArrowButton from "@/components/UI/Buttons/ArrowButton";

import tests from "@/_libs/paei";
import { PAEIResult } from "./PAEIResult";
import NextPrevButton from "../UI/Buttons/NextPrevButton";

export const TestingUser = () => {
  const [counterTest, setCounterTest] = useState([]);
  const [currentBlock, setCurrentBlock] = useState(tests.block_1);
  const [currentBlockID, setCurrentBlockID] = useState(1);
  const [counter, setCounter] = useState(0);
  const [generalQuestions] = useState(Object.keys(tests).length);
  const [isShownResult, setIsShownResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const updatedCounterTest = counterTest.map((item) => ({ ...item })); // Создаем новый массив с копиями объектов
    const updatedCounter = updatedCounterTest
      .map((item) => item.number)
      .reduce((previous, current) => Number(previous) + Number(current), 0);

    setCounter(updatedCounter);

    const counterTestLength = counterTest.length;
    if (counterTestLength === 3) {
      function findMissingLetter(arr, word) {
        // Create a set of letters from the word.
        const letterSet = new Set(word.split(""));

        // Remove letters from the set that are present in the array.
        arr.forEach((obj) => {
          letterSet.delete(obj.letter);
        });

        // The remaining letters in the set are the ones that need to be added.
        // Convert the set back to an array to get the missing letters.
        return Array.from(letterSet);
      }

      const word = "PAEI";

      const missingLetters = findMissingLetter(counterTest, word);

      setCounterTest((p) => [
        ...p,
        { number: 10 - updatedCounter, letter: missingLetters[0] },
      ]);
    }
    if (counterTestLength === 4) {
      setAnswers((prevState) =>
        prevState.find((el) => Object.keys(el)[0] === `id_${currentBlockID}`)
          ? [
              ...prevState.filter(
                (el) => Object.keys(el)[0] !== `id_${currentBlockID}`
              ),
              { [`id_${currentBlockID}`]: counterTest },
            ]
          : [...prevState, { [`id_${currentBlockID}`]: counterTest }]
      );
    }
  }, [counterTest]);

  useEffect(() => {
    const currentState = answers.find(
      (el) => Object.keys(el)[0] === `id_${currentBlockID}`
    );
    if (currentState) {
      setCounterTest(currentState[`id_${currentBlockID}`]);
    } else {
      setCounterTest([]);
    }
  }, [currentBlockID]);
  const toggleBlock = () => {
    setCounterTest([]);

    switch (currentBlock) {
      case tests.block_1:
        setCurrentBlock(tests.block_2);
        setCurrentBlockID((prevState) => prevState + 1);
        break;
      case tests.block_2:
        setCurrentBlock(tests.block_3);
        setCurrentBlockID((prevState) => prevState + 1);
        break;
      case tests.block_3:
        setCurrentBlock(tests.block_4);
        setCurrentBlockID((prevState) => prevState + 1);
        break;
      case tests.block_4:
        setCurrentBlock(tests.block_5);
        setCurrentBlockID((prevState) => prevState + 1);
        break;
      case tests.block_5:
        setCurrentBlock(tests.block_6);
        setCurrentBlockID((prevState) => prevState + 1);
        break;
      case tests.block_6:
        setCurrentBlock(tests.block_7);
        setCurrentBlockID((prevState) => prevState + 1);
        break;
      case tests.block_7:
        setCurrentBlock(tests.block_8);
        setCurrentBlockID((prevState) => prevState + 1);
        break;
      case tests.block_8:
        setCurrentBlock(tests.block_9);
        setCurrentBlockID((prevState) => prevState + 1);
        break;
      case tests.block_9:
        setCurrentBlock(tests.block_10);
        setCurrentBlockID((prevState) => prevState + 1);
        break;
      // ... Добавьте остальные блоки
    }
  };
  const goToPreviousBlock = () => {
    // Логика для перехода на предыдущий блок
    switch (currentBlock) {
      case tests.block_2:
        setCurrentBlock(tests.block_1);
        setCurrentBlockID((prevState) => prevState - 1);
        break;
      case tests.block_3:
        setCurrentBlock(tests.block_2);
        setCurrentBlockID((prevState) => prevState - 1);
        break;
      case tests.block_4:
        setCurrentBlock(tests.block_3);
        setCurrentBlockID((prevState) => prevState - 1);

        break;
      case tests.block_5:
        setCurrentBlock(tests.block_4);
        setCurrentBlockID((prevState) => prevState - 1);

        break;
      case tests.block_6:
        setCurrentBlock(tests.block_5);
        setCurrentBlockID((prevState) => prevState - 1);

        break;
      case tests.block_7:
        setCurrentBlock(tests.block_6);
        setCurrentBlockID((prevState) => prevState - 1);

        break;
      case tests.block_8:
        setCurrentBlock(tests.block_7);
        setCurrentBlockID((prevState) => prevState - 1);

        break;
      case tests.block_9:
        setCurrentBlock(tests.block_8);
        setCurrentBlockID((prevState) => prevState - 1);

        break;
      case tests.block_10:
        setCurrentBlock(tests.block_9);
        setCurrentBlockID((prevState) => prevState - 1);

        break;
    }
  };

  return (
    <>
      <div className="flex gap-[96px] max-w-[780px] justify-between">
        <div className="text-[16px]">
          <div className="flex items-center justify-end gap-[50px] max-w-[545px] w-full pr-[19px] mb-[12px]">
            {new Array(4).fill(null).map((_, i) => (
              <div className="text-[#5D5D5D] font-[600]">{i + 1}</div>
            ))}
          </div>
          <div className="max-w-[545px] w-[545px] flex flex-col gap-[20px]">
            {Array.isArray(currentBlock) &&
              currentBlock.map(
                (test, index) =>
                  !test.answers && (
                    <BlockTest
                      key={index}
                      counter={counter}
                      block={currentBlock}
                      answers={answers}
                      setAnswers={setAnswers}
                      blockId={currentBlockID}
                      state={counterTest}
                      setState={setCounterTest}
                      test_name={test.label}
                      letter={test._id}
                      index={index}
                    />
                  )
              )}
            <div className="flex flex-col">
              <div className="flex justify-end mt-[20px]">
                <NextPrevButton
                  className="previous-block block-button bg-transparent w-[135px] h-[17px] text-black hover:bg-transparent hover:font-bold"
                  label="Попередній блок"
                  onClick={() => {
                    if (currentBlockID > 0) {
                      goToPreviousBlock();
                    }
                  }}
                  disabled={currentBlockID === 1}
                />

                <NextPrevButton
                  className="block-button bg-transparent w-[128px] h-[17px] text-black hover:bg-transparent hover:font-bold"
                  label="Наступний блок"
                  onClick={toggleBlock}
                  disabled={currentBlockID === generalQuestions}
                />
              </div>

              {answers.length === 10 && (
                <button
                  onClick={() => {
                    setIsShownResult(!isShownResult);
                  }}
                  className="flex items-center justify-center flex-col gap-[5px] w-full py-[26px] font-medium"
                >
                  <span className="text-[#262626] text-center font-unbounded text-[16px] ">
                    Дізнатися результат
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="11"
                    viewBox="0 0 22 11"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.219168 0.375342C0.564178 -0.0559202 1.19347 -0.125842 1.62473 0.219168L11 7.71941L20.3753 0.219168C20.8066 -0.125842 21.4359 -0.0559202 21.7809 0.375342C22.1259 0.806604 22.056 1.4359 21.6247 1.78091L11 10.2807L0.375342 1.78091C-0.0559202 1.4359 -0.125842 0.806604 0.219168 0.375342Z"
                      fill="#262626"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="text-center font-unbounded text-[#262626] items-center">
          <p className="font-normal mb-[20px] ">Пройдено</p>
          <div className="mb-[60px] text-center w-[145px]">
            <p className="text-4xl font-medium  bg-gradient-to-r from-[#4485ED] to-[#6764E7] text-transparent bg-clip-text">
              {currentBlockID} / 10
            </p>
            <span className="text-[#5D5D5D] text-[16px]">блоків</span>
          </div>
          <div className="mb-[60px] text-center w-[145px]">
            <p className="text-4xl font-medium  bg-gradient-to-r from-[#4485ED] to-[#6764E7] text-transparent bg-clip-text">
              {counter} / 10
            </p>
            <span className="text-[#5D5D5D] text-[16px]">балів</span>
          </div>
        </div>
      </div>

      {isShownResult && <PAEIResult answers={answers} />}
    </>
  );
};
