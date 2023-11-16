'use client';


import {memo, useEffect, useState} from "react";

const BlockTest = ({test_name = "", letter, setState, state, block, counter}) => {
    
    const [currentTabButton, setCurrentTabButton] = useState(0);
    
    const BUTTONS_PARAMS = [
        {type: 'button', number: 1, disabled: false,},
        {type: 'button', number: 2, disabled: false,},
        {type: 'button', number: 3, disabled: false,},
        {type: 'button', number: 4, disabled: false,},
    ];
    
    const handleCountLetter = (number, letterCurrent) => {
        
        state.filter((letterTest) => {
            if(letterTest.letter === letterCurrent){
                letterTest.number = number
            }
        });
        
        const filter = state.filter((el) => el.letter === letterCurrent);
        
        if(filter.length === 0){
            setState(prev => [...prev, {number: number, letter: letterCurrent}]);
        }

        setCurrentTabButton(number)
    };
    
    useEffect(() => {
//         const badCallback = (a,i) => Object.assign(a,i)
//
//         const foo = [ { a: 1 }, { b: 2 }, { c: 3 } ]
//         const bar = foo.reduce( badCallback )  // bad use of Object.assign
// // Look, we've tampered with the original array
//         foo //  [ { a: 1, b: 2, c: 3 }, { b: 2 }, { c: 3 } ]
        
    }, [])
    
    
    return(
        <div className="flex justify-between items-center py-[14px] px-[19px] bg-white rounded-[5px]">
            <p className="text-[#262626] font-unbounded font-[400]">{test_name}</p>
            <div className="flex gap-[50px]">
                {BUTTONS_PARAMS?.map?.((button, _) => (
                    <button
                        onClick={() => handleCountLetter(button.number, letter)}
                        className={`w-[10px] duration-500 h-[10px]
                         ${currentTabButton === button.number ? "bg-[#347AEC]" : "bg-[#E1E1E1]"}
                         ${(counter + button.number) >= 11 && "opacity-60 bg-red"} rounded-[100%]`}
                        type={button.type}
                        key={button.number}
                        disabled={(counter + button.number) < 10 ? false : true}
                    />
                ))}
            </div>
        </div>
    );
};

export default memo(BlockTest)