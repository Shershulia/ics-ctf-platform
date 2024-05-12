import {IProblem} from "../../ITypes/IProblem";

export const problem_example : IProblem = {
    id: 1,
    title: "Test",
    description: "Test description",
    points: 5,
    isInTerminal:true,
    category: {id:1, name: "General Skills"},
    difficulty:{id:1, name: "Easy"},
    hints:["test hint"],
}