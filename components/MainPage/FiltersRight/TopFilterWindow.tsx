import React, {useState} from 'react';
import {Checkbox} from "@nextui-org/react";

const TopFilterWindow = () => {
    const [hideSolved, setHideSolved] = useState(false);
    const [showSaved, setShowSaved] = useState(false);

    return (
        <div className={"bg-black w-full rounded-md py-4 px-8"}>
            <p className={"text-white font-bold text-xl text-center mb-2"}>Filters</p>
                <div className={"flex flex-col justify-center gap-2"}>
                <Checkbox isSelected={hideSolved}

                          onValueChange={setHideSolved}
                          color="success" size="lg"
                          classNames={{
                              base:"gap-2",
                              wrapper: "before:border-success group-data-[hover=true]:before:bg-darkGray ",
                              label: "w-full text-white",
                          }}
                >
                    Hide Solved
                </Checkbox>
                <Checkbox isSelected={showSaved}

                          onValueChange={setShowSaved}
                          color="success" size="lg"
                          classNames={{
                              base:"gap-2",
                              wrapper: "before:border-success group-data-[hover=true]:before:bg-darkGray ",
                              label: "w-full text-white",
                          }}
                >
                    Show Saved
                </Checkbox>
                </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default TopFilterWindow;