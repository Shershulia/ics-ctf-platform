import React, {useState} from 'react';
import {FaRegStar, FaStar} from "react-icons/fa";
type StarRatingComponentProps = {
    defaultHowMany?:number,
};

const StarRatingComponent = ({defaultHowMany=1}:StarRatingComponentProps) => {
    const [howMany, setHowMany] = useState(defaultHowMany);
    const five = [1,2,3,4,5];

    function handleStarClick(n : number){
        setHowMany(n)
    }

    return (
        <div className={"flex gap-2 text-2xl"}>
            {five.map(n=>(
                <div key={n}>
                    <div className={"text-primary hover:text-gray duration-300 transition-all"}
                         onClick={()=>handleStarClick(n)}> {howMany >= n ? <FaStar /> : <FaRegStar />} </div>
                </div>
            ))}
        </div>
    );
};

export default StarRatingComponent;