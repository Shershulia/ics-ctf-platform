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
    const [showSaved, setShowSaved] = useState(false)
    const [filter, setFilter] = useState("Date");

    const [difficulty, setDifficulty] = useState(0);
    const [category, setCategory] = useState(0);

    const [page, setPage] = useState(1);
    const [totalProblems, setTotalProblems] = useState(0);

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [problems, setProblems] = useState<IProblem[]>([]);
    const [displayProblems, setDisplayProblems] = useState<IProblem[]>([]);


    useEffect(() => {
        axios.get("/api/problems/total")
            .then((response: AxiosResponse<{totalProblems: number}>) => {
                setTotalProblems(response.data.totalProblems);
            });
    }   , []);
    useEffect(() => {
        setIsLoading(true);
        axios.get(`/api/problems?search=${searchValue}&category=${category}&difficulty=${difficulty}&page=${page}`)
            .then((response: AxiosResponse<{problems:IProblem[]}>) => {
                let sortedProblems = response.data.problems;
                if(hideSolved && !showSaved){
                    const solvedIds = JSON.parse(localStorage.getItem(`solved`) || '[]');
                    sortedProblems = sortedProblems.filter(problem => !solvedIds.includes(problem.id));
                }
                else if(showSaved && !hideSolved){
                    const solvedIds = JSON.parse(localStorage.getItem(`saved`) || '[]');
                    sortedProblems = sortedProblems.filter(problem => solvedIds.includes(problem.id));
                }else if (showSaved && hideSolved){
                    const solvedIds = JSON.parse(localStorage.getItem(`solved`) || '[]');
                    const unsolvedIds = sortedProblems.filter(problem => !solvedIds.includes(problem.id)).map((problem)=>(problem.id))
                    const savedIds = JSON.parse(localStorage.getItem(`saved`) || '[]');
                    const combinedIds = unsolvedIds.concat(savedIds);
                    sortedProblems = sortedProblems.filter(problem => combinedIds.includes(problem.id));
                }
                setProblems(sortedProblems);
                setIsLoading(false);
            });
        }, [difficulty, searchValue, category, page, hideSolved, showSaved]);
        useEffect(() => {
            setDisplayProblems(problems.slice((page - 1) * 9, page * 9));
            if (filter === "Date") {
                setDisplayProblems((prevState: any) => (
                    prevState.slice().sort((a : string, b : string) => {
                        //@ts-ignore
                        return new Date(a.createdAt) - new Date(b.createdAt);
                    })
                ));
            } else if (filter === "Points") {
                setDisplayProblems(prevState => (
                    prevState.slice().sort((a, b) => {
                        return a.points - b.points;
                    })
                ));
            } else if (filter === "Difficulties") {
                setDisplayProblems(prevState => (
                    prevState.slice().sort((a : any, b : any) => {
                        return a.difficultyId - b.difficultyId;
                    })
                ));
            } else if (filter === "Id") {
                setDisplayProblems(prevState => (
                    prevState.slice().sort((a, b) => {
                        return a.id - b.id;
                    })
                ));
            }
        }, [problems, page, filter]);
        

    return (
      <div>
        <FrontendLayout>
            <MainPageLayout category={category} setCategory={setCategory}
                            difficulty={difficulty} setDifficulty={setDifficulty}
                            searchValue={searchValue} setSearchValue={setSearchValue}
                            setPage={setPage} page={page} totalProblems={totalProblems}
                            setHideSolved={setHideSolved} hideSolved={hideSolved}
                            showSaved={showSaved} setShowSaved={setShowSaved}
                            filter={filter} setFilter={setFilter}
                            >
                <DisplayCardsComponent height={"max-h-80"} isLoading={isLoading} problems={displayProblems}  />

            </MainPageLayout>
        </FrontendLayout>
      </div>
  )
}
