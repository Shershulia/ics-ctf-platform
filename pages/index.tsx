import {
    DisplayCardsComponent,
    FrontendLayout,
    MainPageLayout,
} from "@/components";
import {IProblem} from "@/ITypes/IProblem";

const exampleCard : IProblem = {
    _id: "123",
    title: "Name of problem aaaaaaaaaaaaaaaaaaa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    points: 30,
    category:"General Skills",
    difficulty:"Hard",
    hints:["Here is a hint", "Here is a hint 2"],
}
const cards : IProblem[] = Array.from({ length: 9 }, () => ({ ...exampleCard }));
export default function Home() {
  return (
      <div>
        <FrontendLayout>
            <MainPageLayout>

                <DisplayCardsComponent problems={cards} height={"max-h-80"} />

            </MainPageLayout>
        </FrontendLayout>
      </div>
  )
}
