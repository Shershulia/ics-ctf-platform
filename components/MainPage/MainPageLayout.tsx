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
};
const MainPageLayout = ({ children, difficulty, setDifficulty , setCategory , category , setSearchValue , searchValue, setPage, page, totalProblems, setHideSolved, hideSolved }: MainPageLayoutProps) => {
    return (
        <div className={"flex gap-[100px]"}>
            <div className={"w-1/3"}>
                <RightFiltersComponent setSearchValue={setSearchValue} searchValue={searchValue}
                                       setDifficulty={setDifficulty} difficulty={difficulty}
                                       setCategory={setCategory} category={category}
                                       setHideSolved={setHideSolved} hideSolved={hideSolved}
                />
            </div>
            <div className={"flex flex-col w-full gap-[50px]"}>
                <SortTopFilterComponent setPage={setPage}
                                        page={page}
                                        totalProblems={totalProblems}
                />
                <div className={"w-full h-full"}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default MainPageLayout;