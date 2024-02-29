// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

type Data = {
    totalProblems: number,
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const totalCount = await prisma.problem.count()
        res.status(200).json({ totalProblems: totalCount })
    } catch (error) {
        res.status(500).json({ totalProblems:1,error: 'Internal server error' })
    }
}
