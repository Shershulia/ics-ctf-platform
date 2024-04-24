import { IProblem } from '@/ITypes/IProblem';
import {Button} from "@nextui-org/react";
import { useEffect, useState } from 'react';
import axios from "axios";

type ProblemContainerProps = {
}


const ProblemContainer = ({} : ProblemContainerProps) => {
    
    const [problems, setProblems] = useState<IProblem[]>([])
    useEffect(()=>{
        if (typeof window !== 'undefined') {
            const solvedIds = JSON.parse(localStorage.getItem(`solved`) || '[]');
            axios.post("/api/problems/solved",{ids : solvedIds}).then(res=>{
                setProblems(res.data.problems)
            })

        }
    },[])
    
    const cleanProblem = (id: number) =>{

    }

    return (
        <div className={"flex flex-col gap-4 my-4 w-[80%] mx-auto"}> 
            <h1>You solved problems: </h1>
            {problems.length && problems.map(problem => (
                <div className='w-full border-l border-y rounded-2xl flex justify-between items-center border-success'>
                    <p className='pl-4'>{problem.id}.{problem.title}</p>
                    <Button color="primary" 
                        variant="solid" 
                        size={"lg"} 
                        className={"py-7"} 
                        onClick={()=>{cleanProblem(problem.id)}}>
                            Solve again
                    </Button>  
                </div>
            ))}
        </div>
    )
}

export default ProblemContainer