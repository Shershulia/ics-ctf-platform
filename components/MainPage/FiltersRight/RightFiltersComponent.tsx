import React from 'react';
import {DifficultyLevelWindow, TopFilterWindow, CategoryFilterWindow} from "@/components";

const RightFiltersComponent = () => {
    return (
        <div className={"flex flex-col justify-center gap-8"}>
            <TopFilterWindow/>
            <DifficultyLevelWindow/>
            <CategoryFilterWindow categories={["All categories",
                "Web Exploitation",
                "Cryptography",
            "Forensics","General Skills", "Binary Exploitation"]}/>
        </div>
    );
};

export default RightFiltersComponent;