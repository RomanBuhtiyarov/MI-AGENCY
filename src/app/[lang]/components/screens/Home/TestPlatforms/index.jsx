import creatingTested from "@/_libs/creating-tested";
import { ItemPlatformTest } from "./item_platform-test";
const TestPlatforms = ({ font, lang }) => {
  return (
    <div
      className={
        font.className +
        " " +
        "flex gap-[50px] flex-wrap max-w-[700px] mt-[20px]"
      }
    >
      {creatingTested?.map?.((test, i) => (
        <ItemPlatformTest data={{ ...test, name: lang[i] }} />
      ))}
    </div>
  );
};

export default TestPlatforms;
