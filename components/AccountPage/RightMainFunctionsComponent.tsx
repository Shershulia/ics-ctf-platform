import React, { useEffect, useState, Dispatch, SetStateAction} from 'react';
import UserTabsComponents from "@/components/AccountPage/UserTabsComponents";
import {Button, Input} from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type RightMainFunctionsProps = {
    name : string | null;
    setName: Dispatch<SetStateAction<string>>;
    email:string | null;
    setEmail: Dispatch<SetStateAction<string>>;
 }
 
const RightMainFunctionsComponent = ({name, setName, email, setEmail} : RightMainFunctionsProps) => {

    const [selected, setSelected] = useState("edit-account");
    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")

    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedName = localStorage.getItem("name");
            setInputName(storedName !== null ? storedName : "");
            
            const storedEmail = localStorage.getItem("email");
            setInputEmail(storedEmail !== null ? storedEmail : "");
        }
    }, []);

    const setNameInLocalStorage = () =>{
        localStorage.setItem("name",inputName)
        setName(inputName)
        toast.success("Your name is updated to "+inputName);
        
    }
    const setEmailInLocalStorage = () =>{
        localStorage.setItem("email",inputEmail)
        setEmail(inputEmail)
        toast.success("Your email is updated to "+inputEmail);

    }
    
    return (
        <div className={"bg-white rounded-md h-full"} style={{ height: '80vh flex justify-center items-center' }}>
            <UserTabsComponents selected={selected} setSelected={setSelected}/>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
            {selected === "edit-account" && 
            (
                <div>
                    <div className={"flex gap-4 my-4 w-[80%] mx-auto"}>
                        <Input
                            label="Name"
                            variant={"bordered"}
                            value={inputName}
                            onValueChange={setInputName}
                            classNames={{ 
                                inputWrapper:" border border-success group-data-[focus=true]:border-blue text-black ",
                                label:"text-gray text-lg",
                                innerWrapper:"text-lg text-center group-data-[has-label=true]:items-center",
                                input: "text-lg"
                            }}
                        />
                        <Button color="primary" variant="solid" size={"lg"} className={"py-7"} onClick={setNameInLocalStorage}>
                            Update Name
                        </Button>  
                    </div>
                    <div className={"flex gap-4 my-4 w-[80%] mx-auto"}>
                        <Input
                            label="Email"
                            variant={"bordered"}
                            value={inputEmail}
                            onValueChange={setInputEmail}
                            classNames={{ 
                                inputWrapper:" border border-success group-data-[focus=true]:border-blue text-black ",
                                label:"text-gray text-lg",
                                innerWrapper:"text-lg text-center group-data-[has-label=true]:items-center",
                                input: "text-lg"
                            }}
                        />
                        <Button color="primary" variant="solid" size={"lg"} className={"py-7"} onClick={setEmailInLocalStorage}>
                            Update Email
                        </Button>  
                    </div>

                </div>
)}
        </div>
    );
};

export default RightMainFunctionsComponent;