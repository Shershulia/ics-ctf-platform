import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "@/lib/prisma";
type Data = {
    decision?:boolean;
    error?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        if (req.method === 'GET') {
            const {problemId, solution} = req.query;
            console.log(problemId, solution);
            // Check if problemId is provided
            if (!problemId || typeof problemId !== 'string') {
                return res.status(400).json({ error: 'Invalid or missing problemId' });
            }

            // Find solution for the given problem ID
            const foundSolution = await prisma.solution.findUnique({
                where: { problemId: parseInt(problemId) },
            });

            if (!foundSolution) {
                return res.status(404).json({ error: 'Solution not found for the given problem ID' });
            }

            const finalDecision = foundSolution.solution === solution;
            res.status(200).json({ decision: finalDecision });

        }else {
            res.status(403).json({ error : "Method is not allowed" });
        }

    } catch (error) {
        console.error('Error of API request', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

