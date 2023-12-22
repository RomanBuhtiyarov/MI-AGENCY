import MyProfile from "../components/screens/MyProfile";
import MainButton from "../components/UI/Buttons/MainButton";
import getCurrentUser from "@/actions/getCurrentUser";
import Link from "next/link";
import { getDictionary } from "../../../../getDictionary";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);
  const currentUser = await getCurrentUser();

  return (
    <main className="pt-[60px]">
      {currentUser ? (
        <>
          <MyProfile lang={lang} currentUser={currentUser} />
          <section className="mt-[35px]">
            <h2 className="font-unbounded text-[22px] font-[400] mb-[15px]">
              {lang.profile_page.header}
            </h2>
            <MainButton>
              <Link href={`/${lang.locale}/get-tested/`}>
                {lang.profile_page.get_tested_btn}
              </Link>
            </MainButton>
            <div>
              <h2 className="text-[22px] font-medium mb-[15px]">
                Тест Адізеса
              </h2>
              <div className="w-[850px] h-[40px] bg-gradient-to-r from-[#347AEC] to-[#6764E7] flex items-center py-[6px] px-[29px] font-unbounded text-[14px] font-[400] text-white font-unbounded text-[18px] font-[600] text-white rounded-[10px] mb-[10px]">
                <div className="w-[850px] flex justify-between ">
                  <div className="w-[35%] px-[10px]">
                    <p>{lang.profile_page.user.tests_block.result}</p>
                  </div>
                  <div className="w-[35%] pl-[40px]">
                    <p>{lang.profile_page.user.tests_block.date}</p>
                  </div>
                  <div className="w-[30%] px-[10px]">
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="w-[850px] h-[40px] bg-white flex items-center py-[6px] px-[29px] font-unbounded text-[18px] font-[400] text-white text-white rounded-[10px] mb-[10px]">
                <div className="w-[850px] text-[#262626]  flex justify-between">
                  <div className="w-[35%] px-[10px]">
                    <p>pAei - Адміністратор</p>
                  </div>
                  <div className="w-[35%] pl-[40px]">
                    <p>22.05.2023</p>
                  </div>
                  <div className="w-[30%] px-[10px] text-[#347AEC] font-[700] text-right">
                    <button>
                      {lang.profile_page.user.tests_block.more_info_btn}
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[850px] h-[40px] bg-white flex items-center py-[6px] px-[29px] font-unbounded text-[14px] font-[400] text-white font-unbounded text-[18px] rounded-[10px] mb-[10px]">
                <div className="w-[850px] text-[#262626] flex justify-between">
                  <div className="w-[35%] px-[10px]">
                    <p>Paei - Виробник </p>
                  </div>
                  <div className="w-[35%] pl-[40px]">
                    <p>22.02.2023</p>
                  </div>
                  <div className="w-[30%] text-[#347AEC] font-[700] px-[10px] text-right">
                    <button>
                      {lang.profile_page.user.tests_block.more_info_btn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        redirect(`/${lang.locale}/pages/sign-up/`)
      )}
    </main>
  );
}
