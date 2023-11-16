'use client'

import BlockTest from "@/components/TestingUser/BlockTest";
import {useEffect, useState} from "react";

export const TestingUser = ({data}) => {

    const [counterTest, setCounterTest] = useState([]);
    const [currentBlock, setCurrentBlock] = useState(data.page.tests.block_1);
    const [currentBlockID, setCurrentBlockID] = useState(1);
    const [counter, setCounter] = useState(0);
    const [answers, setAnswers] = useState([]);
    
    useEffect(() => {
        setCounter(Object.keys(counterTest)
            .map(function(key) {
                return this[key].number
            }, counterTest)
            .reduce(function (previous, current) {
                return Number(previous) + Number(current);
            }, 0));
    }, [counterTest])
    
    const toggleBlock = () => {
        
        switch (JSON.stringify(currentBlock)) {
            case JSON.stringify(data.page.tests.block_1):
                setCounterTest([]);
                setAnswers(prevState => [...prevState, {id_1: counterTest}])
                setCurrentBlock(data.page.tests.block_2);
                
                break;
            case JSON.stringify(data.page.tests.block_2):
                setCounterTest([]);
                setAnswers(prevState => [...prevState, {id_2: counterTest}])
                setCurrentBlock(data.page.tests.block_3);
                setCurrentBlockID(prevState => prevState + 1);

                break;

            case JSON.stringify(data.page.tests.block_3):
                setCounterTest([]);
                setAnswers(prevState => [...prevState, {id_3: counterTest}])
                setCurrentBlock(data.page.tests.block_4);

                break;
        }
        
    }
    
    return(
        <div>
            <div className="max-w-[545px] w-full flex flex-col gap-[20px]">
                {currentBlock.map?.((test, index) => (
                    !test.answers 
                            &&
                            <BlockTest
                                counter={counter}
                                block={currentBlock}
                                state={counterTest}
                                setState={setCounterTest}
                                test_name={test.label}
                                letter={test._id}
                            />
                    
    
                ))}
                <button onClick={toggleBlock}>Следующий блок</button>
            </div>
            <p>Пройдено</p>
            <p>{currentBlockID}/10</p>
            <p>0/10</p>
        </div>
    )
}