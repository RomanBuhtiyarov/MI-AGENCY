"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const GreatingBlock = ({ lang }) => {
  const router = useRouter();
  const [imageRobotSrc, setRobotImageSrc] = useState(null);
  const [imageLogoSrc, setLogoImageSrc] = useState(null);
  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageRobotModule = await import(`/public/_assets/images/greating/greating_robot.png`);
        setRobotImageSrc(imageRobotModule?.default);
        const imageLogoModule = await import(`/public/_assets/images/PSYMI_logo.svg`);
        setLogoImageSrc(imageLogoModule?.default);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImage();
  }, []);

  return (
    <section className='flex items-end mobile:mt-[28px]'>
      <div className='max-w-[647px]'>
        {imageLogoSrc && (
          <Image
            className='relative z-10 max-w-[547px] max-h-[103px] w-full mobile:w-[360px] mobile:mx-auto'
            src={imageLogoSrc}
            alt={"logo"}
            width={547}
            height={103}
          />
        )}
        <div className='mt-[27px]'>
          <p className='text-[#262626] text-3xl font-bold uppercase leading-[40.5px] mobile:text-[20px] mobile:leading-[27px]'>
            {lang.greatings_block.title}
          </p>
        </div>
        <div className=' bg-white mt-[18px] max-w-[630px] py-[14px] pl-[21px] pr-[11px] rounded-[13px] font-unbounded text-[17px] leading-[22.95px]'>
          {lang.greatings_block.description}
        </div>
        <div className='mt-[18.5px] flex gap-5 mobile:justify-between'>
          <button
            className='bg-white rounded-[10px] text-[#347AEC] font-semibold uppercase flex items-center px-[22px] py-[14px]'
            onClick={() => router.push(`pages/sign-up`)}
          >
            {lang.greatings_block.registration}
          </button>
          <button
            className='bg-white rounded-[10px] text-[#262626] font-semibold uppercase flex items-center px-[16.5px] py-[14px] border-solid border-[3px] border-[#347AEC] '
            onClick={() => router.push(`get-tested`)}
          >
            {lang.greatings_block.take_test}
          </button>
        </div>
      </div>
      <div>
        {imageRobotSrc && (
          <Image
            className='relative z-10 mobile:hidden'
            src={imageRobotSrc}
            alt={"hello world"}
            width={254}
            height={290}
          />
        )}
      </div>
    </section>
  );
};

export default GreatingBlock;
