import { getDictionary } from "../../../../getDictionary";
import News from "../components/screens/News";
export default async function Page({ params }) {
  const lang = await getDictionary(params.lang);
  // const [filters, setFilters] = useState({ social: [], sphere: null, language: null });
  return (
    <main className='pt-[20px] pb-[60px] md:pt-[40px] md:pb-0 flex flex-col-reverse md:flex-col'>
      <News lang={lang} />
    </main>
  );
}
