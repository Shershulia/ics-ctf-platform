import React, {useEffect, useState} from 'react';
import {Tabs, Tab} from "@nextui-org/react";
import {Key} from "@react-types/shared";
import axios, {AxiosResponse} from "axios";
import {ICategory} from "@/ITypes/ICategory";
import {IDifficulty} from "@/ITypes/IDifficulty";
type DifficultyLevelWindowProps = {
    difficulty?: string,
    setDifficulty: (value: string) => void,
};

const DifficultyLevelWindow = ({difficulty,setDifficulty}: DifficultyLevelWindowProps) => {
    const [difficulties, setDifficulties] = useState(["All","Easy", "Medium", "Hard"]
    );


    useEffect(() => {
        axios.get("/api/difficulties")
            .then((res: AxiosResponse) => {
                const { difficulties } = res.data;
                const sortedCategories = difficulties
                    .sort((a: IDifficulty, b: IDifficulty) => a.id - b.id)
                    .map((category: ICategory) => category.name);
                setDifficulties(["All", ...sortedCategories]);
                console.log(difficulties)
            })
            .catch((error) => {
                console.error('Error fetching categories:', error.message);
            });
    }, []);
    return (
        <div className={"bg-black w-full rounded-md py-4 px-8"}>
            <p className={"text-white font-bold text-xl text-center mb-2"}>Difficulties</p>
            <div className={"flex flex-col justify-center gap-2"}>
                 <Tabs fullWidth={true}
                            variant={"bordered"}
                            selectedKey={difficulty}
                            onSelectionChange={(message : Key) =>  setDifficulty(String(message))}
                            aria-label="Tabs variants"
                       classNames={{
                           tabList: "border-success",
                       }}>
                     {difficulties.map((difficulty) => (
                         <Tab key={difficulty} title={difficulty}/>
                     ))}
                </Tabs>
            </div>
        </div>
    );
};

export default DifficultyLevelWindow;