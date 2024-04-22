import { MdOutlineAccountCircle } from 'react-icons/md';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const MyAccountDropDown = () => {

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                >
                    <MdOutlineAccountCircle size={24} className={"text-white"}/>
                    <p className={"text-white"}>My account</p>
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Action event example"
                onAction={(key) => {
                    if (key==="logout"){
                        alert("Clearing the credentials...")
                        localStorage.setItem("user","{}-")
                    }
                }}
            >
                <DropdownItem key="new" href="/account">My account</DropdownItem>
                <DropdownItem key="logout" className="text-danger" color="danger">
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default MyAccountDropDown;
