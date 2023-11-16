'use client'

import {Select} from "antd";

export const MultipleSelect = ({className = "", onChange}) => {
    
    const options = [
        {value: 'Підприємець', label: "Підприємець",},        
        {value: 'ТОП-менеджер', label: "ТОП-менеджер",},        
        {value: 'Junior спеціаліст', label: "Junior спеціаліст",},        
        {value: 'Middle / Senior спеціаліст', label: "Middle / Senior спеціаліст",},        
        {value: 'HR фахівець', label: "HR фахівець",},        
        {value: 'Психолог', label: "Психолог",},
        {value: 'Iнше', label: "Iнше",},
    ];

    const selectProps = {
        mode: 'tags',
        style: {
            width: '100%',
        },
        onChange: onChange,
        autoClearSearchValue: false,
        options,
        showArrow: false,
        suffixIcon: <p>Тест</p>,
        border: false,
        placeholder: 'Напрямок діяльності*',
        maxTagCount: 'responsive',
    };
    
    return(
        <Select
            className={`select-proff ${className}`}
            {...selectProps} 
        />
    )
}