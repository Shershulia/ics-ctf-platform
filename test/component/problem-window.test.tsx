import React from 'react';
import { render, screen } from '@testing-library/react';
import {describe, expect, it} from "@jest/globals";
import '@testing-library/jest-dom/extend-expect';
import DisplableCard from "../../components/ProblemPopUp/DisplableCard";
import {IProblem} from "../../ITypes/IProblem";
import {problem_example} from "./data.test";



describe('Problem Component', () => {

    const ProblemExample : IProblem = problem_example

    it('renders title and id in bold', async () => {
        render(<DisplableCard problem={ProblemExample}/>);
        const header = screen.getByText('1. Test')
            expect(header).toBeDefined();
            // @ts-ignore
            expect(header).toHaveClass('font-bold');
    });

    it('not solved test', async () => {
        render(<DisplableCard problem={ProblemExample}/>);
        const notSolvedTab = screen.getByText('Not solved')
        expect(notSolvedTab).toBeDefined();
        // @ts-ignore
        expect(notSolvedTab).toHaveClass('bg-red');
    });

    it('points test', async () => {
        render(<DisplableCard problem={ProblemExample}/>);
        const notSolvedTab = screen.getByText('5 pts.')
        expect(notSolvedTab).toBeDefined();
        // @ts-ignore
        expect(notSolvedTab).toHaveClass('font-bold');
    });

    it('difficulty test', async () => {
        render(<DisplableCard problem={ProblemExample}/>);
        const difficultyTab = screen.getByText('Easy')
        expect(difficultyTab).toBeDefined();
        // @ts-ignore
        expect(difficultyTab).toHaveClass('bg-success');
    });

    it('category test', async () => {
        render(<DisplableCard problem={ProblemExample}/>);
        const categoryTab = screen.getByText('General Skills')
        expect(categoryTab).toBeDefined();
        // @ts-ignore
        expect(categoryTab).toHaveClass('bg-gray');
    });

    it('description test', async () => {
        render(<DisplableCard problem={ProblemExample}/>);
        const element = screen.getByText('Description')
        expect(element).toBeDefined();
        // @ts-ignore
        expect(element).toHaveClass('font-bold');
        const description = screen.getByText('Test description')
        expect(description).toBeDefined();
    });

    it('hints test', async () => {
        render(<DisplableCard problem={ProblemExample}/>);
        const element = screen.getByText('Hints')
        expect(element).toBeDefined();
        const element2 = screen.getByText('test hint')
        expect(element2).toBeDefined();

    });

    it('button test', async () => {
        render(<DisplableCard problem={ProblemExample}/>);
        const element = screen.getByText('Send Flag')
        expect(element).toBeDefined();
        // @ts-ignore
        expect(element).toHaveClass('bg-primary');

    });
    it('input test', async () => {
        render(<DisplableCard problem={ProblemExample}/>);
        const element = screen.getByRole('input-ctf');
        expect(element).toBeDefined();
        // @ts-ignore
        expect(element).toHaveClass('placeholder:text-foreground-500');
    });



});