import React from 'react';
import {MyAccountDropDown} from "@/components";
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div className={"w-full bg-black py-4"}>
            <div className={"w-[70%] m-auto flex justify-between items-center"}>
                <Link className={"cursor-pointer"} href={"/"}>
                    <p className={"text-white font-bold"}>CTF ICS/OT</p>
                </Link>
                <MyAccountDropDown/>
            </div>

        </div>
    );
};

export default HeaderComponent;