// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

type Data = {
    solved?: number,
    total?: number,
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        if (req.method === 'POST') {
            let { ids, difficultyId } = req.body;
            let solved : number = 0;
            let total = (await prisma.problem.findMany({
                where: {
                    difficultyId: difficultyId
                }
            })).length;
            for (const id of ids){
            const problem = await prisma.problem.findUnique({ where: { id } });
            if (problem?.difficultyId===difficultyId) {
                solved+=1
            }
            }
            
        
            res.status(200).json({solved,total})
        }else {
            res.status(403).json({ error : "Method is not allowed" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}
