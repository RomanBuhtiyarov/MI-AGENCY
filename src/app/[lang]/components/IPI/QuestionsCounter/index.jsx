import { cn } from "@/_helpers/cn";

export const QuestionsCounter = ({ curr = 1, general = 1, lang, className }) => {
  const current = curr > general ? curr - 1 : curr;
  return (
    <div
      className={cn(
        "flex-start flex rounded-[29px] h-[30px] w-[290px] md:w-[726px] overflow-hidden bg-white font-monserrat text-xs font-[600] relative",
        className,
      )}
    >
      <p className='text-[#262626] absolute top-[2px] left-[15px] text-base'>
        {lang.enneagram_block.question_counter}
        {current}
        {" / "}
        {general} {`(${((current / general) * 100).toFixed(0)}%)`}
      </p>
      <div
        className='flex h-full items-baseline justify-center overflow-hidden break-all bg-[#347AEC66] relative transition-all duration-300 ease-in-out;'
        style={{ width: `${(current / general) * 100}%` }}
      ></div>
    </div>
  );
};
