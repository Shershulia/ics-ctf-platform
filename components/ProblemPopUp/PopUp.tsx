import React from 'react';
type PopUpProps = {
    children: React.ReactNode,
    trigger: boolean,
    setTrigger: () => any
};
const PopUp = ({ children, trigger, setTrigger } : PopUpProps) => {
    return (
        trigger &&
            (
                <div className={"max-h-screen"}>
                    <div className={"fixed top-0 left-0 w-full h-screen bg-black border-darkGray z-40 opacity-30"} onClick={setTrigger}>
                    </div>
                    <div className={"fixed p-12 w-full h-full m-auto top-[20%] max-w-[640px] max-h-[640px] bg-white opacity-100 z-50"}>
                        <button onClick={setTrigger}> Close</button>
                        {children}
                    </div>
                </div>
        )

    );
};

export default PopUp;