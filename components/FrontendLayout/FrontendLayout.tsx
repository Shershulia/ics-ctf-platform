import React from 'react';
import {HeaderComponent} from "@/components";
type FrontendLayoutProps = {
    children: React.ReactNode,
};
const FrontendLayout = ({ children }: FrontendLayoutProps) => {
    return (
        <div className={"min-h-screen bg-gray w-full "}>
            <HeaderComponent/>
            <div className={"xl:w-[80%] lg:w-[90%] w-[95%] m-auto lg:mt-14 lg:pb-14 mt-6 pb-6"}>{children}</div>
        </div>
    );
};

export default FrontendLayout;