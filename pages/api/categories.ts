import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "@/lib/prisma";
import {IProblem} from "@/ITypes/IProblem";
import {ICategory} from "@/ITypes/ICategory";
type Data = {
    categories?: ICategory[];
    createdCategory?: ICategory;
    error?: string;
}
// API ROUTE TO GET AMOUNT OF SOLVED PROBLEMS OF CERTAIN DIFFUCULTY
// CAN HANDLE GET AND POST METHOD
// GET RESPONSE 200 WITH ALL CATEGORIES IN OUR SYSTEM
// POST TAKES NAME OF CATEGORY TO CREATE A NEW ONE
// RESPONSE 201 WITH NEW CATEGORY IN BODY IF CATEGORY WAS SUCCESSFULLY CREATED
// THROW 400 ERROR IF NAME OF PROBLEM IS NOT GIVEN
// THROW 403 ERROR IF HTTP METHOD IS NOT POST OR GET
// THROW 500 ERROR IF HAPPENS PROBLEM DURING SEARCH OR PROBLEM ON SERVER
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