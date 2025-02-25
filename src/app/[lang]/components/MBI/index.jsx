"use client";

import { mbi } from "@/_libs/mbi";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Checkbox } from "../UI/Checkbox/Checkbox";
import NextPrevButton from "../UI/Buttons/NextPrevButton";
import { cn } from "@/_helpers/cn";
import MBIResult from "./MBIResult";
import { Modal } from "antd";
import MainButton from "../UI/Buttons/MainButton";
import EnneagramaButton from "../UI/Buttons/EnneagramaButton";
import { useScreenSize } from "@/hooks/useScreenSize";
import leaveTestingRobot from "/public/_assets/images/sadRobot.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Question = ({ label, handleSubmit, type, index, userAnswers, currentPage }) => {
  const relativeIndex = index + (currentPage - 1) * 7;

  return (
    <div className='bg-white mobile:bg-transparent mobile:shadow-none mobile:block justify-between max-w-[661px] min-h-[57px] mt-[12px] shadow-shadow-20 rounded-[5px] flex items-center pl-4 pr-[30px] mobile:pr-4'>
      <div className='max-w-[310px] font-medium mobile:max-w-full mobile:mb-[17px] mobile:text-sm'>
        {label}
      </div>
      <div className='flex gap-6 mobile:justify-center bg-white mobile:py-[15px] mobile:px-[50px] mobile:rounded-[5px]'>
        {[0, 1, 2, 3, 4, 5, 6].map((value) => (
          <Checkbox
            key={value}
            value={value}
            checked={userAnswers[relativeIndex] === value}
            onChange={() => {
              handleSubmit({ type, value, index: relativeIndex });
            }}
            className='w-[19px] h-[19px]'
          />
        ))}
      </div>
    </div>
  );
};

const MBI = ({ lang }) => {
  const location = usePathname();
  const localizedTests = mbi(lang);
  const { isMobile } = useScreenSize();
  const [currentPage, setCurrentPage] = useState(1);
  const [userAnswers, setUserAnswers] = useState(() => {
    const storedUserAnswers = localStorage.getItem("mbi_userAnswers");
    const parsed = JSON.parse(storedUserAnswers);
    return parsed ?? {};
  });
  const [isShownResult, setIsShownResult] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resultRef = useRef(null);
  const currentQuestions = useMemo(() => {
    const questionsPerPage = currentPage > 2 ? 8 : 7;
    const startIndex = (currentPage - 1) * 7;
    const endIndex = Math.min(startIndex + questionsPerPage, localizedTests.length);
    return localizedTests.slice(startIndex, endIndex);
  }, [currentPage, localizedTests]);

  useEffect(() => {
    const storedCurrentPage = localStorage?.getItem("mbi_currentpage");
    const storedUserAnswers = JSON.parse(localStorage?.getItem("mbi_userAnswers"));

    if (storedCurrentPage) {
      setCurrentPage(parseInt(storedCurrentPage, 10));
    }
    if (storedUserAnswers || Object.keys(userAnswers).length === 0) {
      setUserAnswers(storedUserAnswers ?? {});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mbi_currentPage", currentPage);
    localStorage.setItem("mbi_userAnswers", JSON.stringify(userAnswers));
  }, [currentPage, userAnswers]);

  const handleLeavePage = () => {
    localStorage.removeItem("mbi_currentPage");
    localStorage.removeItem("mbi_userAnswers");
    window.location.href = `/${lang.locale}/get-tested`;
  };

  const handleSubmit = ({ index, type, value }) => {
    setUserAnswers({
      ...userAnswers,
      [index]: parseInt(value, 10),
    });
  };

  return (
    <div>
      <MainButton
        className='md:w-[120px] md:mr-[10px] h-[30px] mobile:mb-4'
        label={lang.enneagram_block.back_btn}
        onClick={() => setIsModalOpen(true)}
      />
      <div className='flex gap-[50px] mobile:block'>
        <div className='max-w-[812px] w-full mobile:mb-[50px]'>
          <div className='flex gap-[34px] justify-end pr-[212px] mobile:justify-center mobile:pr-1'>
            {[0, 1, 2, 3, 4, 5, 6].map((number) => (
              <div key={number} className='text-[#5D5D5D] font-semibold '>
                {number}
              </div>
            ))}
          </div>
          <div className='flex items-center gap-[58px] mobile:flex-col'>
            <div>
              {currentQuestions.map(({ label, type }, index) => {
                return (
                  <Question
                    key={label}
                    index={index}
                    userAnswers={userAnswers}
                    label={label}
                    type={type}
                    handleSubmit={handleSubmit}
                    currentPage={currentPage}
                  />
                );
              })}
            </div>
            <div className='flex items-center mobile:flex-col-reverse'>
              <div className='flex items-center justify-center flex-col mobile:mt-[15px] mobile:mb-[15px]'>
                <div className='font-unbounded'>{lang.mbi_page.done}</div>
                <div className='text-[40px] font-unbounded bg-gradient-to-r from-[#4485ED] to-[#6764E7] text-transparent bg-clip-text'>
                  {currentPage} / 3
                </div>
                <div className='text-[#5D5D5D] font-medium'>{lang.mbi_results.blocks}</div>
              </div>
            </div>
          </div>
          <div className='mt-[21px] flex justify-center max-w-[661px]'>
            <NextPrevButton
              className='previous-block block-button bg-transparent w-[140px] h-[17px] text-[#000] hover:bg-transparent hover:font-bold'
              label={lang.test_page.prev_block_btn}
              onClick={() => {
                setCurrentPage((prev) => prev - 1);
              }}
              disabled={currentPage === 1}
            />
            <NextPrevButton
              disabled={currentPage === 3}
              className='block-button bg-transparent w-[130px] h-[17px] text-[#000] hover:bg-transparent hover:font-bold'
              label={lang.test_page.next_block_btn}
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
              }}
            />
          </div>
          {Object.keys(userAnswers).length > 0 && currentPage === 3 && (
            <button
              ref={resultRef}
              onClick={() => {
                setIsShownResult(!isShownResult);
                if (!isShownResult) {
                  setTimeout(() => {
                    resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 200);
                }
              }}
              className='flex items-center justify-center flex-col gap-[5px] w-full py-[26px] mobile:mb-[30px]'
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
        </div>
      </div>
      {isShownResult && currentPage === 3 && (
        <MBIResult lang={lang} answers={userAnswers} questions={localizedTests} />
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
                onClick={() => setIsModalOpen(false)}
                label={lang.enneagram_block.modal_continue_btn}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MBI;
