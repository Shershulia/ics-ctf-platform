import React from 'react';
import {MyAccountDropDown} from "@/components";

const HeaderComponent = () => {
    return (
        <div className={"w-full bg-black py-4"}>
            <div className={"w-[70%] m-auto flex justify-between items-center"}>
                <p className={"text-white font-bold"}>CTF ICS/OT</p>
                <MyAccountDropDown/>
            </div>

        </div>
    );
};

export default HeaderComponent;