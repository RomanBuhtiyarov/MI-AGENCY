"use client";

import { memo, useEffect, useState } from "react";

const BlockTest = ({
  test_name = "",
  letter,
  setState,
  state,
  block,
  counter,
  index,
  answers,
  blockId,
}) => {
  useEffect(() => {
    if (state.length === 0) setCurrentTabButton(0);
    else {
      const currentValue = state.find((el) => el.letter === letter);
      if (currentValue) {
        setCurrentTabButton(currentValue.number);
      }
    }
  }, [state]);

  const [currentTabButton, setCurrentTabButton] = useState(0);
  const BUTTONS_PARAMS = [
    { type: "button", number: 1, disabled: false },
    { type: "button", number: 2, disabled: false },
    { type: "button", number: 3, disabled: false },
    { type: "button", number: 4, disabled: false },
  ];
  const handleCountLetter = (number, letterCurrent) => {
    const updatedState = state.map((letterTest) =>
      letterTest.letter === letterCurrent
        ? { ...letterTest, number: number }
        : letterTest
    );

    // Check if the letter was found and updated. If not, add a new entry.
    const isLetterFound = updatedState.some(
      (el) => el.letter === letterCurrent
    );
    if (!isLetterFound) {
      updatedState.push({ number: number, letter: letterCurrent });
    }

    // Assuming setState is a function to update the state.
    setState(updatedState);
    // Call setCurrentTabButton with the provided number.
    setCurrentTabButton(number);
  };

  return (
    <div className="flex justify-between items-center py-[14px] px-[19px] bg-white rounded-[5px]">
      <p className="text-[#262626] font-unbounded font-[400] pr-[25px]">
        {test_name}
      </p>
      <div className="flex gap-[50px]">
        {BUTTONS_PARAMS?.map?.((button, _) => {
          return (
            <button
              onClick={() => handleCountLetter(button.number, letter)}
              className={`w-[10px] duration-500 h-[10px]
                         ${
                           currentTabButton === button.number ||
                           state?.find((el) => el.letter === letter)?.number ===
                             button.number
                             ? "bg-[#347AEC]"
                             : "bg-[#E1E1E1]"
                         }
                         ${
                           counter + button.number >= 11 && "opacity-60 bg-red"
                         } rounded-[100%]`}
              type={button.type}
              key={button.number}
              disabled={
                counter - currentTabButton + button.number > 10 ||
                // Specific logic for when the counter is at a certain value and based on index.
                (state.length === 2 &&
                  currentTabButton === 0 &&
                  counter >= 6 &&
                  counter + button.number > 9)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(BlockTest);
