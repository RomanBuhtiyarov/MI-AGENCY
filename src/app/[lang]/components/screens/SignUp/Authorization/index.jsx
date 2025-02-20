"use client";
import avatarImg from "/public/_assets/images/smileRobot.svg";
import registerBorder from "/public/_assets/images/borders/register_border.png";
import Image from "next/image";
import LoginGoogle from "../../../UI/Buttons/LoginGoogle";
import { signIn } from "next-auth/react";
import { Form } from "../Form";
import { useEffect } from "react";
import { redirect } from "next/navigation";
export const Authorization = ({ session, lang }) => {
  useEffect(() => {
    const isAuth = Boolean(localStorage.getItem("authToken"));
    isAuth && redirect(`/${lang.locale}/my-profile/`);
  }, []);
  return (
    <section className='flex flex-col md:flex-row items-center md:items-start md:gap-[50px] '>
      <Image src={avatarImg} alt={"robot"} width={190} height={255} loading={"lazy"} />
      <div className='flex flex-col items-center md:items-start max-w-[500px] py-[30px] text-center md:text-left relative'>
        <h1 className='text-[#262626] text-[20px] font-unbounded leading-[26px] font-bold mb-[15px]'>
          {lang.login_page.google_provider.header}{" "}
        </h1>
        <Image
          src={registerBorder}
          alt='border'
          width={434}
          height={151}
          loading='lazy'
          className='absolute top-[0px] -left-[55px] mobile:hidden'
        />
        <p className='text-[#262626] font-medium max-w-[350px] leading-5 mb-[65px]'>
          <span className='text-[#347AEC] font-[700] leading-5'>
            {lang.login_page.google_provider.p_highlight}
          </span>
          {lang.login_page.google_provider.p_default}
        </p>
        {/* {!session && (
          <LoginGoogle lang={lang} onClick={() => signIn("google")} />
        )} */}
        <Form lang={lang} />
      </div>
    </section>
  );
};
