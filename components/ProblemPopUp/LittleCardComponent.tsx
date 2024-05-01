import React, { useState } from 'react';
import {IProblem} from "@/ITypes/IProblem";
import {DisplableCard} from "@/components";
import {Modal, ModalContent, useDisclosure} from "@nextui-org/react";

import { FaRegBookmark, FaBookmark  } from "react-icons/fa";


type LittleCardProps = {
    problem: IProblem,
    width?:string,
    height?:string
};
//Default width is "" if its not provided in the props
const LittleCardComponent = ({problem, width = "", height = ""} : LittleCardProps) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <div className={"relative"}>
            <div className={`
        ${localStorage.getItem(`solved`) !== null && JSON.parse(localStorage.getItem(`solved`) || '[]').includes(problem.id)
                ? (`bg-gray z-50 absolute w-full h-full cursor-not-allowed opacity-50`):("")}    
        ` }  onClick={onOpen}></div>

            <div className={`bg-white border lg:p-4 p-2 border-2 rounded-md 
        overflow-hidden flex flex-col justify-between z-10 ${width} ${height} 
        ${localStorage.getItem(`solved`) !== null && JSON.parse(localStorage.getItem(`solved`) || '[]').includes(problem.id) 
                    ? ("cursor-not-allowed bg-gray-500"):("cursor-pointer bg-white")}    
        ` }
                 onClick={onOpen}>

                <div className={"flex justify-between items-center"}>
                    <p className={"lg:w-2/3 truncate w-full"}>{problem.category.name}</p>
                    <p className='hidden lg:block'>{problem.points} pts.</p>
                    <p className='font-bold lg:hidden block'>{problem.points}</p>
                </div>
                <p className={"text-xl font-bold truncate"}>{problem.title}</p>
                <p className={"text-ellipsis  overflow-hidden h-28"}>{problem.description}</p>
                <div className={"flex justify-between items-center"}>
                    <p className={`
                    ${(problem.difficulty.name==="Hard") && "text-red"}
                    ${(problem.difficulty.name==="Medium") && "text-yellow"}
                    ${(problem.difficulty.name==="Easy") && "text-success"}
                    font-bold
                    `}>{problem.difficulty.name}</p>

                    <div>                    
                        {localStorage.getItem(`saved`) !== null && JSON.parse(localStorage.getItem(`saved`) || '[]').includes(problem.id) ?
                            (<FaBookmark/>) 
                            : (<FaRegBookmark/>)}
                            </div>
                </div>
            </div>


            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                size={"2xl"}
                backdrop={"blur"}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <div className={"lg:m-12 m-6"}>
                            <DisplableCard problem={problem} onClose={onClose}  />
                        </div>
                    )}
                </ModalContent>
            </Modal>


        </div>

    );
};

export default LittleCardComponent;