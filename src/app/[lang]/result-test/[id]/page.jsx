import { getDictionary } from "../../../../../getDictionary";
import ResultTests from "../../components/screens/ResultTests";
export default async function Page({ params }) {
  console.log(params);
  const lang = await getDictionary(params.lang);
  return <ResultTests lang={lang} id={params.id} />;
}
