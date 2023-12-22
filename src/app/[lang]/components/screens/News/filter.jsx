"use client";

import { Select, Tag } from "antd";

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};

export const Filter = ({ lang }) => {
  const optionsSocial = [
    {
      label: "Instagram",
      value: "#833AB4",
    },
    {
      label: "LinkedIn",
      value: "#19427D",
    },
    {
      label: "Medium",
      value: "#5A7969",
    },
    {
      label: "IT Rating",
      value: "#E5C7B1",
    },
  ];

  return (
    <div className="flex items-center gap-[22px]">
      <Select
        mode="tags"
        className="group bg-[#347AEC] hover:bg-[#6764E7] duration-500 rounded-[100px] px-[12px] text-white cursor-pointer"
        showArrow={false}
        tagRender={tagRender}
        maxTagCount="responsive"
        style={{
          width: "157px",
        }}
        options={optionsSocial}
        bordered={false}
        placeholder={
          <div className="cursor-pointer group-hover:bg-[#6764E7] duration-500 bg-[#347AEC] flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
                fill="white"
              />
              <path
                d="M7.15209 9.91168C7.08007 10.0294 6.91993 10.0294 6.84791 9.91168L4.03043 5.30485C3.95049 5.17415 4.03738 5 4.18252 5L9.81748 5C9.96262 5 10.0495 5.17415 9.96957 5.30485L7.15209 9.91168Z"
                fill="white"
              />
            </svg>
            <div className="flex items-center gap-[5px]">
              <p className="text-white text-[13px] font-[500]">
                {lang.news_page.filter.resource}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.646484 1.35359L1.35359 0.646484L5.00004 4.29293L8.64648 0.646484L9.35359 1.35359L5.00004 5.70714L0.646484 1.35359Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        }
      />
      <Select
        style={{
          width: "157px",
        }}
        options={[
          {
            value: "IT",
          },
          {
            value: "Промислова",
          },
        ]}
        allowClear
        className="border border-solid border-[#DCDCDC] bg-transparent rounded-[100px] px-[12px] cursor-pointer"
        showArrow={false}
        bordered={false}
        placeholder={
          <div className="bg-transparent flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
                fill="#262626"
              />
              <path
                d="M7.15209 9.91168C7.08007 10.0294 6.91993 10.0294 6.84791 9.91168L4.03043 5.30485C3.95049 5.17415 4.03738 5 4.18252 5L9.81748 5C9.96262 5 10.0495 5.17415 9.96957 5.30485L7.15209 9.91168Z"
                fill="#262626"
              />
            </svg>
            <div className="flex items-center gap-[5px]">
              <p className="text-[#262626] text-[13px] font-[500]">
                {lang.news_page.filter.sphere}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.646484 1.35359L1.35359 0.646484L5.00004 4.29293L8.64648 0.646484L9.35359 1.35359L5.00004 5.70714L0.646484 1.35359Z"
                  fill="#262626"
                />
              </svg>
            </div>
          </div>
        }
      />
      <Select
        style={{
          width: "157px",
        }}
        options={[
          {
            value: "UA",
          },
          {
            value: "ENG",
          },
        ]}
        allowClear
        className="border border-solid border-[#DCDCDC] bg-transparent rounded-[100px] px-[12px]"
        showArrow={false}
        bordered={false}
        placeholder={
          <div className="bg-transparent flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
                fill="#262626"
              />
              <path
                d="M7.15209 9.91168C7.08007 10.0294 6.91993 10.0294 6.84791 9.91168L4.03043 5.30485C3.95049 5.17415 4.03738 5 4.18252 5L9.81748 5C9.96262 5 10.0495 5.17415 9.96957 5.30485L7.15209 9.91168Z"
                fill="#262626"
              />
            </svg>
            <div className="flex items-center gap-[5px]">
              <p className="text-[#262626] text-[13px] font-[500]">
                {lang.news_page.filter.language}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.646484 1.35359L1.35359 0.646484L5.00004 4.29293L8.64648 0.646484L9.35359 1.35359L5.00004 5.70714L0.646484 1.35359Z"
                  fill="#262626"
                />
              </svg>
            </div>
          </div>
        }
      />
    </div>
  );
};
