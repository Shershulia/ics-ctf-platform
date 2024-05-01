import React, {useEffect, useState} from 'react';
import {LittleCardComponent} from "@/components";
import {IProblem} from "@/ITypes/IProblem";
import axios, {AxiosResponse} from "axios";
type DisplayCardsProps = {
    width?:string,
    height?:string,
    isLoading:boolean,
    problems:IProblem[]
};
const DisplayCardsComponent = ({width = "", height = "", isLoading,problems} : DisplayCardsProps) => {


    return (
        <div className={"h-full w-full"}>
            {isLoading ?
                <div>Loading...</div>
                :(
                    <div className="grid gap-2 lg:gap-4 xl:grid-cols-3 grid-cols-2">
                        {problems.length === 0 ? (
                            <div className={"text-center font-bold lg:text-2xl text-md"}>No problems found</div>
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