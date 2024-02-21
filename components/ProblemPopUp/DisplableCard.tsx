import React from 'react';
import {IProblem} from "@/ITypes/IProblem";
type PopUpProps = {
    problem: IProblem,
};
const DisplableCard = ({problem}:PopUpProps) => {
    return (
        <div>
            <p>{problem.title}</p>
        </div>
    );
};

export default DisplableCard;