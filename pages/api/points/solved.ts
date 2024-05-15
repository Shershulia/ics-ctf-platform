// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

type Data = {
    myPoints?: number,
    error?: string
}
// API ROUTE TO GET AMOUNT OF POINTS FOR ALL SOLVED PROBLEMS
// CAN HANDLE ONLY POST METHOD
// TAKES IDS OF SOLVED PROBLEMS IN REQUESTBODY
// RESPONSE WITH AMOUNT OF POINTS ACCORDING SOLVED PROBLEMS
// THROW 403 ERROR IF HTTP METHOD IS NOT POST
// THROW 500 ERROR IF HAPPENS PROBLEM DURING SEARCH OR PROBLEM ON SERVER
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        if (req.method === 'POST') {
            let { ids } = req.body;
            let myPoints = 0;
            for (const id of ids){
                const problem = await prisma.problem.findUnique({ where: { id } });
                if (problem) {
                    myPoints += problem.points;
                }
            }
            
        
            res.status(200).json({myPoints})
        }else {
            res.status(403).json({ error : "Method is not allowed" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}
