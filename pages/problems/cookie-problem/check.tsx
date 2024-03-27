import React, {useEffect} from 'react';
import {  Divider } from "@nextui-org/react";
import { GetServerSidePropsContext } from 'next';
import cookies from 'next-cookies';

const CheckCookieProblemPage = ({ cookie } : {cookie:string} ) => {
    const [value, setValue] = React.useState("");
    useEffect(() => {
            if (cookie === "0") {
                setValue('snickerdoodle');
            }else if (cookie === '1') {
                setValue('chocolate chip cookies');
            }else if (cookie=== '2') {
                setValue('oatmeal raisin');
            }else if (cookie === '3') {
                setValue('shortbread');
            }else if (cookie === '4') {
                setValue('peanut butter');
            }else if (cookie === '5') {
                setValue('sugar');
            }else if (cookie === '6') {
                setValue('biscotti');
            }else if (cookie === '7') {
                setValue('butter');
            }else if (cookie === '8') {
                setValue('wafers');
            }else if (cookie === '9') {
                setValue('macaroons');
            }else if (cookie === '10') {
                setValue('CTF-{FLAG}');
            }
    }
    ,[]);
    return (
        <div className={"m-auto w-screen mt-12 bg-white "}>
            <div className={"w-1/2 m-auto"}>
                <div className={"mt-12 text-center "}>
                    <h1>Cookie</h1>
                </div>
                <div className={"my-2"}>
                    <Divider />
                    <div className={`w-full flex gap-4 justify-center items-center  ${cookie=="-1" ?"bg-rose-50" :"bg-lime-50"} py-4`}>
                        <p>That is a cookie! Not very special though...</p>
                    </div>
                    <Divider />
                </div>
                <div className={"w-full flex gap-4 justify-center items-center"}>

                    {cookie == "-1" ? <p>Nothing with this cookie</p> : <p>I love {value} cookie</p>}

                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const cookieStore = cookies(context);
    return {
        props: {
            cookie: cookieStore.ctf_cookie || "-1"
        }
    };
}

export default CheckCookieProblemPage;
