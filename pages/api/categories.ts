import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "@/lib/prisma";
import {IProblem} from "@/ITypes/IProblem";
import {ICategory} from "@/ITypes/ICategory";
type Data = {
    categories?: ICategory[];
    error?: string;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        if (req.method === 'GET') {
            const categories = await prisma.category.findMany();

            res.status(200).json({ categories });
        }

    } catch (error) {
        console.error('Error of API request', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}