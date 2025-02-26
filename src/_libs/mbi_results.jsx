import React from "react";
import lowLevelImage from "/public/_assets/images/mbi_answers/low.png";
import mediumLevelImage from "/public/_assets/images/mbi_answers/medium.png";
import highLevelImage from "/public/_assets/images/mbi_answers/high.png";
import Image from "next/image";

export const mbi_results = ({ lang, emotional_burnout, alienation, personal_accomplishments }) => {
  let emotional_burnoutKey = "";
  let imageSrc = "";
  if (emotional_burnout <= 16) {
    emotional_burnoutKey = "low";
    imageSrc = lowLevelImage;
  } else if (emotional_burnout > 27) {
    emotional_burnoutKey = "high";
    imageSrc = highLevelImage;
  } else {
    emotional_burnoutKey = "medium";
    imageSrc = mediumLevelImage;
  }
  let alienationKey = alienation <= 7 ? "low" : alienation >= 13 ? "high" : "medium";
  let personal_accomplishmentsKey =
    personal_accomplishments <= 6 ? "low" : personal_accomplishments >= 33 ? "high" : "medium";

  return [
    {
      level: emotional_burnoutKey,
      max: 54,
      value: emotional_burnout,
      title: (
        <div className='font-unbounded text-3xl'>{lang.mbi_results.emotional_burnout.title}</div>
      ),
      content: (
        <div className='max-w-full'>
          <div className='mt-[14px] leading-[20.8px] text-justify'>
            <span className='font-bold text-justify'>{lang.mbi_results.emotional_burnout.description_1}</span>
            {lang.mbi_results.emotional_burnout.description_2}
          </div>
          <div className='flex gap-[41px] mt-[23px] mobile:block'>
            <Image
              src={imageSrc}
              width={254}
              height={279}
              alt='robot'
              className='w-[254px] h-[279px] mobile:w-full mobile:h-[391px]'
            />
            <div className='max-w-full'>
              <div className='text-[25px] leading-[130%] font-bold'>
                {lang.mbi_results.emotional_burnout[emotional_burnoutKey].title}
                <span className='uppercase text-[#347AEC]'>
                  {lang.mbi_results.emotional_burnout[emotional_burnoutKey].level}
                </span>
              </div>
              <div className='mt-[10px] text-lg leading-[23.4px] text-justify'>
                <div>{lang.mbi_results.emotional_burnout[emotional_burnoutKey].description_1}</div>
                <div className='mt-[16px] '>
                  {lang.mbi_results.emotional_burnout[emotional_burnoutKey].description_2}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      level: alienationKey,
      max: 30,
      value: alienation,
      title: <div className='font-unbounded text-3xl'>{lang.mbi_results.alienation.title}</div>,
      content: (
        <div className='max-w-full'>
          <div className='mt-[14px] leading-[20.8px] text-justify'>
            <span className='font-bold'>{lang.mbi_results.alienation.description_1}</span>
            {lang.mbi_results.alienation.description_2}
          </div>
          <div className='text-[25px] leading-[130%] font-bold mt-4'>
            {lang.mbi_results.alienation[alienationKey].title}
            <span className='uppercase text-[#347AEC]'>
              {lang.mbi_results.alienation[alienationKey].level}
            </span>
          </div>
          <div className='text-lg leading-[23.4px] mt-[10px] text-justify'>
            {lang.mbi_results.alienation[alienationKey].description}
          </div>
        </div>
      ),
    },
    {
      level: personal_accomplishmentsKey,
      max: 48,
      value: personal_accomplishments,
      title: (
        <div className='font-unbounded text-3xl'>
          {lang.mbi_results.personal_accomplishments.title}
        </div>
      ),
      content: (
        <div className='max-w-full'>
          <div className='mt-[14px] leading-[20.8px] text-justify'>
            <span className='font-bold'>
              {lang.mbi_results.personal_accomplishments.description_1}
            </span>
            {lang.mbi_results.personal_accomplishments.description_2}
          </div>
          <div className='text-[25px] leading-[130%] font-bold max-w-full mt-4'>
            {lang.mbi_results.personal_accomplishments[personal_accomplishmentsKey].title}
            <span className='uppercase text-[#347AEC]'>
              {lang.mbi_results.personal_accomplishments[personal_accomplishmentsKey].level}
            </span>
          </div>
          <div className='text-lg leading-[23.4px] mt-[10px] max-w-full text-justify'>
            {lang.mbi_results.personal_accomplishments[personal_accomplishmentsKey].description}
          </div>
          {lang.mbi_results.personal_accomplishments[personal_accomplishmentsKey].additional && (
            <p className='text-[#347AEC] italic font-bold mt-[14px] leading-[23.4px] text-justify'>
              {lang.mbi_results.personal_accomplishments[personal_accomplishmentsKey].additional}
            </p>
          )}
        </div>
      ),
    },
  ];
};
