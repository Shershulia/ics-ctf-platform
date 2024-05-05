import React, {Key} from 'react';
import {Tab, Tabs} from "@nextui-org/react";
import {MdManageAccounts, MdOutlineFeedback} from "react-icons/md";
import {GrAchievement} from "react-icons/gr";

type UserTabsComponentsProps = {
    selected?: string;
    setSelected?: React.Dispatch<React.SetStateAction<string>>;

}
const UserTabsComponents = ({selected,setSelected} : UserTabsComponentsProps) => {
    const handleSelectionChange = (key: Key) => {
        if (setSelected) {
            setSelected(key as string);
        }
    };
    return (
        <Tabs aria-label="Options" color="primary"
              variant="underlined"
              selectedKey={selected}
              onSelectionChange={handleSelectionChange}
              classNames={{
                  base: "gap-6 w-full relative rounded-none p-0 border-b border-divider ",
                  tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider bg-black text-white rounded-t-md",
                  cursor: "w-full bg-blue",
                  tab: "w-full px-0 h-12",
                  tabContent: "group-data-[selected=true]:text-blue text-white"
              }}>
            <Tab
                key="edit-account"
                title={
                    <div className="flex items-center space-x-2">
                        <MdManageAccounts />
                        <span>Edit account</span>
                    </div>
                }
            />
            <Tab
                key="achievements"
                title={
                    <div className="flex items-center space-x-2">
                        <GrAchievement />
                        <span>Achievements</span>
                    </div>
                }
            />
        </Tabs>
    );
};

export default UserTabsComponents;