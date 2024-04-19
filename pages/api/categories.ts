import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "@/lib/prisma";
import {IProblem} from "@/ITypes/IProblem";
import {ICategory} from "@/ITypes/ICategory";
type Data = {
    categories?: ICategory[];
    createdCategory?: ICategory;
    error?: string;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        if (req.method === 'GET') {
            const categories = await prisma.category.findMany();
            res.status(200).json({ categories });
        }
        else if (req.method === 'POST') {
            const { name } = req.body;

            // Basic validation
            if (!name) {
                return res.status(400).json({ error: 'Name is required' });
            }
            const createdCategory = await prisma.category.create({
                data: {
                    name
                }
            });
            res.status(201).json({ createdCategory });


        }
        else {
            res.status(403).json({ error : "Method is not allowed" });

        }
    } catch (error) {
        console.error('Error of API request', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}