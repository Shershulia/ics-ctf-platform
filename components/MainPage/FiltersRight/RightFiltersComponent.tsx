import React from 'react';
import {DifficultyLevelWindow, TopFilterWindow} from "@/components";

const RightFiltersComponent = () => {
    return (
        <div className={"flex flex-col justify-center gap-8"}>
            <TopFilterWindow/>
            <DifficultyLevelWindow/>
        </div>
    );
};

export default RightFiltersComponent;