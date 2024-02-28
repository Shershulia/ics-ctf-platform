import React from 'react';
import {RightFiltersComponent, SortTopFilterComponent} from "@/components";
type MainPageLayoutProps = {
    children?: React.ReactNode,
    searchValue: string,
    setSearchValue: (value: string) => void,
    difficulty: string,
    setDifficulty: (value: string) => void,
    category: string,
    setCategory: (value: string) => void,
};
const MainPageLayout = ({ children, difficulty, setDifficulty , setCategory , category , setSearchValue , searchValue }: MainPageLayoutProps) => {
    return (
        <div className={"flex gap-[100px]"}>
            <div className={"w-1/3"}>
                <RightFiltersComponent setSearchValue={setSearchValue} searchValue={searchValue}
                                       setDifficulty={setDifficulty} difficulty={difficulty}
                                       setCategory={setCategory} category={category}
                />
            </div>
            <div className={"flex flex-col w-full gap-[50px]"}>
                <SortTopFilterComponent/>
                <div className={"w-full h-full"}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default MainPageLayout;