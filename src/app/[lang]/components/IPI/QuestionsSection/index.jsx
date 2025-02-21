export const QuestionsSection = ({ question }) => {
  return (
    <div className='px-[25px] md:px-[40px] py-[19px] mobile:px-0'>
      <div className='flex gap-5'>
        <div className='w-1/2 px-2 justify-center flex items-center leading-[19.5px] font-unbounded h-[96px] text-[15px] rounded-[10px] border-solid border-[6px] border-white max-w-[412px] bg-gray-50'>
          {question?.[0]}
        </div>
        <div className='w-1/2 px-2 justify-center flex items-center leading-[19.5px] font-unbounded h-[96px] text-[15px] rounded-[10px] border-[6px] border-solid border-white max-w-[412px] bg-gray-50'>
          {question?.[1]}
        </div>
      </div>
    </div>
  );
};
