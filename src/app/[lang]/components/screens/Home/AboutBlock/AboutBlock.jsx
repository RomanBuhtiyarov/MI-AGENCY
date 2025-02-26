import Image from "next/image";
import slideImage from "/public/_assets/images/home/slide.png";

const AboutBlock = ({ lang }) => {
  return (
    <section className='mt-[33px]'>
      <div className='uppercase text-[40px] leading-[54px] font-bold text-[#262626] mobile:text-[30px] mobile:leading-[40.5px]'>
        {lang.about_block.title}
      </div>
      <div className='flex gap-[21px] mt-[14px] mobile:block'>
        <div className='max-w-[465px]'>
          <div className='text-justify text-[17px] bg-white rounded-[13px] pt-[11px] pl-[16px] pr-[20px] pb-[20px] text-[#262626] leading-[22.95px] font-medium'>
            <span className='text-[#347AEC] text-[17px] font-bold'>PSY MI</span>
            {lang.about_block.description}
          </div>
          <Image src={slideImage.src} alt='slide' width={466} height={180} className='mt-[15px]' />
        </div>

        <div className='mobile:flex mobile:flex-col mobile:items-center mobile:mt-[23px]'>
          <div className='bg-white rounded-[13px] text-[#262626] max-w-[435px] py-[16px] px-[18.5px]'>
            <div className='uppercase font-unbounded font-bold leading-[27px] text-[20px]'>
              {lang.about_block.title_1}
            </div>
            <p className='mt-[5px] font-medium text-[17px] leading-[22.95px] text-justify'>
              {lang.about_block.description_1}
            </p>
          </div>

          <div className='mt-[12px] bg-white rounded-[13px] text-[#262626] max-w-[435px] py-[13px] px-[18.5px]'>
            <div className='uppercase font-unbounded font-bold leading-[27px] text-[20px]'>
              {lang.about_block.title_2}
            </div>
            <p className='mt-[5px] font-medium text-[17px] leading-[22.95px] text-justify'>
              {lang.about_block.description_2}
            </p>
          </div>

          <div className='mt-[12px] bg-white rounded-[13px] text-[#262626] max-w-[435px] py-[13px] px-[18.5px]'>
            <div className='uppercase font-unbounded font-bold leading-[27px] text-[20px]'>
              {lang.about_block.title_3}
            </div>
            <p className='mt-[5px] font-medium text-[17px] leading-[22.95px] text-justify'>
              {lang.about_block.description_3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
