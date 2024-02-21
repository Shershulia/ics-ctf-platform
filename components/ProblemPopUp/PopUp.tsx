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
                <div className="fixed inset-0 flex justify-center items-center z-50">
                    <div className="absolute inset-0 bg-black opacity-30" onClick={setTrigger}></div>
                    <div className="relative p-12 w-[640px] h-[640px] bg-white">
                        <button className="absolute top-0 right-0 m-4" onClick={setTrigger}>Close</button>
                        {children}
                    </div>
                </div>
        )

    );
};

export default PopUp;