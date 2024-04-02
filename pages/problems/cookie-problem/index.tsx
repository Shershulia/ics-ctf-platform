import React, {useState} from 'react';
import {Button, Divider, Input} from "@nextui-org/react";
import {cookieProblemUtil} from "@/pages/problems/cookie-problem/cookieProblemUtil";

const CookieProblemPage = () => {
    const [value, setValue] = useState("");
    const [response, setResponse] = useState("");

    const sendCookie = () => {
        document.cookie = `${cookieProblemUtil(value)}; path=/;`;
        window.open("/problems/cookie-problem/check", "_blank");
    }

    return (
        <div className={"m-auto w-screen mt-12 bg-white "}>
            <div className={"w-1/2 m-auto"}>
                <div className={"mt-12 text-center"}>
                    <h1>Cookie</h1>
                </div>
                <Divider className="my-4" />

                <div className={"w-full flex gap-4 justify-center items-center"}>
                    <Input
                        placeholder="snickerdoodle"
                        value={value}
                        onValueChange={setValue}
                    />
                    <Button color="success" onClick={sendCookie}>
                            Send Cookie
                    </Button>
                </div>
                <Divider className="my-4" />
            </div>
        </div>
    );
};

export default CookieProblemPage;