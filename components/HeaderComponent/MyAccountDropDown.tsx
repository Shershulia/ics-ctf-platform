import { MdOutlineAccountCircle } from 'react-icons/md';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAccountDropDown = () => {

    const handleLogout = () => {
        localStorage.setItem("name", "");
        localStorage.setItem("email", "");
        toast.info("Credentials cleared!");
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
            />
            <Dropdown>
                <DropdownTrigger>
                    <Button variant="bordered">
                        <MdOutlineAccountCircle size={24} className={"text-white"}/>
                        <p className={"text-white"}>My account</p>
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Action event example">
                    <DropdownItem key="new" href="/account">My account</DropdownItem>
                    <DropdownItem key="logout" onClick={handleLogout} className="text-danger" color="danger">
                        Clear credentials
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    );
};

export default MyAccountDropDown;
