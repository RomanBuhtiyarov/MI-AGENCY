"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";
import { cn } from "@/_helpers/cn";
import { useRouter } from "next/navigation";

const CardTest = ({ data }) => {
  const router = useRouter();
  const { isMobile } = useScreenSize();
  const [bannerSrc, setBannerSrc] = useState(null);
  const [ownerSrc, setOwnerSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const bannerModule = await import(`/public/_assets/images/tests/${data.banner}`);
        setBannerSrc(bannerModule.default);
        if (data?.owner?.path) {
          const ownerModule = await import(`/public/_assets/images/icons/${data.owner.path}`);
          setOwnerSrc(ownerModule.default);
        }
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    if (data) {
      loadImage();
    }
  }, [data]);

  return (
    <div className='relative max-w-[408px] w-full'>
      <div
        className={cn("shadow-lg rounded-[15px]", {
          "blur-[2px]": data?.development,
        })}
      >
        <div
          className={cn(
            "bg-gradient-to-r w-full h-[176px] from-[#347AEC] to-[#6764E7] rounded-t-[15px] pt-[12px] pb-[24px] overflow-hidden",
            {
              "bg-none": data?.stretchBanner,
            },
          )}
        >
          {ownerSrc && (
            <Image
              loading={"lazy"}
              className='hidden md:block mx-auto'
              src={ownerSrc}
              alt={"owner"}
              width={64}
              height={22}
            />
          )}

          <div
            className={cn("max-w-[350px] h-[130px] relative mx-auto", {
              "w-[408px] h-[177px] max-w-full": data.stretchBanner,
            })}
          >
            {bannerSrc && (
              <Image
                className={cn("object-contain mx-auto", {
                  "!w-[408px] !h-[164px] object-cover rounded-tl-[15px] rounded-tr-[15px]":
                    data?.stretchBanner,
                })}
                src={bannerSrc}
                alt={"banner"}
                fill
              />
            )}
          </div>
        </div>
        <div className='h-[108px] bg-white rounded-b-[15px] pt-[12px] pb-[20px] pl-[15px] pr-[5px]'>
          <div className='mb-[20px]'>
            <h2 className={"font-unbounded text-[16px] font-[400]"}>
              {data.test_blocks[0]?.label}
            </h2>
            <p className='w-[100%] md:w-auto text-[#5E5E5E] text-[13px] font-medium leading-normal mb-[5px] md:mb-[15px] mt-1'>
              {isMobile && data.test_blocks[0]?.description.length !== 0
                ? `${data.test_blocks[0]?.description.slice(0, 37)}...`
                : data.test_blocks[0]?.description}
            </p>
          </div>
        </div>
      </div>
      <button
        disabled={data.development}
        onClick={() => {
          router.push(`/${data.locale}/test/${data.type}`);
        }}
        className={cn(
          "absolute bottom-[14px] left-5 z-50 isolate mix-blend-normal font-unbounded opacity-100 text-white text-[14px] font-[400] py-[7px] px-[15px] bg-[#347AEC] rounded-[100px]",
          {
            "opacity-60": data.development,
          },
        )}
      >
        {data.development
          ? data.lang.test_page.test_in_dev_btn
          : data.lang.test_page.pass_the_test_btn}
      </button>
    </div>
  );
};

export default CardTest;
