import Image from "next/image";
import MainButton from "../../UI/Buttons/MainButton";
import { useEffect, useState } from "react";
import { enneagrama_results } from "@/_libs/enneagrama_results";
export const EnneagramaResult = ({ answers, lang }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const localizedResults = enneagrama_results(lang);
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
  const resultType = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );
  const enneagramResultData = localizedResults.find(
    (result) => result.type === parseInt(resultType)
  );

  if (!enneagramResultData) {
    return null;
  }

  const {
    type,
    title,
    description,
    lifeCreed,
    keyword,
    careerOrientations,
    possibleProfessions,
  } = enneagramResultData;

  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageModule = await import(
          `/public/_assets/images/enneagrama_answers/${enneagramResultData.type}.png`
        );
        setImageSrc(imageModule.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    if (enneagramResultData) {
      loadImage();
    }
  }, [enneagramResultData]);

  return (
    <div className="mb-[50px] mt-[20px] flex flex-col items-center md:items-start md:flex-row justify-between">
      <div>
        {imageSrc && (
          <Image
            className="mb-[26px] md:mb-0 radius-[15px]"
            src={imageSrc}
            alt={"enneagram result"}
            loading="lazy"
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="md:w-[520px] md:h-[460px]">
        <h1 className="text-center md:text-left text-[22px] md:text-[30px] font-unbounded mb-[10px]">
          {title}
        </h1>
        <p className="mx-auto md:mx-0 w-[60px] text-center bg-[#347AEC] text-[#fff] rounded-[5px] py-[3px] text-center">
          {resultType} {lang.enneagram_page.n_type}
        </p>
        <p className="my-[20px] font-medium">{description}</p>
        <p className="mb-[20px] font-medium">
          <span className="text-[#347AEC] font-semibold">
            {lang.enneagram_page.lifeCreed}
          </span>{" "}
          {lifeCreed}
        </p>
        <p className="mb-[20px] font-medium">
          <span className="text-[#347AEC] font-semibold">
            {lang.enneagram_page.keyword}
          </span>{" "}
          {keyword}
        </p>
        <p className="mb-[20px] font-medium">
          <span className="text-[#347AEC] font-semibold">
            {lang.enneagram_page.careerOrientations}
          </span>
          {careerOrientations}
        </p>
        <p className="mb-[20px] font-medium">
          <span className="text-[#347AEC] font-semibold font-semibold">
            {lang.enneagram_page.possibleProfessions}
          </span>{" "}
          {possibleProfessions}
        </p>
        <div className="text-center md:text-left mb-[20px] md:mb-0">
          <MainButton
            className="save-button w-[255px] h-[40px] text-[16px] px-[10px] !important"
            label={lang.enneagram_page.save_button}
            onClick={() => setIsSaved(!isSaved)}
          />
          {isSaved && (
            <p className="mt-[10px] text-[10px] font-medium">
              {lang.enneagram_page.saved_result_msg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
