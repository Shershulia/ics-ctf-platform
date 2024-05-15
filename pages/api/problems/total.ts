// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

type Data = {
    totalProblems?: number,
    error?: string
}
// API ROUTE TO GET TOTAL AMOUNT OF PROBLEMS IN OUR DATABASE
// CAN HANDLE ONLY GET METHOD
// RESPONSE 200 WITH AMOUNT OF PROBLEMS IN DATABASE
// THROW 403 ERROR IF HTTP METHOD IS NOT GET
// THROW 500 ERROR IF HAPPENS PROBLEM DURING SEARCH OR PROBLEM ON SERVER
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        if (req.method === 'GET') {
            const totalCount = await prisma.problem.count()
            res.status(200).json({totalProblems: totalCount})
        }else {
            res.status(403).json({ error : "Method is not allowed" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}
