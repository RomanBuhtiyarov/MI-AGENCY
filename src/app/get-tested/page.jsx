import Tests from "@/_libs/tests";
import CardTest from "@/components/screens/GetTested/CardTest";

export default function GetTested() {
    return(
        <div className="pt-[60px] gap-[25px] flex flex-wrap max-w-[900px]">
            {Tests?.map?.((test, _) => (
                <CardTest data={test}/>
            ))}
        </div>
    )
}