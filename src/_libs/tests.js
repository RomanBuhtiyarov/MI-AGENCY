import Image from "next/image";
import { Enneagrama } from "@/components/TestingUser/Enneagrama";
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
        <section className="flex flex-col items-start gap-[35px]">
          <div className="flex items-start gap-[15px]">
            <p className="w-[100px] font-unbounded bg-gradient-to-r from-[#347AEC] to-[#6764E7] inline-block text-transparent bg-clip-text text-8xl font-semibold">
              P
            </p>
            <div className="max-w-[456px] pt-[10px]">
              <h5 className="font-unbounded text-[#262626] uppercase font-[500]">
                ЩО ПОТРІБНО ЗРОБИТИ?
              </h5>
              <p className="text-[#262626] font-[500] leading-6 mt-[10px]">
                Ця функція менеджменту відповідає задоволення потреб клієнтів.
                Від цього залежить результативність компанії у короткостроковій
                перспективі.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[15px]">
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
          <div className="flex items-start gap-[15px]">
            <p className="w-[100px] font-unbounded bg-gradient-to-r from-[#347AEC] to-[#6764E7] inline-block text-transparent bg-clip-text text-8xl font-semibold">
              E
            </p>
            <div className="max-w-[456px] pt-[10px]">
              <h5 className="font-unbounded text-[#262626] uppercase font-[500]">
                КОЛИ/НАВІЩО ЦЕ ПОТРІБНО ЗРОБИТИ?
              </h5>
              <p className="text-[#262626] font-[500] leading-6 mt-[10px]">
                Дотримуючись творчого підходу та готовність йти на ризик
                менеджер також має орієнтуватися у хаосі змін та визначати
                напрямок розвитку компанії.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[15px]">
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
        </section>
      ),
      tests: {
        block_1: [
          { _id: "I", label: "Чуйний" },
          { _id: "E", label: "Яскравий" },
          { _id: "P", label: "Залучений" },
          { _id: "A", label: "Той, що має сумніви" },
          { answers: [] },
        ],
        block_2: [
          { _id: "P", label: "Прямолінійний" },
          { _id: "A", label: "Аналізуючий" },
          { _id: "E", label: "Харизматичний" },
          { _id: "I", label: "Чуттєвий" },
          { answers: [] },
        ],
        block_3: [
          { _id: "A", label: "Спостерігаючий" },
          { _id: "P", label: "Той, що робить" },
          { _id: "E", label: "Думаючий" },
          { _id: "I", label: "Співпереживаючий" },
          { answers: [] },
        ],
        block_4: [
          { _id: "P", label: "Свідомий" },
          { _id: "A", label: "Оцінюючий" },
          { _id: "E", label: "Ризикований" },
          { _id: "I", label: "Доброзичливий" },
          { answers: [] },
        ],
        block_5: [
          { _id: "I", label: "Свідомий" },
          { _id: "E", label: "Оцінюючий" },
          { _id: "P", label: "Ризикований" },
          { _id: "A", label: "Доброзичливий" },
          { answers: [] },
        ],
        block_6: [
          { _id: "E", label: "Абстрактний" },
          { _id: "A", label: "Спостерігаючий" },
          { _id: "I", label: "Взаємодіючий" },
          { _id: "P", label: "Активний" },
          { answers: [] },
        ],
        block_7: [
          { _id: "P", label: "Прагматичний" },
          { _id: "I", label: "Теплий" },
          { _id: "A", label: "Той, що розмірковує" },
          { _id: "E", label: "Орієнтований на майбутнє" },
          { answers: [] },
        ],
        block_8: [
          { _id: "I", label: "Той, хто прагне консенсусу" },
          { _id: "E", label: "Концептуальний" },
          { _id: "P", label: "Переможець" },
          { _id: "A", label: "Спостерігаючий" },
          { answers: [] },
        ],
        block_9: [
          { _id: "A", label: "Стриманий" },
          { _id: "E", label: "Генератор ідей" },
          { _id: "P", label: "Раціональний" },
          { _id: "I", label: "Обізнаний" },
          { answers: [] },
        ],
        block_10: [
          { _id: "I", label: "Приємний" },
          { _id: "E", label: "Яскравий" },
          { _id: "A", label: "Акуратний" },
          { _id: "P", label: "Діловий" },
          { answers: [] },
        ],
      },
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
