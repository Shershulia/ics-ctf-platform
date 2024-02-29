import {FrontendLayout, LeftAccountPageComponent, RightMainFunctionsComponent} from "@/components";
import {IUser} from "@/ITypes/IUser";
const user : IUser ={
    _id: "60b9ea808dad5476db6841a6",
    name: "John Doe",
    email: "helloworld",
    avatar: "https://avatars.dzeninfra.ru/get-zen_doc/4452915/pub_60b9ea808dad5476db6841a6_60b9ea831b3f5c2226e9f1e5/scale_1200",
}
export default function AccountPage() {
    return (
        <div>
            <FrontendLayout>
                <div className={"grid grid-cols-3 gap-10"}>
                    <LeftAccountPageComponent user={user}/>
                    <RightMainFunctionsComponent/>
                </div>
            </FrontendLayout>
        </div>
    )
}