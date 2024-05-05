import React, {Dispatch, SetStateAction} from 'react';
import StatisticsComponent from "@/components/AccountPage/StatisticsComponent";
import {Progress} from "@nextui-org/react";
import CreateDiplomaComponent from "@/components/AccountPage/CreateDiplomaComponent";
type AchievementsComponentProps = {
    name? : string | null;
    email?:string | null;
    myPoints?: number;
    totalPoints?: number;
}
const AchievementsComponent = ({name, email, myPoints=0, totalPoints=0}: AchievementsComponentProps) => {

    return (
        <div className='h-full flex flex-col justify-center items-center'>
            <div className='flex lg:w-[80%] w-[90%] h-full flex-col justify-center gap-12 items-center'>
                <div className='w-full'>
                    <h1 className='text-center text-xl font-bold my-4'>Statistics: </h1>
                    <StatisticsComponent/>
                </div>
                <div className='w-full'>
                    <h1 className='text-center text-xl font-bold my-4'>Your solved problems: </h1>
                    <Progress
                        label="Solved problems"
                        aria-label="Downloading..."
                        size="md"
                        value={myPoints / totalPoints * 100}
                        color="success"
                        showValueLabel={true}
                        className="w-full"
                    />
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h1 className='text-center text-xl font-bold my-4'>Assign your diploma: </h1>
                    <CreateDiplomaComponent
                        //@ts-ignore
                        name={name}
                        //@ts-ignore
                        email={email}
                        problemsSolved={myPoints / totalPoints * 100}

                    />


                </div>
            </div>
        </div>
    );
};

export default AchievementsComponent;