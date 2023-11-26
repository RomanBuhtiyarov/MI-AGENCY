"use client";

import Image from "next/image";
import LoginGoogle from "@/components/UI/Buttons/LoginGoogle";
import { signIn } from "next-auth/react";

export const LoginGoogleProvider = ({ session }) => {
  return (
    <section className="flex items-start gap-[50px]">
      <Image
        src={"/_assets/images/mi-avatar.png"}
        alt={"robot"}
        width={190}
        height={255}
        loading={"lazy"}
      />
      <div className="max-w-[500px] py-[30px]">
        <h1 className="text-[#262626] text-[22px] font-[400] font-unbounded leading-7 mb-[15px]">
          Хочеш скласти свій повний психологічний портрет?{" "}
        </h1>
        <p className="text-[#262626] font-[500] leading-6 mb-[20px]">
          <span className="text-[#347AEC] font-[700] leading-6">
            Пройди швидку реєстрацію
          </span>{" "}
          та <br />я збережу всі твої результати!
        </p>
        {session === null && <LoginGoogle onClick={() => signIn("google")} />}
      </div>
    </section>
  );
};
