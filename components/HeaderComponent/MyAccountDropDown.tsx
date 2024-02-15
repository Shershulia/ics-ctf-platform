import { useState } from 'react'; // Import useState if not already imported
import { MdOutlineAccountCircle } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

const MyAccountDropDown = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div
                className={`w-full flex items-center`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <p className={`${isHovered ? 'text-gray' : 'text-white'} transition-all duration-300`}>My account</p>
                <MdOutlineAccountCircle className={`${isHovered ? 'text-gray' : 'text-white'} text-xl mx-1 transition-all duration-300`}  />
                <RiArrowDropDownLine className={`${isHovered ? 'text-gray' : 'text-white'} text-xl transition-all duration-300`} />
            </div>
        </div>
    );
};

export default MyAccountDropDown;
