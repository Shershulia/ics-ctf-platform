import {FrontendLayout, LeftAccountPageComponent, RightMainFunctionsComponent} from "@/components";

export default function AccountPage() {
    let name = "";
    let email = "";

    if (typeof window !== 'undefined') {
        name = localStorage.getItem("name") || "undefined";
        email = localStorage.getItem("email") || "undefined";
    }
    
    return (
        <div>
            <FrontendLayout>
                <div className={"grid grid-cols-3 gap-10"}>
                    <div>
                        <LeftAccountPageComponent name={name} email={email}/>
                    </div>
                    <div className="col-span-2">
                        <RightMainFunctionsComponent/>                        
                    </div>
                </div>
            </FrontendLayout>
        </div>
    )
}