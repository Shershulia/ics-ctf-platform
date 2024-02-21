import React from 'react';
import {RightFiltersComponent, SortTopFilterComponent} from "@/components";
type MainPageLayoutProps = {
    children?: React.ReactNode,
};
const MainPageLayout = ({ children }: MainPageLayoutProps) => {
    return (
        <div className={"flex gap-[100px]"}>
            <div className={"w-1/3"}>
                <RightFiltersComponent/>
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