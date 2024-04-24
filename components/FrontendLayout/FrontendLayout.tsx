import React from 'react';
import {HeaderComponent} from "@/components";
type FrontendLayoutProps = {
    children: React.ReactNode,
};
const FrontendLayout = ({ children }: FrontendLayoutProps) => {
    return (
        <div className={"min-h-screen bg-gray w-full "}>
            <HeaderComponent/>
            <div className={"w-[70%] m-auto mt-14 pb-14"}>{children}</div>
        </div>
    );
};

export default FrontendLayout;