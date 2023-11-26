import Image from "next/image";
import { Enneagrama } from "@/components/TestingUser/Enneagrama";
import { PAEIDescription } from "@/components/TestingUser/PAEIDescription";
import { TestingUser } from "@/components/TestingUser";
export default [
  {
    label: "Тест Адізеса",
    type: "paei",
    description: "В основі методики лежить PAEI-концепція, згід...",
    banner: "/_assets/images/tests/pael_banner.png",
    owner: {
      type: "image",
      path: "/_assets/images/icons/logo_owner.png",
    },
    development: false,
    page: {
      title: "Тест Адізеса",
      description: (
        <p className="text-[#262626] font-[400] leading-5 tracking-wide">
          В основі методики лежить{" "}
          <span className="font-semibold">PAEI-концепція,</span> згідно з якою
          кожна людина має{" "}
          <span className="font-semibold">унікальний набір якостей</span>
          (відрізняється темпераментом, має свої особливості поведінки, стиль
          роботи, лідерські здібності, сильні та слабкі сторони), знаючи які
          можна визначити свій{" "}
          <span className="font-semibold">
            індивідуальний стиль менеджменту.
          </span>
        </p>
      ),
      children: (
        <section className="flex flex-col items-start gap-[35px] mb-[30px]">
          <PAEIDescription />
          <div className="flex items-center gap-[27px]">
            <div className="relative border border-solid border-2 border-[#347AEC] py-[15px] px-[24px] w-[595px] rounded-[15px]">
              <div className="text-[#262626] leading-[130%]">
                <p className="font-[500] mb-[10px]">
                  Перед вами 10 блоків, що містять по 4 якості особистості.
                  Надайте кожній якості від 1-го до 4-х балів в залежності від
                  того, наскільки воно підходить саме вам. Загальна сума балів
                  одного блоку повинна дорівнювати 10.
                </p>
                <h3 className="font-[700]">Будьте чесні перед собою</h3>
              </div>
            </div>
            <div className="-scale-x-100">
              <Image
                src={"/_assets/images/robot img.png"}
                alt={"robot look"}
                loading="lazy"
                width={150}
                height={200}
              />
            </div>
          </div>
          <TestingUser />
        </section>
      ),
    },
  },
  {
    label: "Енеаграма",
    type: "eneagrama",
    description: "Психологічна модель, що описує 9 глибинних...",
    banner: "/_assets/images/tests/enneagram_banner.png",
    owner: {
      type: "image",
      path: "/_assets/images/icons/logo_owner.png",
    },
    development: false,
    page: {
      title: "Енеаграма",
      description: (
        <p className="font-[500] leading-[130%]">
          <span className="text-[#262626] font-[700]">Еннеаграма</span> (з
          грецької ennea – дев'ять і grammos – фігура) – це <br /> психологічна
          модель, що описує 9 глибинних мотивів, які <br /> керують нами на
          підсвідомому рівні.
        </p>
      ),
      children: (
        <section>
          <div className="flex items-center gap-[27px]">
            <Image
              src={"/_assets/images/robot img.png"}
              alt={"robot look"}
              loading="lazy"
              width={150}
              height={200}
            />
            <div className="relative border border-solid border-2 border-[#347AEC] py-[15px] px-[24px] w-[369px] rounded-[15px]">
              <div className="text-[#262626] leading-[130%]">
                <p className="font-[500] mb-[10px]">
                  Кожен із 9 мотивів породжує цілком певний характер, з
                  властивими йому розумовими стратегіями, емоційними реакціями
                  та життєвими установками.
                </p>
                <h3 className="font-[700]">
                  Щоб визначити свій еннеа-тип, пройдіть тестування
                </h3>
              </div>
            </div>
            <Image
              src={"/_assets/images/enneagram img.png"}
              alt={"enneagram look"}
              loading="lazy"
              width={280}
              height={270}
            />
          </div>
          <Enneagrama />
        </section>
      ),
    },
  },
  {
    label: "MBTI",
    description: "Призначений для психологічної оцінки характе...",
    banner: "/_assets/images/tests/MBTI_banner.png",
    owner: {
      type: "image",
      path: "/_assets/images/icons/logo_owner.png",
    },
    development: true,
  },
  {
    label: "Емоційний інтелект",
    description: "Методика Н. Холла призначена для виявлен...",
    banner: "/_assets/images/tests/Emotional intelligence.png",
    owner: {
      type: "image",
      path: "/_assets/images/icons/logo_owner.png",
    },
    development: true,
  },
  {
    label: "Адаптивний інтелект",
    description: <span className="opacity-0">1</span>,
    banner: "/_assets/images/tests/Adaptive intelligence.png",
    owner: {
      type: "image",
      path: "/_assets/images/icons/logo_owner.png",
    },
    development: true,
  },
  {
    label: "Інноваційний інтелект",
    description: <span className="opacity-0">1</span>,
    banner: "/_assets/images/tests/Innovative intelligence.png",
    owner: {
      type: "image",
      path: "/_assets/images/icons/logo_owner.png",
    },
    development: true,
  },
];
