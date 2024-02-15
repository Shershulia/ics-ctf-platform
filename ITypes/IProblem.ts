export type IProblem = {
    _id: string;
    title: string;
    description: string;
    points: number;
    attached_files?:[string];
    category:string;
    difficulty:string;
    hints?:[string];
}