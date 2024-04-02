// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from "@/lib/prisma";

type Data = {
    name?: string,
    error? : string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        if (req.method === 'GET') {
            if (process.env.TEST === 'false') {
                return res.status(401).json({error: 'Unauthorized'});
            } else {
                 prisma.$transaction([
                    prisma.category.deleteMany(),
                    prisma.difficulty.deleteMany(),
                    prisma.solution.deleteMany(),
                    prisma.problem.deleteMany(),
                ]).then(() => {
                    res.status(200).json({name: 'Reset done'});
                 })
            }

        }
    } catch (error) {
        console.error('Error of API request', error);
        res.status(500).json({error: 'Something went wrong'});
    }
}
