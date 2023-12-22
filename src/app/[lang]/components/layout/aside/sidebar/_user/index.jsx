"use client";

import { Default } from "@/app/[lang]/components/Avatar/Default";
import { memo } from "react";
import ArrowButton from "@/app/[lang]/components/UI/Buttons/ArrowButton";
import Link from "next/link";
import { useSession } from "next-auth/react";

const User = ({ font, user, lang }) => {
  return (
    <div className="flex gap-[8px]">
      <Default user={user} />
      <div>
        <div className="mb-[6px]">
          {user ? (
            <p className={font.className + " " + "text-[#262626] font-[400]"}>
              {lang.sidebar.user.user_greating}
              {user.username}
            </p>
          ) : (
            <p className="font-[500] text-[12px] text-[#5E5E5E] mb-[5px]">
              {lang.sidebar.user.user_greating_default}
            </p>
          )}
        </div>
        <div>
          <Link
            href={
              user
                ? `/${lang.locale}/my-profile`
                : `/${lang.locale}/pages/sign-up`
            }
          >
            <ArrowButton
              className={!user ? "w-[80px]" : ""}
              label={
                user
                  ? `${lang.sidebar.user.user_button_auth}`
                  : `${lang.sidebar.user.user_button_login}`
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(User);
