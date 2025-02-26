"use client";

import { useState, useRef, useEffect } from "react";
import MainButton from "../../UI/Buttons/MainButton";

export const PAEIDescription = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState("auto");
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  useEffect(() => {
    // Обновляем высоту при загрузке компонента
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, []); // Пустой массив зависимостей означает, что useEffect выполняется только один раз при монтировании

  return (
    <div className='max-w-[595px] w-full flex flex-row-reverse justify-between relative mt-[35px]'>
      <button className='absolute right-0 top-0 mobile:-top-6' onClick={toggleAccordion}>
        {isOpen ? (
          <MainButton
            className='text-[14px] md:text-[16px]'
            label={lang.paei_description.hide_btn}
          />
        ) : (
          <MainButton
            className='text-[14px] md:text-[16px]'
            label={lang.paei_description.show_btn}
          />
        )}
        
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`transition-max-height duration-300 ease-in-out overflow-hidden flex flex-col justify-between`}
      >
        <div className='flex items-start gap-[15px] mb-[30px]'>
          <p className='text-center min-w-[80px] md:min-w-[100px] font-unbounded bg-gradient-to-r from-[#347AEC] to-[#6764E7] inline-block text-transparent bg-clip-text text-7xl md:text-8xl font-semibold'>
            P
          </p>
          <div className='max-w-[456px] pt-[10px]'>
            <h5 className='font-unbounded text-[#262626] uppercase font-[500]'>
              {lang.paei_description.p_header}
            </h5>
            <p className='text-[#262626] font-[500] leading-6 mt-[10px]'>
              {lang.paei_description.p_description}
            </p>
          </div>
        </div>
        <div className='flex items-start gap-[15px] mb-[30px]'>
          <p className='text-center min-w-[80px] md:min-w-[100px] font-unbounded bg-gradient-to-r from-[#347AEC] to-[#6764E7] inline-block text-transparent bg-clip-text text-7xl md:text-8xl font-semibold'>
            А
          </p>
          <div className='max-w-[456px] pt-[10px]'>
            <h5 className='font-unbounded text-[#262626] uppercase font-[500]'>
              {lang.paei_description.a_header}
            </h5>
            <p className='text-[#262626] font-[500] leading-6 mt-[10px]'>
              {lang.paei_description.a_description}
            </p>
          </div>
        </div>
        <div className='flex items-start gap-[15px] mb-[30px]'>
          <p className='text-center min-w-[80px] md:min-w-[100px] font-unbounded bg-gradient-to-r from-[#347AEC] to-[#6764E7] inline-block text-transparent bg-clip-text text-7xl md:text-8xl font-semibold'>
            E
          </p>
          <div className='max-w-[456px] pt-[10px]'>
            <h5 className='font-unbounded text-[#262626] uppercase font-[500]'>
              {lang.paei_description.e_header}
            </h5>
            <p className='text-[#262626] font-[500] leading-6 mt-[10px]'>
              {lang.paei_description.e_description}
            </p>
          </div>
        </div>
        <div className='flex items-start gap-[15px] mb-[30px]'>
          <p className='text-center min-w-[80px] md:min-w-[100px] font-unbounded bg-gradient-to-r from-[#347AEC] to-[#6764E7] inline-block text-transparent bg-clip-text text-7xl md:text-8xl font-semibold'>
            I
          </p>
          <div className='max-w-[456px] pt-[10px]'>
            <h5 className='font-unbounded text-[#262626] uppercase font-[500]'>
              {lang.paei_description.i_header}
            </h5>
            <p className='text-[#262626] font-[500] leading-6 mt-[10px]'>
              {lang.paei_description.i_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
