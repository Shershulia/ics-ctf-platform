import React, {useEffect, useState} from 'react';
import {IProblem} from "@/ITypes/IProblem";
import {Button, Divider, Input, Pagination, ScrollShadow} from "@nextui-org/react";
import StarRatingComponent from "@/components/ProblemPopUp/StarRatingComponent";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { FaRegBookmark, FaBookmark  } from "react-icons/fa";

type PopUpProps = {
    problem: IProblem,
    onClose?: () => void ,
};
const DisplableCard = ({problem, onClose}:PopUpProps) => {
    const [currentHint, setCurrentHint] = useState(1);
    const [flag, setFlag] = useState("");
    const [isInSaved, setIsInSaved] = useState(false);

    useEffect(()=>{
        setIsInSaved(JSON.parse(localStorage.getItem(`saved`) || '[]').includes(problem.id))
    },[problem.id])

    const closeWindowSolved = () => {
        toast.success("Good job! You have solved the problem")
        if (onClose) {
            setTimeout(() => {
                onClose();
            }, 1000);
    }
    }
    
    
    const closeWindowError = async (msg : string) => {
        if (onClose) {
            toast.error("Good job! You have solved the problem");
            if (onClose) {
                setTimeout(() => {
                    onClose();
                }, 1000);
        }
        }
    }

    const handleSendFlag = () => {
        axios.get(`/api/checkSolution?problemId=${problem.id}&solution=${flag}`).then((response) => {
            if (response.data.decision){
                const solved = localStorage.getItem(`solved`);
                if(solved){
                    let solvedArray = JSON.parse(solved);
                    let newSolvedArray = [...solvedArray, problem.id];
                    if(solvedArray.includes(problem.id)){
                        closeWindowError("You have already solved this problem");
                    }else {
                        localStorage.setItem(`solved`, JSON.stringify(newSolvedArray));
                        closeWindowSolved();
                    }
                }else{
                    let newSolvedArray = [problem.id];
                    localStorage.setItem(`solved`, JSON.stringify(newSolvedArray));
                    closeWindowSolved();
                }
            }else {
                toast.error("Wrong flag! Try again")
            }
        });
    }

    const setSaved = () => {
        const saved = localStorage.getItem(`saved`);
        if (saved) {
            let solvedArray = JSON.parse(saved);
            if (solvedArray.includes(problem.id)) {
                let newSolvedArray = solvedArray.filter((id : any) => id !== problem.id);
                localStorage.setItem(`saved`, JSON.stringify(newSolvedArray));
            } else {
                let newSolvedArray = [...solvedArray, problem.id];
                localStorage.setItem(`saved`, JSON.stringify(newSolvedArray));
            }
        } else {
            let newSolvedArray = [problem.id];
            localStorage.setItem(`saved`, JSON.stringify(newSolvedArray));
        }
        setIsInSaved(prev => !prev);
    }
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
            <div className={`flex lg:flex justify-between items-center mb-4`}>
                <p className={"font-bold lg:text-2xl text-xl w-2/3"}>{problem.id}. {problem.title}</p>
                <div className='flex flex justify-end lg:gap-8 gap-4'>
                    <button onClick={setSaved}>
                        {isInSaved ?
                                (<FaBookmark/>)  :
                                (<FaRegBookmark/>)
                            }
                    </button>                   
                    <p className={"font-bold truncate"}>{problem.points} pts.</p>
                </div>
            </div>

            <div className={"flex flex-wrap gap-4"}>
                <div className={`p-2 
                         ${(problem.difficulty.name==="Hard") && "bg-red"}
                         ${(problem.difficulty.name==="Medium") && "bg-yellow"}
                         ${(problem.difficulty.name==="Easy") && "bg-success"}
                         rounded-md text-white font-bold`}>
                    {problem.difficulty.name}</div>
                <div className={"p-2 bg-gray rounded-md"}>{problem.category.name}</div>
                {localStorage.getItem(`solved`) !== null && JSON.parse(localStorage.getItem(`solved`) || '[]').includes(problem.id) ?
                        (<p className={"p-2 bg-lime-600 rounded-md text-white"}>Solved</p>) :
                        (<p className={"p-2 bg-red rounded-md text-white"}>Not solved</p>)
                    }
            </div>

            <div className={"h-px bg-gray my-4"}/>

            <div className={"flex justify-between"}>
            <div className={` ${ problem.hints && problem.hints?.length > 0 ? 'w-3/5' : 'w-full'}`}>
                    <p className={"font-bold text-2xl"}>Description</p>

                    <ScrollShadow size={40} hideScrollBar  className="w-full h-48">
                        <p className={"my-4"}>{problem.description}</p>
                    </ScrollShadow>
                </div>
                {problem.hints && problem.hints?.length>0 && (
                <div className={"w-2/5  flex flex-col justify-start items-center text-center text-sm ml-2"}>
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
                    role={"input-ctf"}
                    label="Flag"
                    variant={"bordered"}
                    value={flag}
                    onValueChange={setFlag}
                    classNames={{
                        inputWrapper:" border border-success group-data-[focus=true]:border-blue text-black ",
                        label:"text-gray text-lg",
                        innerWrapper:"text-lg text-center group-data-[has-label=true]:items-center",
                        input: "text-lg"
                    }}
                />
                <Button color="primary" variant="solid" size={"lg"} className={"py-7"} onClick={handleSendFlag}>
                    Send Flag
                </Button>
            </div>

            {/* <div className={"flex gap-4 flex-col"}>
                <p className={"font-bold text-2xl mb-4"}>Rate</p>
                <div>
                    <StarRatingComponent />
                </div>
            </div> */}


        </div>
    );
};

export default DisplableCard;