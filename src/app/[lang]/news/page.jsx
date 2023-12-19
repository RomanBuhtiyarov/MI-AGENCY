import { getDictionary } from "../../../../getDictionary";
import { Filter } from "../components/screens/News/filter";
import News from "../components/screens/News";
export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);
  return (
    <main className="pt-[60px]">
      <Filter lang={lang} />
      <News />
    </main>
  );
}
