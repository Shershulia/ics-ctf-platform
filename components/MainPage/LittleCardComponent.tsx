import React from 'react';
import {IProblem} from "@/ITypes/IProblem";
type LittleCardProps = {
    problem: IProblem,
    width?:string,
    height?:string,
};
//Default width is "" if its not provided in the props
const LittleCardComponent = ({problem, width = "", height = ""} : LittleCardProps) => {
    return (
        <div className={`bg-white border p-8 border-2 rounded-md ${width} ${height} 
        overflow-hidden flex flex-col justify-between cursor-pointer` }>

            <div className={"flex justify-between items-center"}>
                <p>{problem.category}</p>
                <p>{problem.points} pts.</p>
            </div>
            <p className={"text-xl font-bold text-clip overflow-hidden"}>{problem.title}</p>
            <p className={"text-ellipsis  overflow-hidden h-1/2"}>{problem.description}</p>
            <div className={"flex justify-between items-center"}>
                <p className={`
                
                ${(problem.difficulty==="Hard") && "text-red"}
                ${(problem.difficulty==="Medium") && "text-yellow"}
                ${(problem.difficulty==="Easy") && "text-green"}
                font-bold
                `}>{problem.difficulty}</p>
            </div>

        </div>
    );
};

export default LittleCardComponent;