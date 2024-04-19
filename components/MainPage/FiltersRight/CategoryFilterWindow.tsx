import React, {useEffect, useState} from 'react';
import {RadioGroup, Radio, cn} from "@nextui-org/react";
import axios, {AxiosResponse} from "axios";
import {ICategory} from "@/ITypes/ICategory";

type CategoryFilterProps = {
    category?: number,
    setCategory?: (value: number) => void,
};

export const CustomRadio = (props : any) => {
    const {children, ...otherProps} = props;

    return (
        <Radio
            {...otherProps}
            aria-label="Radio variants"
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
const CategoryFilterWindow = ({category, setCategory} : CategoryFilterProps) => {
    //Basic categories
    const allCategory : ICategory = {
        id: 0,
        name: "All categories"
    }
    const [categories, setCategories] = useState<ICategory[]>([allCategory]);




    useEffect(() => {
        axios.get("/api/categories")
            .then((res: AxiosResponse) => {
                const { categories } = res.data;
                const sortedCategories = categories
                    .sort((a: ICategory, b: ICategory) => a.id - b.id);
                setCategories([allCategory, ...sortedCategories]);
                console.log("Categories fetched:", categories)
            })
            .catch((error) => {
                console.error('Error fetching categories:', error.message);
            });
    }, []);

    return (
        <div className={"bg-black w-full rounded-md py-4 px-8"}>
            <p className={"text-white font-bold text-xl text-center mb-2"}>Category filter</p>
            <div className={"flex flex-col justify-center gap-2 w-full"}>
                <RadioGroup className={"w-full"}
                            // @ts-ignore
                            value={category as number}
                            // @ts-ignore
                            onValueChange={setCategory}>

                    {categories.map((category)=>(
                        <CustomRadio value={category.id} key={category.id} aria-label="Category variants">
                            {category.name}</CustomRadio>
                        )
                    )}
                </RadioGroup>

            </div>
        </div>
    );
};

export default CategoryFilterWindow;