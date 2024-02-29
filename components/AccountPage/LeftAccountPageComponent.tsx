import React from 'react';
import {Avatar, Button} from "@nextui-org/react";
import {IUser} from "@/ITypes/IUser";
type AccountDisplayProps ={
    user: IUser,
}
const LeftAccountPageComponent = ({user} : AccountDisplayProps) => {
    return (
        <div className={"bg-black w-full rounded-md py-4 px-8 flex flex-col justify-center items-center "}>
            <Avatar showFallback src={`${user.avatar}`}  className="w-24 h-24"/>
            <div className={"text-center my-4"}>
                <h1 className={"text-white text-2xl font-bold"}>{user.name}</h1>
                <p className={"text-white"}>{user.email}</p>
            </div>
            <Button color="primary" variant="solid" className={"w-full mb-4"}>
                <p className={"text-black font-bold text-lg"}>Update password</p>
            </Button>
            <Button color="danger" variant="ghost" className={"w-full"}>
                <p className={"text-white font-bold text-lg"}>Delete account</p>
            </Button>

        </div>
    );
};

export default LeftAccountPageComponent;