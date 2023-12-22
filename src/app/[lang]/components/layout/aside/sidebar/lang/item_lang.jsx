import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

export const ItemLang = ({ activeLang, setActiveLang, data, pathName }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const redirectedPathName = (locale) => {
    if (!pathName) {
      return "/";
    }
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  console.log(redirectedPathName(data.key));

  const success = () => {
    toast.success(
      data.key === "en"
        ? `You have successfully set the language - ${data.alt}`
        : `Ви вдало встановили мову - ${data.alt}`,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      }
    );
  };
  const changeLang = useCallback(() => {
    setActiveLang(data.key);
    setTimeout(() => {
      success();
    }, 1000);
  }, [activeLang]);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageModule = await import(
          `/public/_assets/images/lang/${data.image}`
        );
        setImageSrc(imageModule?.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
    if (data) {
      loadImage();
    }
  }, [data]);
  return (
    <>
      <Link href={redirectedPathName(data.key)}>
        <button key={data.key} onClick={changeLang}>
          {imageSrc && (
            <Image
              className={`${
                activeLang === data.key ? "grayscale-0" : "grayscale"
              }`}
              aria-label={"Change to:" + data.alt}
              src={imageSrc}
              alt={data.alt}
              width={24}
              height={24}
              loading={"lazy"}
            />
          )}
        </button>
      </Link>
    </>
  );
};
