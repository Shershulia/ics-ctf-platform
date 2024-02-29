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
    const [difficulty, setDifficulty] = useState(0);
    const [category, setCategory] = useState(0);

    const [page, setPage] = useState(1);

  return (
      <div>
        <FrontendLayout>
            <MainPageLayout category={category} setCategory={setCategory}
                            difficulty={difficulty} setDifficulty={setDifficulty}
                            searchValue={searchValue} setSearchValue={setSearchValue}
                            setPage={setPage} page={page}>
                <DisplayCardsComponent height={"max-h-80"} category={category} difficulty={difficulty} searchValue={searchValue} page={page}  />

            </MainPageLayout>
        </FrontendLayout>
      </div>
  )
}
