import React, {ChangeEvent, useState} from 'react';
import {Pagination,Select, SelectItem} from "@nextui-org/react";

const SortTopFilterComponent = () => {
    const filters = ["Date", "Points" , "Difficulties"]
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState(filters[0]);

    const handleSelectionChange = (e : ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };
    return (
        <div className={"bg-black w-full rounded-md py-4 px-8 flex justify-between items-center"}>
            <div className={"flex justify-center items-center gap-10"}>
                <p className={"text-white font-bold text-xl text-center mb-2"}>Sort</p>
                <Select
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
                total={10}
                color="primary"
                page={currentPage}
                onChange={setCurrentPage}
            />
        </div>
    );
};

export default SortTopFilterComponent;