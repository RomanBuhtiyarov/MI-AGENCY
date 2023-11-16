import MyProfile from "@/components/screens/MyProfile";
import MainButton from "@/components/UI/Buttons/MainButton";
import getCurrentUser from "@/actions/getCurrentUser";
import Link from "next/link";

export default async function Page() {
  const currentUser = await getCurrentUser();
  return (
    <main className="pt-[60px]">
      <MyProfile currentUser={currentUser} />
      <section className="mt-[35px]">
        <h2 className="font-unbounded text-[22px] font-[400] mb-[15px]">
          Ви не пройшли ще жодного тесту
        </h2>
        <MainButton>
          <Link href="/get-tested/">Пройти тестування</Link>
        </MainButton>
      </section>
    </main>
  );
}
