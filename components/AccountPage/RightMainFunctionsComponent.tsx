import React, {useState} from 'react';
import UserTabsComponents from "@/components/AccountPage/UserTabsComponents";

const RightMainFunctionsComponent = () => {

    const [selected, setSelected] = useState("edit-account");

    return (
        <div className={"bg-white col-span-2 rounded-md"}>
            <UserTabsComponents selected={selected} setSelected={setSelected}/>
        </div>
    );
};

export default RightMainFunctionsComponent;