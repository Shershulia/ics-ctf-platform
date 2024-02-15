import React from 'react';
import {RadioGroup, Radio, cn} from "@nextui-org/react";

type CategoryFilterProps = {
    categories: string[],

};
export const CustomRadio = (props : any) => {
    const {children, ...otherProps} = props;

    return (
        <Radio
            {...otherProps}
            classNames={{

                base: cn(
                    "inline-flex m-0 bg-black text-white hover:bg-darkGray items-center justify-between",
                    "flex-row-reverse min-w-full text-white cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
                    "data-[selected=true]:border-success "
                ),
                label:"text-white",
                wrapper:"group-data-[selected=true]:border-success"
            }}
        >
            {children}
        </Radio>
    );
};
const CategoryFilterWindow = ({categories}: CategoryFilterProps) => {
    return (
        <div className={"bg-black w-full rounded-md py-4 px-8"}>
            <p className={"text-white font-bold text-xl text-center mb-2"}>Category filter</p>
            <div className={"flex flex-col justify-center gap-2 w-full"}>
                <RadioGroup className={"w-full"}>
                    {categories.map((category)=>(
                        <CustomRadio value={category} key={category}>
                            {category}</CustomRadio>
                        )
                    )}
                </RadioGroup>

            </div>
        </div>
    );
};

export default CategoryFilterWindow;