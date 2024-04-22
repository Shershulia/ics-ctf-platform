import {FrontendLayout, LeftAccountPageComponent, RightMainFunctionsComponent} from "@/components";
import { useEffect, useState } from "react";

export default function AccountPage() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    useEffect(()=>{
        if (typeof window !== 'undefined') {
            setName(localStorage.getItem("name") || "undefined")
            setEmail(localStorage.getItem("email") || "undefined")
        }
    },[])
    
    return (
        <div>
            <FrontendLayout>
                <div className={"grid grid-cols-3 gap-10"}>
                    <div>
                        <LeftAccountPageComponent name={name} email={email}/>
                    </div>
                    <div className="col-span-2">
                        <RightMainFunctionsComponent 
                            name={name}
                            email={email}
                            setName={setName}
                            setEmail={setEmail}
                            />                        
                    </div>
                </div>
            </FrontendLayout>
        </div>
    )
}