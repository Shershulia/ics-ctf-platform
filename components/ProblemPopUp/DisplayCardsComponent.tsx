import React, {useEffect, useState} from 'react';
import {LittleCardComponent} from "@/components";
import {IProblem} from "@/ITypes/IProblem";
import axios, {AxiosResponse} from "axios";
type DisplayCardsProps = {
    width?:string,
    height?:string,
    category?: string,
    difficulty?: string,
    searchValue?: string,
};
const DisplayCardsComponent = ({width = "", height = "", difficulty , searchValue , category} : DisplayCardsProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [problems, setProblems] = useState<IProblem[]>([]);
    useEffect(() => {
        axios.get("/api/problems").then((response: AxiosResponse<{problems:IProblem[]}>) => {
            setProblems(response.data.problems);
            setIsLoading(false);
            console.log(difficulty, searchValue, category);
        });
    } , [difficulty,searchValue,category]);

    return (
        <div className={"h-full w-full"}>
            {isLoading ?
                <div>Loading...</div>
                :(
                    <div className="grid gap-4 grid-cols-3">
                        {problems.length === 0 ? (
                            <div className={"text-center font-bold text-2xl"}>No problems found</div>
                        ) : (
                            problems.map((problem: IProblem, index: number) => {
                                return (
                                    <LittleCardComponent
                                        problem={problem}
                                        width={width}
                                        height={height}
                                        key={index}
                                    />
                                );
                            })
                        )}
                    </div>

                )}
        </div>
    );
};

export default DisplayCardsComponent;