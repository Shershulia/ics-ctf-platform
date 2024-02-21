import React from 'react';
import {LittleCardComponent} from "@/components";
import {IProblem} from "@/ITypes/IProblem";
type DisplayCardsProps = {
    problems: IProblem[],
    width?:string,
    height?:string,
};
const DisplayCardsComponent = ({problems, width = "", height = ""} : DisplayCardsProps) => {

    return (
        <div className={"h-full w-full"}>

            <div className="grid gap-4 grid-cols-3">
                {problems.map((problem : IProblem, index : number) => {
                        return (
                            <LittleCardComponent
                                                 problem={problem}
                                                 width={width}
                                                 height={height}

                                                 key={index}/>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default DisplayCardsComponent;