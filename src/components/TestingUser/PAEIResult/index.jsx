import Image from "next/image";
import MainButton from "@/components/UI/Buttons/MainButton";
import { useState } from "react";
import paei_results from "@/_libs/paei_results";

export const PAEIResult = ({ answers }) => {
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
  console.log("Scores:", scores);
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
  // Находим максимальное значение
  console.log(maxLetter + ": " + maxScore);

  const finalResult = formatResult(scores);
  console.log("Final Result: ", finalResult);

  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className=" flex justify-between">
      <div>
        <Image
          className=" radius-[15px] mr-[30px]"
          src={`/_assets/images/paei_answers/${maxLetter}.png`}
          alt={"robot look"}
          loading="lazy"
          width={300}
          height={300}
        />
      </div>
      <div className="w-[520px] h-[460px] ">
        <h1 className="text-[30px] font-unbounded mb-[10px]">
          ВАШ PAEI: {finalResult}
        </h1>

        {/* Используем результаты теста для отображения соответствующих описаний */}
        <p className="mt-[10px] mb-[30px] font-medium">
          {
            paei_results.find((desc) => desc.letter === "P")[
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
            paei_results.find((desc) => desc.letter === "A")[
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
            paei_results.find((desc) => desc.letter === "E")[
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
            paei_results.find((desc) => desc.letter === "I")[
              finalResult.includes("I")
                ? "description_uppercase"
                : finalResult.includes("i")
                ? "description_lowercase"
                : "description_noLetter"
            ]
          }
        </p>

        <div>
          <MainButton
            className="save-button w-[255px] h-[40px] text-[16px] px-[10px] !important"
            label="Зберегти результат"
            onClick={() => setIsSaved(!isSaved)}
          />
          {isSaved && (
            <p className="mt-[10px] text-[10px] font-medium">
              Результат збережено в особистому кабінеті
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
