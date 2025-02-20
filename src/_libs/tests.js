import Image from "next/image";
import { Enneagrama } from "@/app/[lang]/components/Enneagrama";
import { PAEIDescription } from "@/app/[lang]/components/PAEI/PAEIDescription";
import { PAEI } from "@/app/[lang]/components/PAEI";
import { IPI } from "@/app/[lang]/components/IPI";
import enneagramImg from "/public/_assets/images/enneagram_img.png";
import robotLookImg2 from "/public/_assets/images/robot_img_2.png";
import borderSideCheck from "/public/_assets/images/borderSideCheck.png";
import paeiBorder from "/public/_assets/images/borders/paei_border.png";
import eneagramaBorder from "/public/_assets/images/borders/eneagrama_border.png";
import mbiBorder from "/public/_assets/images/borders/mbi_border.png";
import MBI from "@/app/[lang]/components/MBI";

export const tests = (lang) => {
  return [
    {
      label: lang.paei_page.title,
      type: "paei",
      description: "В основі методики лежить PAEI-концепція, згід...",
      banner: "paei_banner.png",
      development: false,
      page: {
        title: lang.paei_page.title,
        description: (
          <p className='text-[#262626] font-[400] leading-5 tracking-wide'>
            {lang.paei_page.description_1}{" "}
            <span className='font-semibold'>{lang.paei_page.description_2}</span>{" "}
            {lang.paei_page.description_3}{" "}
            <span className='font-semibold'>{lang.paei_page.description_4}</span>
            {lang.paei_page.description_5}{" "}
            <span className='font-semibold'>{lang.paei_page.description_6}</span>
          </p>
        ),
        children: (
          <section className='flex flex-col items-start gap-[20px] mb-[50px]'>
            <PAEIDescription lang={lang} />
            <div className='relative flex items-center gap-[27px] mt-[10px] md:mt-0 mb-[27px]'>
              <div className='py-[15px] px-[24px] max-w-[590px] rounded-[15px] border-0 border-[#347AEC] border-solid mobile:border-2'>
                <div className='text-[#262626] leading-[130%]'>
                  <p className='font-medium mb-[10px] leading-[20.8px]'>
                    {lang.paei_page.robot_hint_p}
                  </p>
                  <h3 className='font-bold'>{lang.paei_page.robot_hint_h3}</h3>
                </div>
                <Image
                  src={paeiBorder}
                  alt='check'
                  loading='lazy'
                  className='min-w-[640px] top-[0px] absolute left-[10px] -z-10 bg-[#F2F5F8] mobile:hidden'
                  width={640}
                />
              </div>
              <Image
                className='w-[269px] h-[269px] absolute -right-[270px] -top-[105px] mobile:hidden'
                src={robotLookImg2}
                alt={"robot look"}
                loading='lazy'
                width={269}
              />
            </div>
            <PAEI lang={lang} />
          </section>
        ),
      },
    },
    {
      label: lang.enneagram_page.title,
      type: "eneagrama",
      description: "Психологічна модель, що описує 9 глибинних...",
      banner: "enneagram_banner.png",
      development: false,
      page: {
        title: lang.enneagram_page.title,
        description: (
          <p className='font-medium leading-[130%]'>
            <span className='text-[#262626] font-[700]'>{lang.enneagram_page.title}</span>{" "}
            {lang.enneagram_page.description_1}
            <br /> {lang.enneagram_page.description_2} <br />
          </p>
        ),
        children: (
          <section>
            <div className='flex flex-col-reverse md:flex-row items-center gap-[27px] mb-[105px] mobile:items-start'>
              <Image
                className='hidden md:block w-[269px] h-[269px] absolute top-[310px] left-[382px] mobile:hidden'
                src={robotLookImg2}
                alt={"robot look"}
                loading='lazy'
              />
              <div className='relative flex -ml-[54px] mobile:-ml-0'>
                <div className='w-[269px] mobile:hidden' />
                <div className='md:w-[380px] relative py-[15px] md:px-[24px] w-[320px] rounded-[15px] mobile:w-full'>
                  <div className='text-[#262626] leading-[130%]'>
                    <p className='font-medium mb-[10px]'>{lang.enneagram_page.robot_hint_p}</p>
                    <h3 className='font-bold'>{lang.enneagram_page.robot_hint_h3}</h3>
                  </div>
                </div>
                <Image
                  className='min-w-[400px] absolute right-[0px] top-[0px] mobile:hidden'
                  src={eneagramaBorder}
                  alt={"eneagramaBorder"}
                  loading='lazy'
                />
              </div>
              <Image
                className='w-[250px] h-[250px] mobile:mx-auto'
                src={enneagramImg}
                alt={"enneagram look"}
                loading='lazy'
              />
            </div>
            <Enneagrama lang={lang} />
          </section>
        ),
      },
    },
    {
      label: lang.mbi_page.title,
      type: "mbi",
      description: "Тест MBI розроблений для оцінки рівня вигорання. В...",
      banner: "MBI_banner.svg",
      page: {
        title: lang.mbi_page.title + "123",
        description: (
          <p className='text-base text-[#262626] font-medium'>
            <span className='font-bold'>{lang.mbi_page.description_1}</span>
            {lang.mbi_page.description_2}
            <span className='font-bold'>{lang.mbi_page.description_3}</span>
            {lang.mbi_page.description_4}
            <span className='font-bold'>{lang.mbi_page.description_5}</span>
          </p>
        ),
        children: (
          <div>
            <div className='relative text-[#262626] max-w-[1050px]'>
              <Image
                src={mbiBorder}
                width={681}
                height={163}
                className='absolute top mobile:hidden'
                alt='mbi border'
              />
              <p className='font-medium text-base max-w-[600px] pt-[17px] pl-[20px] mobile:pl-0'>
                {lang.mbi_page.robot_hint_1}
                <span className='font-bold'>{lang.mbi_page.robot_hint_2}</span>
                {lang.mbi_page.robot_hint_3}
              </p>
              <p className='font-bold max-w-[600px] pl-[20px] pt-[20px] mobile:pl-0'>
                {lang.mbi_page.robot_hint_3}
              </p>
              <Image
                src={robotLookImg2}
                alt='robot'
                loading='lazy'
                width={236}
                height={236}
                className='absolute right-[190px] -top-[30px] mobile:hidden'
              />
            </div>
            <div className='mt-[48px]'>
              <div className='font-unbounded text-3xl text-[#262626] mobile:text-center'>
                {lang.mbi_page.answer_options}
              </div>
              <div className='flex gap-6 mt-[21px] mobile:flex-col mobile:gap-[14px] mobile:items-center'>
                <div className='flex flex-col gap-[14px]'>
                  <div className='flex gap-5'>
                    <div className='bg-white text-[17px] font-semibold leading-[130%] w-[259px] h-[49px] pt-[14px] pl-[19px] rounded-[5px] shadow-shadow-20'>
                      {lang.mbi_page.answers.never}
                    </div>
                    <div className='bg-white text-[#347AEC] text-[17px] font-unbounded font-bold leading-[130%] w-[56px] h-[49px] pt-[14px] pl-[21px] rounded-[5px] shadow-shadow-20'>
                      0
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <div className='bg-white text-[17px] font-semibold leading-[130%] w-[259px] h-[49px] pt-[14px] pl-[19px] rounded-[5px] shadow-shadow-20'>
                      {lang.mbi_page.answers.several_year}
                    </div>
                    <div className='bg-white text-[#347AEC] text-[17px] font-unbounded font-bold leading-[130%] w-[56px] h-[49px] pt-[14px] pl-[21px] rounded-[5px] shadow-shadow-20'>
                      1
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <div className='bg-white text-[17px] font-semibold leading-[130%] w-[259px] h-[49px] pt-[14px] pl-[19px] rounded-[5px] shadow-shadow-20'>
                      {lang.mbi_page.answers.once_month}
                    </div>
                    <div className='bg-white text-[#347AEC] text-[17px] font-unbounded font-bold leading-[130%] w-[56px] h-[49px] pt-[14px] pl-[21px] rounded-[5px] shadow-shadow-20'>
                      2
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <div className='bg-white text-[17px] font-semibold leading-[130%] w-[259px] h-[49px] pt-[14px] pl-[19px] rounded-[5px] shadow-shadow-20'>
                      {lang.mbi_page.answers.serveral_month}
                    </div>
                    <div className='bg-white text-[#347AEC] text-[17px] font-unbounded font-bold leading-[130%] w-[56px] h-[49px] pt-[14px] pl-[21px] rounded-[5px] shadow-shadow-20'>
                      3
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-[14px]'>
                  <div className='flex gap-5'>
                    <div className='bg-white text-[17px] font-semibold leading-[130%] w-[259px] h-[49px] pt-[14px] pl-[19px] rounded-[5px] shadow-shadow-20'>
                      {lang.mbi_page.answers.once_week}
                    </div>
                    <div className='bg-white text-[#347AEC] text-[17px] font-unbounded font-bold leading-[130%] w-[56px] h-[49px] pt-[14px] pl-[21px] rounded-[5px] shadow-shadow-20'>
                      4
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <div className='bg-white text-[16px] font-semibold leading-[130%] w-[259px] h-[49px] pt-[14px] pl-[19px] rounded-[5px] shadow-shadow-20'>
                      {lang.mbi_page.answers.several_week}
                    </div>
                    <div className='bg-white text-[#347AEC] text-[17px] font-unbounded font-bold leading-[130%] w-[56px] h-[49px] pt-[14px] pl-[21px] rounded-[5px] shadow-shadow-20'>
                      5
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <div className='bg-white text-[17px] font-semibold leading-[130%] w-[259px] h-[49px] pt-[14px] pl-[19px] rounded-[5px] shadow-shadow-20'>
                      {lang.mbi_page.answers.every_day}
                    </div>
                    <div className='bg-white text-[#347AEC] text-[17px] font-unbounded font-bold leading-[130%] w-[56px] h-[49px] pt-[14px] pl-[21px] rounded-[5px] shadow-shadow-20'>
                      6
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[37px]'>
              <MBI lang={lang} />
            </div>
          </div>
        ),
      },
      development: false,
      stretchBanner: true,
    },
    {
      label: lang.ipi_page.title,
      type: "ipi",
      description: "Тест дозволяє виявити, наскільки ви відкриті до нови...",
      banner: "ipi_banner.png",
      stretchBanner: true,
      development: false,
      page: {
        title: lang.ipi_page.title,
        description: (
          <p className='text-[#262626] font-[400] leading-5 tracking-wide'>
            {lang.ipi_page.description}
          </p>
        ),
        children: (
          <section className='flex flex-col items-start gap-[20px] mb-[50px]'>
            <div className='flex items-center gap-[27px] mt-[10px] md:mt-0'>
              <div className='relative border-solid border-[3px] border-[#347AEC] py-[15px] px-[24px] max-w-[595px] rounded-[15px]'>
                <div className='text-[#262626] leading-[130%]'>
                  <p className='font-[500] mb-[10px]'>
                    {lang.ipi_page.robot_hint_p_1}
                    <span className='font-semibold'>{lang.ipi_page.robot_hint_h3}</span>
                    <span className='font-[500] mb-[10px]'>{lang.ipi_page.robot_hint_p_2}</span>
                  </p>
                  <p className='mb-[10px]'>
                    <p>
                      <span className='text-[#347AEC] font-black'>3</span> - {lang.ipi_page.point_3}
                    </p>
                    <p>
                      <span className='text-[#347AEC] font-black'>2</span> - {lang.ipi_page.point_2}
                    </p>
                    <p>
                      <span className='text-[#347AEC] font-black'>1</span> - {lang.ipi_page.point_1}
                    </p>
                    <p>
                      <span className='text-[#347AEC] font-black'>0</span> - {lang.ipi_page.point_0}
                    </p>
                  </p>
                  <p>
                    <span className='font-semibold'>{lang.ipi_page.description_2}</span>
                  </p>
                </div>
              </div>
              <div className='relative'>
                <Image
                  src={borderSideCheck}
                  alt='check'
                  loading='lazy'
                  className='w-[58px] h-[74px] top-[100px] absolute -left-[30px] bg-[#F2F5F8] mobile:hidden'
                />
                <Image
                  className='w-[244px] h-[244px] mobile:hidden'
                  src={robotLookImg2}
                  alt={"robot look"}
                  loading='lazy'
                />
              </div>
            </div>
            <IPI lang={lang} />
          </section>
        ),
      },
    },
    {
      label: "MBTI",
      description: "Призначений для психологічної оцінки характе...",
      banner: "MBTI_banner.svg",
      development: true,
      stretchBanner: true,
    },
    {
      label: "Емоційний інтелект",
      description: "Методика Н. Холла призначена для виявлен...",
      banner: "EmotionalIntelligence_banner.svg",
      stretchBanner: true,
      development: true,
    },
    {
      label: "Духовний інтелект",
      description: "Тест на духовний інтелект допоможе зрозуміти, як ви...",
      banner: "SpiritualIntelligence_banner.svg",
      development: true,
      stretchBanner: true,
    },
    {
      label: "New Test",
      description: "",
      banner: "newTest_banner.svg",
      development: true,
      stretchBanner: true,
    },
  ];
};
