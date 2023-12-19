import Image from "next/image";
import { message } from "antd";
import { useCallback } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const ItemLang = ({ activeLang, setActiveLang, data }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const changeLang = useCallback(() => {
    setActiveLang(data.key);
    const success = () => {
      messageApi
        .open({
          type: "success",
          content:
            activeLang === "ua"
              ? `You have successfully set the language - ${data.alt}`
              : `Ви вдало встановили мову - ${data.alt}`,
        })
        .then((res) => res);
    };

    success();
  }, [activeLang]);

  return (
    <>
      {contextHolder}
      <Link href={redirectedPathName(data.key)}>
        <button key={data.key} onClick={changeLang}>
          <Image
            className={`${
              activeLang === data.key ? "grayscale-0" : "grayscale"
            }`}
            aria-label={"Change to:" + data.alt}
            src={`/_assets/images/lang/${data.image}`}
            alt={data.alt}
            width={24}
            height={24}
            loading={"lazy"}
          />
        </button>
      </Link>
    </>
  );
};
