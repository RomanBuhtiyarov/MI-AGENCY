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
        const imageRobotModule = await import(`/public/_assets/images/greating/greating_robot.svg`);
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
    <section className='flex mt-[81px] items-end'>
      <div className='w-[547px]'>
        {imageLogoSrc && (
          <Image
            className='relative z-10'
            src={imageLogoSrc}
            alt={"logo"}
            width={547}
            height={103}
          />
        )}
        <div className='mt-[27px]'>
          <p className='text-[#262626] text-3xl font-bold uppercase leading-[40.5px]'>
            {lang.greatings_block.title}
          </p>
        </div>
        <div className='cursor-pointer bg-white mt-[18px] w-[487px] py-[14px] pl-[21px] pr-[11px] rounded-[13px] font-unbounded text-[17px] leading-[22.95px]'>
          {lang.greatings_block.description}
        </div>
        <div className='mt-[18.5px] flex gap-5'>
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
            className='relative z-10'
            src={imageRobotSrc}
            alt={"hello world"}
            width={176}
            height={264}
          />
        )}
      </div>
    </section>
  );
};

export default GreatingBlock;
