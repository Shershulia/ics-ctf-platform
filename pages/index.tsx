import {
    FrontendLayout,
    LittleCardComponent,
    RightFiltersComponent, SortTopFilterComponent,
} from "@/components";
import {IProblem} from "@/ITypes/IProblem";

const exampleCard : IProblem = {
    _id: "123",
    title: "Name of problem aaaaaaaaaaaaaaaaaaa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    points: 30,
    category:"General Skills",
    difficulty:"Hard",
    hints:["Here is a hint"],
}
export default function Home() {
  return (
      <div>
        <FrontendLayout>
            <div className={"flex gap-[100px]"}>
                <div className={"w-1/3"}>
                    <RightFiltersComponent/>
                </div>
                <div className={"flex flex-col w-full gap-[50px]"}>
                    <SortTopFilterComponent/>
                    <LittleCardComponent problem={exampleCard} width={"w-[300px]"} height={"h-[300px]"}/>

                </div>

            </div>

        </FrontendLayout>
      </div>
  )
}
