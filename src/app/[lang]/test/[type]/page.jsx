import { tests } from "@/_libs/tests";
import { getDictionary } from "../../../../../getDictionary";

async function getData(type, lang) {
  const result = [];
  const localizedTests = tests(lang);
  localizedTests.filter((test) => {
    if (test.type === type) {
      result.push(test);
    }
  });

  return result[0];
}

export default async function Page(context) {
  const { params } = context;
  const lang = await getDictionary(params.lang);
  const data = await getData(params.type, lang);
  return (
    <main className='pt-[20px] md:pt-[60px]'>
      <h1 className={"font-unbounded text-[#262626] text-[22px]  md:text-[40px] font-[400]"}>
        {data.label}
      </h1>
      <div className='pt-[10px] md:pt-[20px]'>{data.page.description}</div>
      <div>{data.page.children}</div>
    </main>
  );
}
