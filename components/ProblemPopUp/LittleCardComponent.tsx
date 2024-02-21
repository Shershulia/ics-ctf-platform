import React from 'react';
import {IProblem} from "@/ITypes/IProblem";
import {DisplableCard, PopUp} from "@/components";
type LittleCardProps = {
    problem: IProblem,
    width?:string,
    height?:string
};
//Default width is "" if its not provided in the props
const LittleCardComponent = ({problem, width = "", height = ""} : LittleCardProps) => {
    const [showPopUp, setShowPopUp] = React.useState(false);
    const triggerPopUp = () => {
        setShowPopUp(previousState => !previousState);
    }
    return (
        <div>
            <div className={`bg-white border p-4 border-2 rounded-md 
        overflow-hidden flex flex-col justify-between cursor-pointer ${width} ${height}` } onClick={triggerPopUp}>
                <div className={"flex justify-between items-center"}>
                    <p>{problem.category}</p>
                    <p>{problem.points} pts.</p>
                </div>
                <p className={"text-xl font-bold truncate"}>{problem.title}</p>
                <p className={"text-ellipsis  overflow-hidden max-h-28"}>{problem.description}</p>
                <div className={"flex justify-between items-center"}>
                    <p className={`
                
                ${(problem.difficulty==="Hard") && "text-red"}
                ${(problem.difficulty==="Medium") && "text-yellow"}
                ${(problem.difficulty==="Easy") && "text-success"}
                font-bold
                `}>{problem.difficulty}</p>
                </div>
            </div>
            <PopUp trigger={showPopUp} setTrigger={triggerPopUp}>
                <DisplableCard problem={problem} />
            </PopUp>
        </div>

    );
};

export default LittleCardComponent;