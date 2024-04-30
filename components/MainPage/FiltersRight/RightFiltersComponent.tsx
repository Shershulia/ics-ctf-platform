import React from 'react';
import {DifficultyLevelWindow, TopFilterWindow, CategoryFilterWindow} from "@/components";
import {prisma} from "@/lib/prisma";
import {ICategory} from "@/ITypes/ICategory";

type Filters = {

    searchValue: string,
    setSearchValue: (value: string) => void,
    difficulty: number,
    setDifficulty: (value: number) => void,
    category: number,
    setCategory: (value: number) => void,
    hideSolved: boolean,
    setHideSolved: (value: boolean)=>void,
    showSaved: boolean,
    setShowSaved: (value: boolean)=>void,

};
const RightFiltersComponent = ({ difficulty, setDifficulty , setCategory , category , setSearchValue , searchValue, setHideSolved, hideSolved, showSaved ,setShowSaved}: Filters) => {
    return (
        <div className={"flex flex-col justify-center gap-8"}>
            <TopFilterWindow searchValue={searchValue} setSearchValue={setSearchValue} setHideSolved={setHideSolved} hideSolved={hideSolved} showSaved={showSaved} setShowSaved={setShowSaved}/>
            <DifficultyLevelWindow setDifficulty={setDifficulty} difficulty={difficulty}/>
            <CategoryFilterWindow setCategory={setCategory} category={category}/>
        </div>
    );
};

export default RightFiltersComponent;
