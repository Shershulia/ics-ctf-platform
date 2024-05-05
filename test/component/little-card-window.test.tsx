import React from 'react';
import { render, screen } from '@testing-library/react';
import {describe, expect, it} from "@jest/globals";
import '@testing-library/jest-dom/extend-expect';
import {IProblem} from "../../ITypes/IProblem";
import LittleCardComponent from "../../components/ProblemPopUp/LittleCardComponent";
import {problem_example} from "./data";


describe('Problem Little Card Component', () => {

    const ProblemExample : IProblem = problem_example

    it('renders title bold', async () => {
        render(<LittleCardComponent problem={ProblemExample}/>);
        const header = screen.getByText('Test')
        expect(header).toBeDefined();
        // @ts-ignore
        expect(header).toHaveClass('text-xl font-bold truncate');
    });

    it('description test', async () => {
        render(<LittleCardComponent problem={ProblemExample}/>);
        const element = screen.getByText('Test description')
        expect(element).toBeDefined();
    });

    it('points test', async () => {
        render(<LittleCardComponent problem={ProblemExample}/>);
        const notSolvedTab = screen.getByText('5 pts.')
        expect(notSolvedTab).toBeDefined();
    });

    it('difficulty test', async () => {
        render(<LittleCardComponent problem={ProblemExample}/>);
        const difficultyTab = screen.getByText('Easy')
        expect(difficultyTab).toBeDefined();
        // @ts-ignore
        expect(difficultyTab).toHaveClass('text-success font-bold');

    });

    it('category test', async () => {
        render(<LittleCardComponent problem={ProblemExample}/>);
        const categoryTab = screen.getByText('General Skills')
        expect(categoryTab).toBeDefined();
        // @ts-ignore
        expect(categoryTab).toHaveClass('lg:w-2/3 truncate w-full');

    });

    it('little card design ', async () => {
        render(<LittleCardComponent problem={ProblemExample}/>);
        const categoryTab = screen.getByText('Test').parentElement
        expect(categoryTab).toBeDefined();
        // @ts-ignore
        expect(categoryTab).toHaveClass('bg-white border lg:p-4 p-2 border-2 rounded-md overflow-hidden flex ' +
            'flex-col justify-between z-10 cursor-pointer bg-white');

    });


});