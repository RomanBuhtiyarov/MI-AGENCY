import tests from "@/_libs/tests";
import { Unbounded } from "next/font/google";
import { TestingUser } from "@/components/TestingUser";

const Unbound = Unbounded({ subsets: ["latin"] });

async function getData(type) {
  const result = [];

  tests.filter((test) => {
    if (test.type === type) {
      result.push(test);
    }
  });

  return result[0];
}

export default async function Page(context) {
  const { params } = context;

  const data = await getData(params.type);

  return (
    <main className="pt-[50px]">
      <h1
        className={
          Unbound.className + " " + "text-[#262626] text-[40px] font-[400]"
        }
      >
        {data.label}
      </h1>
      <div className="pb-[35px] pt-[20px]">{data.page.description}</div>
      <div>{data.page.children}</div>
    </main>
  );
}
