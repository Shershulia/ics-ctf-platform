import {FrontendLayout, LeftAccountPageComponent, RightMainFunctionsComponent} from "@/components";
import axios from "axios";
import { useEffect, useState } from "react";
import { IProblem } from '@/ITypes/IProblem';

export default function AccountPage() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const [myPoints, setMyPoints] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            setName(localStorage.getItem("name") || "undefined")
            setEmail(localStorage.getItem("email") || "undefined")
            axios.get("/api/points/total").then(res=>{
                setTotalPoints(res.data.totalPoints)
            })
            const solvedIds = JSON.parse(localStorage.getItem(`solved`) || '[]');
            axios.post("/api/points/solved",{ids : solvedIds}).then(res=>{
                setMyPoints(res.data.myPoints)
            })

        }
    },[])
    
    return (
        <div>
            <FrontendLayout>
                <div className={"lg:grid lg:grid-cols-3 lg:gap-10 gap-6 flex flex-col"}>
                    <div>
                        <LeftAccountPageComponent name={name} email={email}/>
                    </div>
                    <div className="lg:col-span-2">
                        <RightMainFunctionsComponent 
                            name={name}
                            email={email}
                            setName={setName}
                            setEmail={setEmail}
                            myPoints={myPoints}
                            totalPoints={totalPoints}
                            />                        
                    </div>
                </div>
            </FrontendLayout>
        </div>
    )
}