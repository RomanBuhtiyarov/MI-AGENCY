import GreatingBlock from "./components/screens/Home/GreatingBlock";
import TrustBlock from "./components/screens/Home/TrustBlock";
import { Unbounded } from "next/font/google";
import { getDictionary } from "../../../getDictionary";
import AboutBlock from "./components/screens/Home/AboutBlock/AboutBlock";
import ClientsBlock from "./components/screens/Home/ClientsBlock";

export default async function Home({ params }) {
  const lang = await getDictionary(params.lang);
  return (
    <div className='mb-[50px]'>
      <GreatingBlock lang={lang} />
      <TrustBlock lang={lang} />
      <AboutBlock lang={lang} />
      <ClientsBlock lang={lang} />
    </div>
  );
}
