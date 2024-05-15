import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "@/lib/prisma";
import {IDifficulty} from "@/ITypes/IDifficulty";
type Data = {
    difficulties?: IDifficulty[];
    error?: string;
}
// API ROUTE TO GET ALL DIFFICULTIES IN SYSTEM
// CAN HANDLE ONLY GET METHOD
// RESPONSE 200 WITH ARRAY WITH ALL DIFFICULTIES IN THE SYSTEM
// THROW 403 ERROR IF HTTP METHOD IS NOT GET
// THROW 500 ERROR IF HAPPENS PROBLEM DURING SEARCH OR PROBLEM ON SERVER
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        if (req.method === 'GET') {
            const difficulties = await prisma.difficulty.findMany();

            res.status(200).json({ difficulties });
        }
        else {
            res.status(403).json({ error : "Method is not allowed" });

        }

    } catch (error) {
        console.error('Error of API request', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}