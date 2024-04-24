// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

type Data = {
    totalPoints?: number,
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        if (req.method === 'GET') {
            const problems = await prisma.problem.findMany();
              let totalPoints = 0;
              for (const problem of problems){
                totalPoints+=problem.points
              }
              res.status(200).json({totalPoints})
        }else {
            res.status(403).json({ error : "Method is not allowed" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}
