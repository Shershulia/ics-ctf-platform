import React, {ChangeEvent, useEffect, useState} from 'react';
import {Pagination,Select, SelectItem} from "@nextui-org/react";
import axios from "axios";
type SortTopFilterProps = {
    setPage?: (value: number) => void,
    page?: number,
    totalProblems?: number,
    filter?: string,
    setFilter?: (value: string) => void,

}
const SortTopFilterComponent = ({setPage,page,totalProblems=9, filter, setFilter}:SortTopFilterProps) => {
    const filters = ["Date", "Points" , "Difficulties", "Id"]
    const totalPages = Math.ceil(totalProblems/9) || 1;
    const handleSelectionChange = (e : ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };



    return (
        <div className={"bg-black w-full rounded-md md:py-4 py-2 md:px-8 px-4 gap-2 flex justify-between items-center md:flex-row flex-col "}>
            <div className={"flex justify-center items-center gap-10 md:flex-row flex-col"}>
                <p className={"text-white font-bold text-xl text-center mb-2 md:block hidden"}>Sort</p>
                <Select
                    aria-label={"select"}
                    variant="flat"
                    selectedKeys={[filter]}
                    classNames={{
                        label: "group-data-[filled=true]:-translate-y-5 text-primary",
                        trigger: " border-2 border-primary rounded-2xl bg-black text-primary",
                        listboxWrapper: "max-h-[400px]",
                        value:"text-primary group-data-[has-value=true]:text-primary",
                        mainWrapper: "w-[150px] bg-black",
                    }}
                    color={"default"}
                    onChange={(event)=>{handleSelectionChange(event)}}
                >
                    {filters.map((filter) => (
                        <SelectItem key={filter} value={filter}>
                            {filter}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <Pagination
                aria-label={"pagination"}
                total={totalPages}
                color="primary"
                page={page}
                onChange={setPage}
            />
        </div>
    );
};

export default SortTopFilterComponent;