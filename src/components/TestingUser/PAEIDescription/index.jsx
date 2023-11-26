"use client";

import { useState, useRef, useEffect } from "react";

export const PAEIDescription = () => {
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
    <div className="flex flex-row-reverse justify-between relative">
      <button className="absolute" onClick={toggleAccordion}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        )}
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`transition-max-height duration-300 ease-in-out overflow-hidden `}
      >
        <div className="flex items-start gap-[15px] mb-[30px]">
          <p className="w-[100px] font-unbounded bg-gradient-to-r from-[#347AEC] to-[#6764E7] inline-block text-transparent bg-clip-text text-8xl font-semibold">
            P
          </p>
          <div className="max-w-[456px] pt-[10px]">
            <h5 className="font-unbounded text-[#262626] uppercase font-[500]">
              ЩО ПОТРІБНО ЗРОБИТИ?
            </h5>
            <p className="text-[#262626] font-[500] leading-6 mt-[10px]">
              Ця функція менеджменту відповідає задоволення потреб клієнтів. Від
              цього залежить результативність компанії у короткостроковій
              перспективі.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[15px] mb-[30px]">
          <p className="w-[100px] font-unbounded bg-gradient-to-r from-[#347AEC] to-[#6764E7] inline-block text-transparent bg-clip-text text-8xl font-semibold">
            А
          </p>
          <div className="max-w-[456px] pt-[10px]">
            <h5 className="font-unbounded text-[#262626] uppercase font-[500]">
              ЯК ЦЕ ПОТРІБНО ЗРОБИТИ?
            </h5>
            <p className="text-[#262626] font-[500] leading-6 mt-[10px]">
              Організація повинна у правильній послідовності робити правильні
              речі. Адміністратор забезпечує цей процес.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[15px] mb-[30px]">
          <p className="w-[100px] font-unbounded bg-gradient-to-r from-[#347AEC] to-[#6764E7] inline-block text-transparent bg-clip-text text-8xl font-semibold">
            E
          </p>
          <div className="max-w-[456px] pt-[10px]">
            <h5 className="font-unbounded text-[#262626] uppercase font-[500]">
              КОЛИ/НАВІЩО ЦЕ ПОТРІБНО ЗРОБИТИ?
            </h5>
            <p className="text-[#262626] font-[500] leading-6 mt-[10px]">
              Дотримуючись творчого підходу та готовність йти на ризик менеджер
              також має орієнтуватися у хаосі змін та визначати напрямок
              розвитку компанії.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[15px] mb-[30px]">
          <p className="w-[100px] font-unbounded bg-gradient-to-r from-[#347AEC] to-[#6764E7] inline-block text-transparent bg-clip-text text-8xl font-semibold">
            I
          </p>
          <div className="max-w-[456px] pt-[10px]">
            <h5 className="font-unbounded text-[#262626] uppercase font-[500]">
              ХТО ЦЕ ПОВИНЕН ЗРОБИТИ?
            </h5>
            <p className="text-[#262626] font-[500] leading-6 mt-[10px]">
              Керівнику потрібно вміти створювати у компанії таку систему
              цінностей, яка у свою чергу сформує у команді атмосферу
              взаємоповаги та співробітництва.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
