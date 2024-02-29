import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "@/lib/prisma";
import {IProblem} from "@/ITypes/IProblem";
type Data = {
    problems?: IProblem[];
    error?: string;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        if (req.method === 'GET') {
            const { search, category , difficulty } = req.query;

            let whereClause: any = {};
            if (search) {
                whereClause.title =
                    { contains: search,
                    mode: 'insensitive'
                    };
            }
            if (category && category.toString() !== "0") {
                whereClause.categoryId = parseInt(category.toString());
            }
            if (difficulty!="All") {
                whereClause.difficulty = difficulty;
            }

            const problems = await prisma.problem.findMany({
                include: {
                    category: true,
                    difficulty: true,
                },
                where: whereClause,
            });

            res.status(200).json({ problems: problems });
        }

    } catch (error) {
        console.error('Error of API request', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}