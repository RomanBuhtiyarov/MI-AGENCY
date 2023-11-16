import creatingTested from "@/_libs/creating-tested";
import {ItemPlatformTest} from "@/components/screens/Home/TestPlatforms/item_platform-test";

const TestPlatforms = ({font}) => {
    return(
        <div className={font.className + " " + "flex gap-[50px] flex-wrap max-w-[700px] mt-[20px]"}>
            {creatingTested?.map?.((test, _) => (
                <ItemPlatformTest data={test}/>
            ))}
        </div>
    );
};

export default TestPlatforms;