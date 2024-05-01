// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { IProblem } from '@/ITypes/IProblem';

type Data = {
    problems?: IProblem[],
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        if (req.method === 'POST') {
            let { ids } = req.body;
            let problems : IProblem[] = []
            for (const id of ids){
                const problem = await prisma.problem.findUnique({ where: { id } });
                //@ts-ignore
                problems.push(problem)
            }
            
        
            res.status(200).json({problems})
        }else {
            res.status(403).json({ error : "Method is not allowed" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}
