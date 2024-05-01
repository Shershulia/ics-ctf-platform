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
            const { search, category , difficulty, page } = req.query;
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
            if (difficulty && difficulty.toString() !== "0") {
                whereClause.difficultyId = parseInt(difficulty.toString());
            }

            // Calculate skip and take for pagination
            // const pageNumber = page ? parseInt(page.toString()) : 1;
            // const take = 9;
            // const skip = (pageNumber - 1) * take;

            const problems = await prisma.problem.findMany({
                include: {
                    category: true,
                    difficulty: true,
                },
                where: whereClause,
                // skip: skip,
                // take: take,
            });

            res.status(200).json({ problems: problems });
        }
        else {
            res.status(403).json({ error : "Method is not allowed" });
        }

    } catch (error) {
        console.error('Error of API request', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}