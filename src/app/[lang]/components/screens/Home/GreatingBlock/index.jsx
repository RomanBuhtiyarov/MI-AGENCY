"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const GreatingBlock = ({ lang }) => {
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageModule = await import(`/public/_assets/images/greating/greating.png`);
        setImageSrc(imageModule?.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, []);

  return (
    <section className='flex flex-col md:flex-row items-center md:items-start gap-[40px] pt-[0px] md:pt-[60px]'>
      <div className='relative'>
        {imageSrc && (
          <Image
            className='relative z-10'
            src={imageSrc}
            alt={"hello world"}
            width={156}
            height={207}
          />
        )}
        <div className='absolute top-[45px] left-0 w-[150px] h-[150px] bg-gradient-to-r from-[#347AEC] to-[#6764E7] rounded-[50%]'></div>
      </div>
      <div className='md:border-solid md:border-4 md:border-[#4485ED] rounded-[15px] md:pt-[16px] md:px-[31px] md:pb-[19px]'>
        <div className='max-w-[570px] w-full flex flex-col gap-[10px]'>
          <p className='text-[#4485ED] font-[500] text-[18px]'>{lang.greatings_block.greating}</p>
          <p className='font-[500] leading-5 tracking-normal'>
            {lang.greatings_block.description_1}
          </p>
          <p className='font-[500] leading-5 tracking-normal'>
            {lang.greatings_block.description_2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GreatingBlock;
