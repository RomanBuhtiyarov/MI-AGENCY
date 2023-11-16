import Image from "next/image";
import MainButton from "@/components/UI/Buttons/MainButton";
import { useState } from "react";
import enneagrama_results from "@/_libs/enneagrama_results";
export const EnneagramaResult = ({ answers }) => {
  const [isSaved, setIsSaved] = useState(false);
  const types = {
    1: [3, 15, 16, 36, 37, 49, 58, 59, 60, 69],
    2: [6, 7, 8, 18, 19, 39, 40, 51, 62, 82],
    3: [4, 5, 17, 38, 50, 61, 70, 71, 81, 83],
    4: [9, 10, 20, 41, 52, 63, 64, 72, 73, 86],
    5: [1, 2, 13, 14, 35, 48, 68, 77, 84, 88],
    6: [11, 12, 21, 22, 42, 43, 53, 65, 74, 75],
    7: [23, 24, 29, 30, 44, 45, 54, 55, 66, 76],
    8: [25, 26, 31, 32, 46, 56, 67, 78, 85, 89],
    9: [27, 28, 33, 34, 47, 57, 79, 80, 87, 90],
  };
  let scores = {};
  for (let type in types) {
    scores[type] = types[type].reduce(
      (sum, question) => sum + (answers[question - 1] === "так" ? 1 : 0),
      0
    );
  }
  console.log(
    Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b))
  );
  const resultType = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const enneagramResultData = enneagrama_results.find(
    (result) => result.type === parseInt(resultType)
  );

  if (!enneagramResultData) {
    return null;
  }

  const {
    img,
    title,
    description,
    lifeCreed,
    keyword,
    careerOrientations,
    possibleProfessions,
  } = enneagramResultData;

  return (
    <div className="mt-[40px] flex justify-between">
      <div>
        <Image
          className=" radius-[15px]"
          src={`/_assets/images/enneagrama_answers/${img}`}
          alt={"robot look"}
          loading="lazy"
          width={300}
          height={300}
        />
      </div>
      <div className="w-[520px] h-[460px] ">
        <h1 className="text-[30px] font-unbounded mb-[10px]">{title}</h1>
        <span className="bg-[#347AEC] text-[#fff] rounded-[5px] px-[10px]">
          {resultType} тип
        </span>
        <p className="my-[20px] font-medium">{description}</p>
        <p className="mb-[20px] font-medium">
          <span className="text-[#347AEC] font-semibold">Життєве кредо:</span>{" "}
          {lifeCreed}
        </p>
        <p className="mb-[20px] font-medium">
          <span className="text-[#347AEC] font-semibold">Ключове слово:</span>{" "}
          {keyword}
        </p>
        <p className="mb-[20px] font-medium">
          <span className="text-[#347AEC] font-semibold">
            Кар'єрні орієнтації:
          </span>
          {careerOrientations}
        </p>
        <p className="mb-[20px] font-medium">
          <span className="text-[#347AEC] font-semibold font-semibold">
            Можливі професії:
          </span>{" "}
          {possibleProfessions}
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
