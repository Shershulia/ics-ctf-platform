import {
    DisplayCardsComponent,
    FrontendLayout,
    LittleCardComponent, MainPageLayout,
    RightFiltersComponent, SortTopFilterComponent,
} from "@/components";
import {IProblem} from "@/ITypes/IProblem";

export default function Home() {
  return (
      <div>
        <FrontendLayout>
            <MainPageLayout>

                <DisplayCardsComponent height={"max-h-80"} />

            </MainPageLayout>
        </FrontendLayout>
      </div>
  )
}
