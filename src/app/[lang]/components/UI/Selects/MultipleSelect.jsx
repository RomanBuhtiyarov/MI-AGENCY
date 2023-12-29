"use client";

import { Select } from "antd";

export const MultipleSelect = ({ className = "", onChange, lang }) => {
  const options = [
    {
      value: "entrepreneur",
      label: lang.login_page.created_profile.activity.entrepreneur,
    },
    {
      value: "top_manager",
      label: lang.login_page.created_profile.activity.top_manager,
    },
    {
      value: "junior_spec",
      label: lang.login_page.created_profile.activity.junior_specialist,
    },
    {
      value: "mid_sen_spec",
      label: lang.login_page.created_profile.activity.mid_senior_specialist,
    },
    {
      value: "hr_spec",
      label: lang.login_page.created_profile.activity.hr_specialist,
    },
    {
      value: "psychologist",
      label: lang.login_page.created_profile.activity.psychologist,
    },
    {
      value: "other",
      label: lang.login_page.created_profile.activity.other,
    },
  ];

  const selectProps = {
    style: {
      width: "100%",
    },
    onChange: onChange,
    autoClearSearchValue: false,
    options,
    showArrow: true,
    border: false,
    placeholder: lang.login_page.created_profile.activity.placeholder,
    maxTagCount: "responsive",
  };

  return <Select className={`select-proff ${className}`} {...selectProps} />;
};
