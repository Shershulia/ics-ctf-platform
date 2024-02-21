import React from 'react';
import {LittleCardComponent, PopUp} from "@/components";
import {IProblem} from "@/ITypes/IProblem";
type DisplayCardsProps = {
    problems: IProblem[],
    width?:string,
    height?:string,
};
const DisplayCards = ({problems, width = "", height = ""} : DisplayCardsProps) => {
    const [showPopUp, setShowPopUp] = React.useState(false);
    const triggerPopUp = () => {
        setShowPopUp(previousState => !previousState);
    }
    return (
        <div className={"h-full w-full"}>
            <div className="grid gap-4 grid-cols-3">
                {problems.map((problem : IProblem, index : number) => {
                        return (
                            <LittleCardComponent problem={problem} width={width} height={height} triggerPopUp={triggerPopUp} key={index}/>
                        );
                    }
                )}
            </div>
            <PopUp trigger={showPopUp} setTrigger={triggerPopUp}>
                <p className={"text-white"}>PopUp</p>
            </PopUp>
        </div>
    );
};

export default DisplayCards;