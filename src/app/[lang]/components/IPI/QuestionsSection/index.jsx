export const QuestionsSection = ({ question }) => {
  return (
    <div className='px-[25px] md:px-[40px] py-[19px]'>
      <div className='flex gap-5'>
        <div className='px-2 justify-center flex items-center leading-[19.5px] font-unbounded h-[96px] text-[15px] rounded-[10px] border-solid border-[6px] border-white w-[412px] bg-gray-50'>
          {question?.[0]}
        </div>
        <div className='px-2 justify-center flex items-center leading-[19.5px] font-unbounded h-[96px] text-[15px] rounded-[10px] border-[6px] border-solid border-white w-[412px] bg-gray-50'>
          {question?.[1]}
        </div>
      </div>
    </div>
  );
};
