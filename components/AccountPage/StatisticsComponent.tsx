import { useEffect, useState } from "react";
import axios from "axios";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    Progress
  } from "@nextui-org/react";
  
const StatisticsComponent = () => {
    const [easySolved, setEasySolved] = useState<number>(0)
    const [easyTotal, setEasyTotal] = useState<number>(0)

    const [mediumSolved, setMediumSolved] = useState<number>(0)
    const [mediumTotal, setMediumTotal] = useState<number>(0)

    const [hardSolved, setHardSolved] = useState<number>(0)
    const [hardTotal, setHardTotal] = useState<number>(0)

    const [isLoading, setIsLoading] = useState<boolean>(true)

    const fetchProblems = () => {
        if (typeof window !== 'undefined') {
            const solvedIds = JSON.parse(localStorage.getItem(`solved`) || '[]');
            setIsLoading(true);
            axios.post("/api/points/difficulty",{ids : solvedIds, difficultyId: 1}).then(res=>{
                setEasySolved(res.data.solved);
                setEasyTotal(res.data.total);
            })
            axios.post("/api/points/difficulty",{ids : solvedIds, difficultyId: 2}).then(res=>{
                setMediumSolved(res.data.solved);
                setMediumTotal(res.data.total);
            })
            axios.post("/api/points/difficulty",{ids : solvedIds, difficultyId: 3}).then(res=>{
                setHardSolved(res.data.solved);
                setHardTotal(res.data.total);
            })
        }
    }

    useEffect(()=>{
        fetchProblems();
    },[])
    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>DIFFICULTY</TableColumn>
                <TableColumn>SOLVED</TableColumn>
                <TableColumn>TOTAL</TableColumn>
                <TableColumn>PROGRESS</TableColumn>
            </TableHeader>
            <TableBody>
            <TableRow key="1">
                <TableCell className="text-success font-bold text-lg">EASY</TableCell>
                <TableCell>{easySolved}</TableCell>
                <TableCell>{easyTotal}</TableCell>
                <TableCell>
                    <Progress
                        aria-label="Downloading..."
                        size="md"
                        value={easySolved/easyTotal*100}
                        color="success"
                        className="w-full"
                                    /></TableCell>

            </TableRow>
            <TableRow key="2">
                <TableCell className="text-yellow font-bold text-lg">MEDIUM</TableCell>
                <TableCell>{mediumSolved}</TableCell>
                <TableCell>{mediumTotal}</TableCell>
                <TableCell>
                    <Progress
                        aria-label="Downloading..."
                        size="md"
                        value={mediumSolved/mediumTotal*100}
                        color="warning"
                        className="w-full"
                    /></TableCell>
            </TableRow>
            <TableRow key="3">
                <TableCell className="text-red font-bold text-lg">HARD</TableCell>
                <TableCell>{hardSolved}</TableCell>
                <TableCell>{hardTotal}</TableCell>
                <TableCell>
                    <Progress
                        aria-label="Downloading..."
                        size="md"
                        value={hardSolved/hardSolved*100}
                        color="danger"
                        className="w-full"
                        /></TableCell>

            </TableRow>
            </TableBody>
      </Table>
    );
}
export default StatisticsComponent