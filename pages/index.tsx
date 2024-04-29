import {
    DisplayCardsComponent,
    FrontendLayout,MainPageLayout,

} from "@/components";
import {IProblem} from "@/ITypes/IProblem";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

export default function Home() {
    const [searchValue, setSearchValue] = useState("");
    const [hideSolved, setHideSolved] = useState(false);

    const [difficulty, setDifficulty] = useState(0);
    const [category, setCategory] = useState(0);

    const [page, setPage] = useState(1);
    const [totalProblems, setTotalProblems] = useState(0);

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [problems, setProblems] = useState<IProblem[]>([]);

    useEffect(() => {
        axios.get("/api/problems/total")
            .then((response: AxiosResponse<{totalProblems: number}>) => {
                setTotalProblems(response.data.totalProblems);
                console.log(response.data.totalProblems);
            });
    }   , []);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`/api/problems?search=${searchValue}&category=${category}&difficulty=${difficulty}&page=${page}`)
            .then((response: AxiosResponse<{problems:IProblem[]}>) => {
                let sortedProblems = response.data.problems;
                if(hideSolved){
                    const solvedIds = JSON.parse(localStorage.getItem(`solved`) || '[]');
                    sortedProblems.sort((a, b) => {
                        const aIsSolved = solvedIds.includes(a.id);
                        const bIsSolved = solvedIds.includes(b.id);
                        if (!aIsSolved && bIsSolved) {
                            return -1;
                        } else if (aIsSolved && !bIsSolved) {
                            return 1;
                        } else {
                            return 0;
                        }
                    });
                }
                setProblems(sortedProblems);
                setIsLoading(false);
            });
    }, [difficulty, searchValue, category, page, hideSolved]);

    return (
      <div>
        <FrontendLayout>
            <MainPageLayout category={category} setCategory={setCategory}
                            difficulty={difficulty} setDifficulty={setDifficulty}
                            searchValue={searchValue} setSearchValue={setSearchValue}
                            setPage={setPage} page={page} totalProblems={totalProblems}
                            setHideSolved={setHideSolved} hideSolved={hideSolved}
                            >
                <DisplayCardsComponent height={"max-h-80"} isLoading={isLoading} problems={problems}  />

            </MainPageLayout>
        </FrontendLayout>
      </div>
  )
}
