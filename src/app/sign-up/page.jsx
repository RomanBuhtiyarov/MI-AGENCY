"use client";

import { LoginGoogleProvider } from "@/components/screens/SignUp/LoginGoogleProvider";
import CreatedProfile from "@/components/screens/SignUp/CreatedProfile";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <main className="pt-[60px]">
      <LoginGoogleProvider session={session} />
      {session && (
        <div className="flex gap-[57px] w-full">
          {session.user.isRegistered ? (
            router.push("/my-profile/")
          ) : (
            <CreatedProfile session={session} />
          )}
          <div className="relative">
            <div className="w-[156px] h-[156px] bg-[#347AEC] rounded-[100%] absolute -z-10 top-[40%] right-0" />
            <Image
              src={"/_assets/images/robot-look.png"}
              alt={"robot-look"}
              width={207}
              height={279}
            />
          </div>
        </div>
      )}
    </main>
  );
}
