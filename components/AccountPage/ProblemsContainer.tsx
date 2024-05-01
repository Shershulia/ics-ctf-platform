import { IProblem } from '@/ITypes/IProblem';
import {Button} from "@nextui-org/react";
import { useEffect, useState } from 'react';
import axios from "axios";
import {Spinner} from "@nextui-org/react";

type ProblemContainerProps = {
}


const ProblemContainer = ({} : ProblemContainerProps) => {
    
    const [problems, setProblems] = useState<IProblem[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const fetchProblems = () => {
        if (typeof window !== 'undefined') {
            const solvedIds = JSON.parse(localStorage.getItem(`solved`) || '[]');
            setIsLoading(true);
            axios.post("/api/problems/solved",{ids : solvedIds}).then(res=>{
                setProblems(res.data.problems);
                setIsLoading(false)
            })
        }
    }
    useEffect(()=>{
        fetchProblems()
    },[])
    
    const cleanProblem = (id: number) =>{
        const solvedIds = JSON.parse(localStorage.getItem(`solved`) || '[]');

        const index = solvedIds.indexOf(id);
        if (index > -1) { 
            solvedIds.splice(index, 1); 
        }

        localStorage.setItem(`solved`, JSON.stringify(solvedIds));
        fetchProblems()

    }

    return (
        <div className={"flex flex-col gap-4 my-4 lg:w-[80%] w-[90%] mx-auto"}> 
            <h1 className='text-center text-xl font-bold'>Your solved problems: </h1>
            {isLoading ? (<Spinner color="primary"/>)
                :
                (<>
                    {problems.length ? 
                        (problems.map(problem => (
                        <div className='w-full border-l border-y rounded-2xl flex justify-between items-center border-success'>
                            <p className='pl-4 truncate w-2/3'>{problem.id}.{problem.title}</p>
                            <Button color="primary" 
                                variant="solid" 
                                size={"lg"} 
                                className={"py-7"} 
                                onClick={()=>{cleanProblem(problem.id)}}>
                                    Solve again
                            </Button>  
                        </div>
                    ))) : (
                        <p className='text-center'>You didn't solve any problems yet</p>
                    )}
                </>

                )}
        </div>
    )
}

export default ProblemContainer