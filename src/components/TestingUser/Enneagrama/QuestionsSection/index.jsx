export const QuestionsSection = ({
  isShownResult,
  setIsShownResult,
  checkFinish,
  question,
}) => {
  return (
    <div className="w-full bg-white shadow-2xl px-[40px] py-[19px] rounded-[10px]">
      {checkFinish ? (
        <button
          onClick={() => {
            setIsShownResult(!isShownResult);
          }}
          className="flex items-center justify-center flex-col gap-[5px] w-full py-[26px]"
        >
          <span className="text-[#262626] text-center font-unbounded text-[22px]">
            Дізнатися результат
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="11"
            viewBox="0 0 22 11"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.219168 0.375342C0.564178 -0.0559202 1.19347 -0.125842 1.62473 0.219168L11 7.71941L20.3753 0.219168C20.8066 -0.125842 21.4359 -0.0559202 21.7809 0.375342C22.1259 0.806604 22.056 1.4359 21.6247 1.78091L11 10.2807L0.375342 1.78091C-0.0559202 1.4359 -0.125842 0.806604 0.219168 0.375342Z"
              fill="#262626"
            />
          </svg>
        </button>
      ) : (
        <p className="font-unbounded text-[22px] font-[400] leading-[130%] text-center">
          {question}
        </p>
      )}
    </div>
  );
};
