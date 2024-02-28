import React from 'react';
import {DifficultyLevelWindow, TopFilterWindow, CategoryFilterWindow} from "@/components";
import {prisma} from "@/lib/prisma";
import {ICategory} from "@/ITypes/ICategory";


const RightFiltersComponent = () => {
    return (
        <div className={"flex flex-col justify-center gap-8"}>
            <TopFilterWindow/>
            <DifficultyLevelWindow/>
            <CategoryFilterWindow />
        </div>
    );
};

export default RightFiltersComponent;
