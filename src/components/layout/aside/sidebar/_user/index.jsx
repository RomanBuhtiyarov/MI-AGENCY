"use client";

import { Default } from "@/components/Avatar/Default";
import { memo } from "react";
import ArrowButton from "@/components/UI/Buttons/ArrowButton";
import Link from "next/link";
import { useSession } from "next-auth/react";

const User = ({ font, user }) => {
  return (
    <div className="flex gap-[8px]">
      <Default user={user} />
      <div>
        <div className="mb-[6px]">
          {user ? (
            <p className={font.className + " " + "text-[#262626] font-[400]"}>
              Привіт, {user.username}
            </p>
          ) : (
            <p className="font-[500] text-[12px] text-[#5E5E5E] mb-[5px]">
              Привіт, Анонім
            </p>
          )}
        </div>
        <div>
          <Link href={user ? "/my-profile" : "/sign-up"}>
            <ArrowButton
              className={!user ? "w-[80px]" : ""}
              label={user ? "мій профіль" : "Увійти"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(User);
