import { Filter } from "../components/screens/News/filter";
import { getDictionary } from "../../../../getDictionary";
import News from "../components/screens/News";
export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);

  return (
    <main className="pt-[20px] pb-[60px] md:pt-[40px] md:pb-0 flex flex-col-reverse md:flex-col">
      <Filter lang={lang} />
      <News />
    </main>
  );
}
