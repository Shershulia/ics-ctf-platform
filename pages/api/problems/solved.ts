// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { IProblem } from '@/ITypes/IProblem';

type Data = {
    problems?: IProblem[],
    error?: string
}
// API ROUTE TO GET PROBLEMS ACCORDING THEIR IDS
// CAN HANDLE ONLY POST METHOD
// TAKES IDS OF PROBLEMS IN REQUESTBODY
// RESPONSE 200 WITH PROBLEMS ACCORDING THEIR IDS
// THROW 403 ERROR IF HTTP METHOD IS NOT POST
// THROW 500 ERROR IF HAPPENS PROBLEM DURING SEARCH OR PROBLEM ON SERVER
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
