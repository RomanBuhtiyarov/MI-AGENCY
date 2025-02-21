"use client";

import { mbi_results } from "@/_libs/mbi_results";
import React, { useState, useMemo, useEffect } from "react";
import arrowRight from "/public/_assets/images/arrows/arrowRight.svg";
import { cn } from "@/_helpers/cn";
import MainButton from "../../UI/Buttons/MainButton";
import axios from "axios";
import { Modal } from "antd";

const ProgressBar = ({ max, value, lang, level }) => {
  return (
    <div className='flex gap-[25px] mobile:block '>
      <div className='mt-[9px] max-w-[546px] mobile:flex-1 w-full flex-1'>
        <div className='flex justify-between px-[7px] mb-[5px] text-[#5D5D5D] font-semibold'>
          <div>{value}</div>
          <div>{max}</div>
        </div>
        <div className='flex items-center gap-[11px] flex-1'>
          <div className='bg-white rounded-[9px] p-[10px] flex-1 w-full'>
            <div className='flex-start rounded-[29px] w-full max-w-[521px] h-[16px] overflow-hidden bg-[#EFF3FB] font-monserrat text-xs font-[600] relative'>
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
      <div className='flex flex-col items-center mobile:mt-[10px]'>
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
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const toggleExpanded = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const data = {
      test: 1,
      user: userData.id,
      type: enneagramResultData.type.toString(),
      description: "",
    };
    try {
      await axios.post(`https://psymi.com.ua/${lang.backend_locale}/api/test-results/`, data);
      setIsSaved(!isSaved);
      localStorage.removeItem("mbi_currentPage");
      localStorage.removeItem("mbi_userAnswers");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("authToken");
      !authToken ? setIsAuth(false) : setIsAuth(true);

      try {
        // Use ky to make a request with the auth token in the headers
        const response = await axios.get(
          `https://psymi.com.ua/${lang.backend_locale}/api/auth/users/me`,
          {
            headers: {
              Authorization: `Token ${authToken}`,
              "Content-Type": "application/json",
            },
          },
        );
        // Set the user data in the component state
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const authModal = () => {
    Modal.error({
      title: lang.test_page.auth_modal.title,
      content: (
        <div className='flex flex-col items-center'>
          <p className='text-left text-[16px] mb-[10px] font-unbounded'>
            {lang.test_page.auth_modal.description}
          </p>
          <MainButton
            onClick={() => {
              window.location.href = `/${lang.locale}/pages/sign-up/`;
            }}
            label={lang.test_page.auth_modal.button_label}
          />
        </div>
      ),
      closable: true,
      centered: true,
      footer: null,
    });
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
          <div
            key={index}
            className={cn("mb-[10px]", {
              "mobile:mb-[70px]": index + 1 === results.length,
            })}
          >
            <div>{title}</div>
            <ProgressBar max={max} value={value} lang={lang} level={level} />
            {index !== 0 && (
              <div
                className={cn(
                  "cursor-pointer font-unbounded text-xs font-medium text-[#262626] mt-[10px] flex items-center gap-2 duration-300",
                  {
                    "text-[#347AEC] text-[17px]": expanded[index],
                  },
                )}
                onClick={() => toggleExpanded(index)}
              >
                {lang.ipi_results.more}
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
            )}
            {(expanded[index] || index === 0) && content}
          </div>
        );
      })}
      <div className='text-center mx-auto mb-[20px] md:mb-0 mt-[60px]'>
        <MainButton
          className='save-button w-[271px] h-[40px] text-[16px] px-[10px] !important mb-[40px]'
          label={isSaved ? lang.mbi_results.saved_results : lang.enneagram_page.save_button}
          onClick={isAuth ? handleSubmit : authModal}
        />
        {isSaved && (
          <p className='mt-[10px] text-[10px] font-medium'>
            {lang.enneagram_page.saved_result_msg}
          </p>
        )}
      </div>
    </div>
  );
};

export default MBIResult;
