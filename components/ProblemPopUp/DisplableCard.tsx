import React, {useState} from 'react';
import {IProblem} from "@/ITypes/IProblem";
import {Button, Divider, Input, Pagination, ScrollShadow} from "@nextui-org/react";
import StarRatingComponent from "@/components/ProblemPopUp/StarRatingComponent";
type PopUpProps = {
    problem: IProblem,
};
const DisplableCard = ({problem}:PopUpProps) => {
    const [currentHint, setCurrentHint] = useState(1);
    const [searchValue, setSearchValue] = useState("");

    return (
        <div>
            <div className={"flex justify-between items-center mb-4"}>
                <p className={"font-bold truncate text-2xl w-2/3"}>{problem.title}</p>
                <div className={"flex gap-2"}>
                    <p>Not solved</p>
                    <div className={"w-px bg-black"}/>
                    <p className={"font-bold"}>{problem.points} pts.</p>
                </div>
            </div>

            <div className={"flex gap-4"}>
                <div className={`p-2 
                         ${(problem.difficulty==="Hard") && "bg-red"}
                         ${(problem.difficulty==="Medium") && "bg-yellow"}
                         ${(problem.difficulty==="Easy") && "bg-success"}
                         rounded-md text-white font-bold`}>
                    {problem.difficulty}</div>
                <div className={"p-2 bg-gray rounded-md"}>{problem.category}</div>
            </div>

            <div className={"h-px bg-gray my-4"}/>

            <div className={"flex justify-between"}>
                <div className={"w-3/5"}>
                    <p className={"font-bold text-2xl"}>Description</p>

                    <ScrollShadow size={40} hideScrollBar  className="w-full h-48">
                        <p className={"my-4"}>{problem.description}</p>
                    </ScrollShadow>
                </div>
                {problem.hints && (<div className={"w-2/5  flex flex-col justify-start items-center"}>
                    <p className={"font-bold text-2xl mb-4"}>Hints</p>
                        <Pagination
                            total={problem.hints?.length}
                            color="primary"
                            page={currentHint}
                            onChange={setCurrentHint}
                        />
                    <p className={"text-ellipsis overflow-hidden my-4"}>{problem.hints[currentHint-1]}</p>

                </div>)}

            </div>

            <div className={"h-px bg-gray my-4"}/>

            <div className={"flex gap-4 mb-4"}>
                <Input
                    label="CTF-{ANSWER  HERE}"
                    variant={"bordered"}
                    value={searchValue}
                    onValueChange={setSearchValue}
                    classNames={{
                        inputWrapper:" border border-success group-data-[focus=true]:border-blue text-black ",
                        label:"text-gray text-lg",
                        innerWrapper:"text-lg text-center group-data-[has-label=true]:items-center",
                        input: "text-lg"
                    }}
                />
                <Button color="primary" variant="solid" size={"lg"} className={"py-7"}>
                    Send Flag
                </Button>
            </div>

            <div className={"flex gap-4 flex-col"}>
                <p className={"font-bold text-2xl mb-4"}>Rate</p>
                <div>
                    <StarRatingComponent />
                </div>
            </div>


        </div>
    );
};

export default DisplableCard;