import React, {useState} from 'react';
import {Checkbox, Input} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

const TopFilterWindow = () => {
    const [hideSolved, setHideSolved] = useState(false);
    const [showSaved, setShowSaved] = useState(false);
    const [searchValue, setSearchValue] = useState("");

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
                    <Input
                        label="Title"
                        variant={"bordered"}
                        value={searchValue}
                        onValueChange={setSearchValue}
                        classNames={{
                            inputWrapper:" border border-success group-data-[focus=true]:border-blue text-white ",
                            label:"text-white text-lg",
                            innerWrapper:"text-lg text-center group-data-[has-label=true]:items-center",
                            input: "text-lg"
                        }}
                        endContent={
                            <FaSearch className={"text-success text-lg"}/>
                        }
                    />

                </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default TopFilterWindow;