import React, {useState} from 'react';
import {Tabs, Tab} from "@nextui-org/react";
import {Key} from "@react-types/shared";

const DifficultyLevelWindow = () => {
    const [selected, setSelected] = useState("Easy");

    return (
        <div className={"bg-black w-full rounded-md py-4 px-8"}>
            <p className={"text-white font-bold text-xl text-center mb-2"}>Difficulties</p>
            <div className={"flex flex-col justify-center gap-2"}>
                 <Tabs fullWidth={true}
                            variant={"bordered"}
                            selectedKey={selected}
                            onSelectionChange={(message: Key) => setSelected(String(message))}
                            aria-label="Tabs variants"
                       classNames={{
                           tabList: "border-success",
                       }}>
                    <Tab key="Easy" title="Easy"/>
                    <Tab key="Medium" title="Medium"/>
                    <Tab key="Hard" title="Hard"/>
                </Tabs>
            </div>
        </div>
    );
};

export default DifficultyLevelWindow;