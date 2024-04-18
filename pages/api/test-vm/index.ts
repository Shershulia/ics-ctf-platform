import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';

type Data = {
    output?: string;
    error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        if (req.method === 'POST') {
            let { command, id } = req.body;


            exec(`docker exec -w /ctf-ics/opg${id} -u root next-ctf-platform-test-vm-1 ${command}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return res.status(500).json({ error: 'Error executing command' });
                }

                res.status(200).json({ output: stdout || stderr });
            });
        } else {
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error of API request', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
