import React from 'react';
import {IProblem} from "@/ITypes/IProblem";
import {PopUp} from "@/components";
type LittleCardProps = {
    problem: IProblem,
    width?:string,
    height?:string,
    triggerPopUp: () => void,
};
//Default width is "" if its not provided in the props
const LittleCardComponent = ({problem, width = "", height = "", triggerPopUp} : LittleCardProps) => {

    return (
        <div className={`bg-white border p-8 border-2 rounded-md 
        overflow-hidden flex flex-col justify-between cursor-pointer ${width} ${height}` } onClick={triggerPopUp}>
            <div className={"flex justify-between items-center"}>
                <p>{problem.category}</p>
                <p>{problem.points} pts.</p>
            </div>
            <p className={"text-xl font-bold truncate"}>{problem.title}</p>
            <p className={"text-ellipsis  overflow-hidden h-1/2"}>{problem.description}</p>
            <div className={"flex justify-between items-center"}>
                <p className={`
                
                ${(problem.difficulty==="Hard") && "text-red"}
                ${(problem.difficulty==="Medium") && "text-yellow"}
                ${(problem.difficulty==="Easy") && "text-success"}
                font-bold
                `}>{problem.difficulty}</p>
            </div>
        </div>
    );
};

export default LittleCardComponent;