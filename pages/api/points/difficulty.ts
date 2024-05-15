// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

type Data = {
    solved?: number,
    total?: number,
    error?: string
}
// API ROUTE TO GET AMOUNT OF SOLVED AND TOTAL PROBLEMS OF CERTAIN DIFFUCULTY
// CAN HANDLE ONLY POST METHOD
// TAKES IDS AND DIFFICULTUID IN REQUESTBODY
// RESPONSE WITH AMOUNT OF SOLVED PROBLEM OF CERATIN DIFFICULTY AND AMOUNT OF ALL PROBLEMS OF GIVEN DIFFICULT
// THROW 403 ERROR IF HTTP METHOD IS NOT POST
// THROW 500 ERROR IF HAPPENS PROBLEM DURING SEARCH OR PROBLEM ON SERVER
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
