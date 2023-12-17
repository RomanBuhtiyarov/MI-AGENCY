import { Filter } from "../components/screens/News/filter";
import { getDictionary } from "../../../../getDictionary";

export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);

  return (
    <main className="pt-[60px]">
      <Filter lang={lang} />
    </main>
  );
}
