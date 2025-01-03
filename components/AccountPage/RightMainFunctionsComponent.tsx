import React, { useEffect, useState, Dispatch, SetStateAction} from 'react';
import UserTabsComponents from "@/components/AccountPage/UserTabsComponents";
import {Button, Input, Progress} from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProblemContainer from './ProblemsContainer';
import StatisticsComponent from './StatisticsComponent';
import CreateDiplomaComponent from './CreateDiplomaComponent';
import AchievementsComponent from "@/components/AccountPage/AchievementsComponent";

type RightMainFunctionsProps = {
    name? : string | null;
    setName?: Dispatch<SetStateAction<string>>;
    email?:string | null;
    setEmail?: Dispatch<SetStateAction<string>>;
    myPoints?: number;
    totalPoints?: number;
 }
 
const RightMainFunctionsComponent = ({name, setName, email, setEmail, myPoints, totalPoints} : RightMainFunctionsProps) => {

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
        toast.success("Your name is updated to "+inputName);
        localStorage.setItem("name",inputName)
        if (setName) {
            setName(inputName)
        }
        
    }
    const setEmailInLocalStorage = () =>{
        toast.success("Your email is updated to "+inputEmail);
        localStorage.setItem("email",inputEmail)
        if (setEmail) {
            setEmail(inputEmail)
        }

    }
    const clearCredentials = () => {
        localStorage.setItem("name","")
        if (setName) {
            setName("undefined")
        }
        localStorage.setItem("email","")
        if (setEmail) {
            setEmail("undefined")
        }
        toast.info("Credentials cleared!");
    }
    
    return (
        <div className={"bg-white rounded-md h-full "} style={{ minHeight: '80vh' }}>
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
            {selected === "edit-account" ?
            (
                <div className='h-full flex flex-col justify-center items-center'>
                    
                    <ProblemContainer />
                    <h1 className='text-center text-xl font-bold'>Your credentials: </h1>
                    <div className={"flex gap-4 my-4 lg:w-[80%] w-[90%] mx-auto"}>
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
                    <div className={"flex gap-4 my-4 lg:w-[80%] w-[90%] mx-auto"}>
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
                    <div className='w-full flex justify-center items-center lg:pb-12 '>
                        <Button color="danger" variant="flat" size={"lg"} className={"py-7 mb-5"} onClick={clearCredentials}>
                                Clear credentials
                            </Button>  
                    </div>
                </div>
            ) : (
                    <AchievementsComponent totalPoints={totalPoints} email={email}
                                            myPoints={myPoints} name={name}/>
            )}
        </div>
    );
};

export default RightMainFunctionsComponent;