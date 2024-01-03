"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Logo = () => {
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageModule = await import(
          `/public/_assets/images/icons/psyMI_logo.png`
        );
        setImageSrc(imageModule?.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, []);
  return (
    <div>
      {imageSrc && (
        <Image
          className="w-[100px] h-[40px] md:w-[120px] md:h-[50px]"
          src={imageSrc}
          alt={"psyMI"}
          loading={"lazy"}
        />
      )}
    </div>
  );
};
