import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "@/lib/prisma";
import {IDifficulty} from "@/ITypes/IDifficulty";
type Data = {
    difficulties?: IDifficulty[];
    error?: string;
}
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