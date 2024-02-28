import {
    DisplayCardsComponent,
    FrontendLayout,
    LittleCardComponent, MainPageLayout,
    RightFiltersComponent, SortTopFilterComponent,
} from "@/components";
import {IProblem} from "@/ITypes/IProblem";
import {useState} from "react";

export default function Home() {
    const [searchValue, setSearchValue] = useState("");
    const [difficulty, setDifficulty] = useState("All");
    const [category, setCategory] = useState("All categories");

  return (
      <div>
        <FrontendLayout>
            <MainPageLayout category={category} setCategory={setCategory}
                            difficulty={difficulty} setDifficulty={setDifficulty}
                            searchValue={searchValue} setSearchValue={setSearchValue}>
                <DisplayCardsComponent height={"max-h-80"} category={category} difficulty={difficulty} searchValue={searchValue} />

            </MainPageLayout>
        </FrontendLayout>
      </div>
  )
}
