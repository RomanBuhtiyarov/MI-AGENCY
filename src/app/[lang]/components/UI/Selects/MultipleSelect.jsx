"use client";

import { Select } from "antd";

export const MultipleSelect = ({ className = "", onChange, lang }) => {
  const options = [
    {
      value: "Підприємець",
      label: lang.login_page.created_profile.activity.entrepreneur,
    },
    {
      value: "ТОП-менеджер",
      label: lang.login_page.created_profile.activity.top_manager,
    },
    {
      value: "Junior спеціаліст",
      label: lang.login_page.created_profile.activity.junior_specialist,
    },
    {
      value: "Middle / Senior спеціаліст",
      label: lang.login_page.created_profile.activity.mid_senior_specialist,
    },
    {
      value: "HR фахівець",
      label: lang.login_page.created_profile.activity.hr_specialist,
    },
    {
      value: "Психолог",
      label: lang.login_page.created_profile.activity.psychologist,
    },
    {
      value: "Iнше",
      label: lang.login_page.created_profile.activity.other,
    },
  ];

  const selectProps = {
    mode: "tags",
    style: {
      width: "100%",
    },
    onChange: onChange,
    autoClearSearchValue: false,
    options,
    showArrow: false,
    suffixIcon: <p>Тест</p>,
    border: false,
    placeholder: lang.login_page.created_profile.activity.placeholder,
    maxTagCount: "responsive",
  };

  return <Select className={`select-proff ${className}`} {...selectProps} />;
};
