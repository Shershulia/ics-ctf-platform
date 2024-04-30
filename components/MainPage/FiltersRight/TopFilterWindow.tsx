import React, {useEffect, useState} from 'react';
import {Checkbox, Input} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";

type TopFilterProps = {
    searchValue?: string,
    setSearchValue?: (value: string) => void,
    hideSolved: boolean,
    setHideSolved: (value: boolean)=>void,
    showSaved: boolean,
    setShowSaved: (value: boolean)=>void,

};

const TopFilterWindow = ({searchValue, setSearchValue, setHideSolved, hideSolved, showSaved ,setShowSaved } : TopFilterProps) => {
    return (
        <div className={"bg-black w-full rounded-md py-4 px-8"}>
            <p className={"text-white font-bold text-xl text-center mb-2"}>Filters</p>
                <div className={"flex flex-col justify-center gap-2"}>
                <Checkbox isSelected={hideSolved}
                          aria-label="Checkbox variants"
                          onValueChange={setHideSolved}
                          color="success" size="lg"
                          classNames={{
                              base:"gap-2",
                              wrapper: "before:border-success group-data-[hover=true]:before:bg-darkGray ",
                              label: "w-full text-white",
                          }}
                >
                    Unsolved
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
                    Saved
                </Checkbox>
                    <Input
                        label="Title"
                        variant={"bordered"}
                        value={searchValue}
                        onValueChange={setSearchValue}
                        aria-label="Input variants"

                        classNames={{
                            inputWrapper:" border border-success group-data-[focus=true]:border-blue text-white ",
                            label:"text-white text-lg",
                            innerWrapper:"text-lg text-center group-data-[has-label=true]:items-center",
                            input: "text-lg"
                        }}
                        endContent={
                            <FaSearch data-testid="svg-image" className={"text-success text-lg"}/>
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