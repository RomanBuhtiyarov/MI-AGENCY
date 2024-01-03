"use client";
import Image from "next/image";
import MainButton from "../../UI/Buttons/MainButton";
import { useState, useEffect } from "react";
import { paei_results } from "@/_libs/paei_results";
import ky from "ky";
export const PAEIResult = ({ answers, lang }) => {
  const localizedResults = paei_results(lang);
  const [isSaved, setIsSaved] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  function calculateTotalScores(data) {
    // Инициализируем объект для хранения сумм баллов по каждой букве
    const totalScores = { I: 0, E: 0, P: 0, A: 0 };

    // Проходим по каждому элементу массива
    data.forEach((item) => {
      // Проходим по свойствам объекта (id_1, id_2 и т.д.)
      Object.keys(item).forEach((key) => {
        // Получаем массив с баллами по буквам из текущего свойства
        const scores = item[key];

        // Проходим по каждому элементу массива с баллами
        scores.forEach((score) => {
          // Увеличиваем сумму баллов по текущей букве
          totalScores[score.letter] += score.number;
        });
      });
    });

    return totalScores;
  }

  function formatResult(results) {
    const formattedString = ["P", "A", "E", "I"]
      .map((letter) => {
        const score = results[letter];

        if (score > 25 && score <= 40) {
          return letter.toUpperCase();
        } else if (score >= 20 && score <= 25) {
          return letter.toLowerCase();
        } else {
          return "-";
        }
      })
      .join("");

    return formattedString;
  }

  const scores = calculateTotalScores(answers);
  const scoresArray = Object.entries(scores);

  // Инициализируем переменные для максимальной буквы и значения
  let maxLetter = "";
  let maxScore = 0;
  // Проходим по массиву
  for (const [letter, score] of scoresArray) {
    // Сравниваем текущее значение с максимальным
    if (score > maxScore) {
      maxScore = score;
      maxLetter = letter;
    }
  }

  const finalResult = formatResult(scores);

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const data = {
      test: 2,
      user: userData.id,
      type: finalResult,
      description: "",
    };
    try {
      await ky
        .post(`https://psymi.com.ua/${lang.backend_locale}/api/test-results/`, {
          json: data,
        })
        .json();
      setIsSaved(!isSaved);
    } catch (error) {
      // Set the error message in the component's state
      setMessageError(error.message);
    }
  };

  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageModule = await import(
          `/public/_assets/images/paei_answers/${maxLetter}.png`
        );
        setImageSrc(imageModule?.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
    if (maxLetter) {
      loadImage();
    }
  }, [maxLetter]);

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        router.push(`/${lang.locale}/`);
        return;
      }

      try {
        // Use ky to make a request with the auth token in the headers
        const response = await ky
          .get(
            `https://psymi.com.ua/${lang.backend_locale}/api/auth/users/me`,
            {
              headers: {
                Authorization: `Token ${authToken}`,
                "Content-Type": "application/json",
              },
            }
          )
          .json();
        // Set the user data in the component state
        setUserData(response);
      } catch (error) {
        setError("An error occurred while fetching user data");
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

  // Render logic based on the fetched user data or error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center md:flex-row justify-between">
      <div>
        {imageSrc && (
          <Image
            className="mb-[26px] md:mb-0 radius-[15px] md:mr-[30px]"
            src={imageSrc}
            alt={"robot look"}
            loading="lazy"
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="md:w-[520px] md:h-[460px]">
        <h1 className="text-center text-[22px] md:text-[30px] font-unbounded mb-[10px]">
          {lang.header} {finalResult}
        </h1>

        {/* Используем результаты теста для отображения соответствующих описаний */}
        <p className="mt-[10px] mb-[30px] font-medium">
          {
            localizedResults.find((desc) => desc.letter === "P")[
              finalResult.includes("P")
                ? "description_uppercase"
                : finalResult.includes("p")
                ? "description_lowercase"
                : "description_noLetter"
            ]
          }
        </p>
        <p className="mb-[30px] font-medium">
          {
            localizedResults.find((desc) => desc.letter === "A")[
              finalResult.includes("A")
                ? "description_uppercase"
                : finalResult.includes("a")
                ? "description_lowercase"
                : "description_noLetter"
            ]
          }
        </p>
        <p className="mb-[30px] font-medium">
          {
            localizedResults.find((desc) => desc.letter === "E")[
              finalResult.includes("E")
                ? "description_uppercase"
                : finalResult.includes("e")
                ? "description_lowercase"
                : "description_noLetter"
            ]
          }
        </p>
        <p className="mb-[30px] font-medium">
          {
            localizedResults.find((desc) => desc.letter === "I")[
              finalResult.includes("I")
                ? "description_uppercase"
                : finalResult.includes("i")
                ? "description_lowercase"
                : "description_noLetter"
            ]
          }
        </p>

        <div className="text-center mb-[20px] md:mb-0">
          <MainButton
            className="save-button w-[255px] h-[40px] text-[16px] px-[10px] !important"
            label={lang.paei_result.save_button}
            onClick={handleSubmit}
          />
          {isSaved && (
            <p className="mt-[10px] text-[10px] font-medium">
              {lang.paei_result.saved_result_msg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
