export const QuestionsCounter = ({ current = 1, general = 1, lang }) => {
  return (
    <div className="flex-start flex rounded-[29px] h-[30px] w-[290px] md:w-[726px] overflow-hidden bg-white font-monserrat text-xs font-[600] relative">
      <p className="text-[#262626] absolute top-[2px] left-[15px] text-base">
        {lang.enneagram_block.question_counter}
        {current}
        {" / "}
        {general} {`(${((current / general) * 100).toFixed(0)}%)`}
      </p>
      <div
        className="flex h-full items-baseline justify-center overflow-hidden break-all bg-[#347AEC66] relative transition-all duration-300 ease-in-out;"
        style={{ width: `${(current / general) * 100}%` }}
      ></div>
    </div>
  );
  // return <p className="text-[#5D5D5D] font-[500] leading-[130%]">{current}/{general}</p>
};
