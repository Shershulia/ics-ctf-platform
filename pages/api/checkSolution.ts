import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "@/lib/prisma";
type Data = {
    decision?:boolean;
    error?: string;
}
// API ROUTE TO CHECK SOLUTION TO GIVEN PROBLEM
// CAN HANDLE ONLY GET METHOD
// TAKES PROBLEMID AND SOLUTION FROM REQUEST QUERY TO CHECK SOLUTION
// RESPONSE 200 WITH BOOLEAN WITH DECISION IF SOLUTION GIVEN BY USER IS RIGHT
// THROW 400 ERROR IF PROBLEMID OR SOLUTION IS NOT GIVEN IN REQUEST QUERY
// THROW 404 IF SOLUTION FOR PROBLEM IS NOT FOUND IN DATABASE
// THROW 403 ERROR IF HTTP METHOD IS NOT GET
// THROW 500 ERROR IF HAPPENS PROBLEM DURING SEARCH OR PROBLEM ON SERVER

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        if (req.method === 'GET') {
            const {problemId, solution} = req.query;
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

