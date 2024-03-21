import React, {useState, useEffect, useRef, ChangeEvent} from 'react';
import axios from "axios";
import {Select, SelectItem} from "@nextui-org/react";
import {prisma} from "@/lib/prisma";
type TerminalVMPageProps = {
    problemsFromBack: number[];
};

const TerminalVMPage = ({problemsFromBack} : TerminalVMPageProps) => {
    const [problem, setProblem] = useState(problemsFromBack[0]);

    const [command, setCommand] = useState<string>('');
    const [history, setHistory] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null); // For managing focus




    useEffect(() => {
        const focusInput = (event: MouseEvent) => {
            if (inputRef.current && event.target !== inputRef.current) {
                inputRef.current.focus();
            }
        };

        // Attach the event listener to document
        document.addEventListener('click', focusInput);

        // Cleanup the event listener
        return () => document.removeEventListener('click', focusInput);
    }, []);

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus(); // Automatically focus the input on render and after every re-render
    });

    const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Simulating an API call
            // Note: Replace this with your actual fetch request
            const data : { output: string; error?: string; } = await axios.post("/api/test-vm",
                {command:  command.trim(), id:problem})
                .then((response) => {
                    console.log(response.data);
                    return response.data;
                })
                .catch((error) => {
                    console.log(error.response.data.error)
                    return {output: error.response.data.error};
             });
            // Update command history
            setHistory((prevHistory) => [...prevHistory, `${command}`, data.output]);
            setCommand('');

            // Keep the input focused after submitting a command
            event.preventDefault();
            if (inputRef.current) inputRef.current.focus();
        }
    };

    const handleSelectionChange = (e : ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        // @ts-ignore
        setProblem(e.target.value);
    };
    return (
        <div className="bg-black min-h-screen text-white font-mono">

            <div className={"flex justify-center items-center"}>
                <p className="text-xl text-white truncate m-2 w-1/12">Opg # </p>
                <Select
                    variant="flat"
                    selectedKeys={[problem]}
                    classNames={{
                        label: "group-data-[filled=true]:-translate-y-5 text-primary",
                        trigger: " border-2 border-primary rounded-2xl bg-black text-primary",
                        listboxWrapper: "max-h-[400px]",
                        value:"text-primary group-data-[has-value=true]:text-primary",
                        mainWrapper: "w-[150px] bg-black mt-4",
                    }}
                    color={"default"}
                    onChange={(event)=>{handleSelectionChange(event)} }
                >
                    {problemsFromBack.map((problem) => (
                        <SelectItem key={problem} value={problem}>
                            {problem}
                        </SelectItem>
                    ))}
                </Select>
            </div>

            <div className="p-4">
                {history.map((line, index) => (
                    <div key={index} className="text-green-500">{line}</div>
                ))}
                <input
                    ref={inputRef}
                    className="bg-black text-white w-full focus:outline-none"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
            </div>
        </div>
    );
};

export default TerminalVMPage;
export async function getServerSideProps() {
    const problems = await prisma.problem.findMany();

    return {
        props: {
            problemsFromBack: JSON.parse(JSON.stringify(problems.map((problem) => (problem.id.toString())))),
        }
    };
    };