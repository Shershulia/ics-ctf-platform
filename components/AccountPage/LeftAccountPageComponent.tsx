import React from 'react';

type LeftAccountProps = {
   name : string | null;
   email:string | null;
}

const LeftAccountPageComponent = ({name, email} : LeftAccountProps ) => {

    return (
        <div className={"bg-black w-full rounded-md py-4 px-8 flex flex-col justify-center items-center "}>
            <div className={"text-center my-4"}>
                <p className={"text-white text-2xl font-bold"}>Name: {name}</p>
                <p className={"text-white"}>Email: {email}</p>
                {name==="undefined" && email==="undefined"  && (<p className={"text-white font-bold mt-2"}>You should enter your name and email</p>)}
            </div>

        </div>
    );
};

export default LeftAccountPageComponent;