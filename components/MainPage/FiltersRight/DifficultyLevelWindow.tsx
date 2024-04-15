import React, {useEffect, useState} from 'react';
import {Tabs, Tab} from "@nextui-org/react";
import {Key} from "@react-types/shared";
import axios, {AxiosResponse} from "axios";
import {ICategory} from "@/ITypes/ICategory";
import {IDifficulty} from "@/ITypes/IDifficulty";
type DifficultyLevelWindowProps = {
    difficulty?: number,
    setDifficulty?: (value: number) => void,
};

const DifficultyLevelWindow = ({difficulty,setDifficulty = ()=>{}}: DifficultyLevelWindowProps) => {
    //Basic categories
    const allDifficulties : IDifficulty = {
        id: 0,
        name: "All"
    }
    const [difficulties, setDifficulties] = useState([allDifficulties]
    );


    useEffect(() => {
        axios.get("/api/difficulties")
            .then((res: AxiosResponse) => {
                const { difficulties } = res.data;
                const sortedCategories = difficulties
                    .sort((a: IDifficulty, b: IDifficulty) => a.id - b.id)
                setDifficulties([allDifficulties, ...sortedCategories]);
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
                            // @ts-ignore
                            onSelectionChange={(message : Key) =>  setDifficulty(String(message))}
                            aria-label="Tabs variants"
                       classNames={{
                           tabList: "border-success",
                       }}>
                     {difficulties.map((difficulty) => (
                         <Tab key={difficulty.id} title={difficulty.name} aria-label="Tab variants"/>
                     ))}
                </Tabs>
            </div>
        </div>
    );
};

export default DifficultyLevelWindow;