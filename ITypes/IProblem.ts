import {ICategory} from "@/ITypes/ICategory";
import {IDifficulty} from "@/ITypes/IDifficulty";

export type IProblem = {
    id: number;
    title: string;
    description: string;
    points: number;
    isInTerminal:boolean;
    attached_files?:[string];
    category:ICategory;
    difficulty:IDifficulty;
    hints?:string[];
}