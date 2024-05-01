import React from 'react';
import {RightFiltersComponent, SortTopFilterComponent} from "@/components";
type MainPageLayoutProps = {
    children?: React.ReactNode,
    searchValue: string,
    page: number,
    totalProblems: number,
    setPage: (value: number) => void,
    setSearchValue: (value: string) => void,
    difficulty: number,
    setDifficulty: (value: number) => void,
    category: number,
    setCategory: (value: number) => void,
    hideSolved: boolean,
    setHideSolved: (value: boolean)=>void,
    showSaved: boolean,
    setShowSaved: (value: boolean)=>void,
    filter: string,
    setFilter: (value: string) => void,

};
const MainPageLayout = ({ children, difficulty, setDifficulty , setCategory , category , setSearchValue , searchValue, setPage, page, totalProblems, setHideSolved, hideSolved, showSaved ,setShowSaved, filter, setFilter }: MainPageLayoutProps) => {
    return (
        <div className={"flex lg:flex-row flex-col-reverse lg:gap-[50px] gap-[100px] gap-6"}>
            <div className={"w-full lg:w-1/3"}>
                <RightFiltersComponent setSearchValue={setSearchValue} searchValue={searchValue}
                                       setDifficulty={setDifficulty} difficulty={difficulty}
                                       setCategory={setCategory} category={category}
                                       setHideSolved={setHideSolved} hideSolved={hideSolved}
                                       showSaved={showSaved} setShowSaved={setShowSaved}

                />
            </div>
            <div className={"flex flex-col w-full lg:gap-[50px] gap-6"}>
                <SortTopFilterComponent setPage={setPage}
                                        page={page}
                                        totalProblems={totalProblems}
                                        filter={filter}
                                        setFilter={setFilter}
                />
                <div className={"w-full h-full"}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default MainPageLayout;