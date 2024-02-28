import React, {useEffect, useState} from 'react';
import {LittleCardComponent} from "@/components";
import {IProblem} from "@/ITypes/IProblem";
import axios, {AxiosResponse} from "axios";
type DisplayCardsProps = {
    width?:string,
    height?:string,
};
const DisplayCardsComponent = ({width = "", height = ""} : DisplayCardsProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [problems, setProblems] = useState<IProblem[]>([]);
    useEffect(() => {
        axios.get("/api/problems").then((response: AxiosResponse<{problems:IProblem[]}>) => {
            console.log(response.data);
            setProblems(response.data.problems);
            setIsLoading(false);

        });
        console.log(problems);
    } , []);

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