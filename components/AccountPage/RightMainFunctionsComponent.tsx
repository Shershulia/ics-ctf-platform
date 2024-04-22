import React, {useState} from 'react';
import UserTabsComponents from "@/components/AccountPage/UserTabsComponents";
import {Button, Input, Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";

const RightMainFunctionsComponent = () => {

    const [selected, setSelected] = useState("edit-account");
    const [name, setName] = useState(localStorage.getItem("user") || "")

    const setNameInLocalStorage = () =>{
        localStorage.setItem("name",name)
    }
    return (
        <div className={"bg-white rounded-md h-full"} style={{ height: '80vh' }}>
            <UserTabsComponents selected={selected} setSelected={setSelected}/>
            {selected === "edit-account" && 
            (<div className={"flex gap-4 my-4 w-[80%] mx-auto"}>
                <Input
                    label="Name"
                    variant={"bordered"}
                    value={name}
                    onValueChange={setName}
                    classNames={{
                        inputWrapper:" border border-success group-data-[focus=true]:border-blue text-black ",
                        label:"text-gray text-lg",
                        innerWrapper:"text-lg text-center group-data-[has-label=true]:items-center",
                        input: "text-lg"
                    }}
                />
                <Popover placement="right">
                <PopoverTrigger>
                    <Button color="primary" variant="solid" size={"lg"} className={"py-7"} onClick={setNameInLocalStorage}>
                        Update Name
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                    <div className="text-small font-bold">Popover Content</div>
                    <div className="text-tiny">This is the popover content</div>
                    </div>
                </PopoverContent>
                </Popover>


        </div>
)}
        </div>
    );
};

export default RightMainFunctionsComponent;