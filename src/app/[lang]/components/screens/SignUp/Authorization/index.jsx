"use client";
import avatarImg from "/public/_assets/images/mi-avatar.png";
import Image from "next/image";
import LoginGoogle from "../../../UI/Buttons/LoginGoogle";
import { signIn } from "next-auth/react";
import { Form } from "../Form";
export const Authorization = ({ session, lang }) => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start md:gap-[50px]">
      <Image
        blurDataURL={"/public/_assets/images/mi-avatar.png"}
        placeholder={"blur"}
        src={avatarImg}
        alt={"robot"}
        width={190}
        height={255}
        loading={"lazy"}
      />
      <div className="flex flex-col items-center md:items-start max-w-[500px] py-[30px] text-center md:text-left">
        <h1 className="  text-[#262626] text-[22px] font-[400] font-unbounded leading-7 mb-[15px]">
          {lang.login_page.google_provider.header}{" "}
        </h1>
        <p className="text-[#262626] font-[500] leading-6 mb-[20px]">
          <span className="text-[#347AEC] font-[700] leading-6">
            {lang.login_page.google_provider.p_highlight}
          </span>{" "}
          <br />
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
