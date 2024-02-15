import React from 'react';
import {HeaderComponent} from "@/components";
type FrontendLayoutProps = {
    children: React.ReactNode,
};
const FrontendLayout = ({ children }: FrontendLayoutProps) => {
    return (
        <div className={"h-screen bg-white w-full"}>
            <HeaderComponent/>
            <div className={"w-[70%] m-auto my-12"}>{children}</div>
        </div>
    );
};

export default FrontendLayout;