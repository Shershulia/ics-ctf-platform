import React from 'react';
import { render, screen } from '@testing-library/react';
import {describe, expect, it} from "@jest/globals";
import DifficultyLevelWindow from "../../components/MainPage/FiltersRight/DifficultyLevelWindow";
import '@testing-library/jest-dom/extend-expect';


describe('DifficultyLevelWindow Component', () => {

    it('renders title correctly', async () => {
            render(<DifficultyLevelWindow />);
            expect(screen.getByText('Difficulties')).toBeDefined();
    });
    it('renders difficulty tabs with aria-label correctly', async () => {
        render(<DifficultyLevelWindow />);
        const difficultyTab = screen.getByRole('tab');
        // @ts-ignore
        expect(difficultyTab).toHaveAttribute('aria-selected', 'true');
    });
    it('renders difficulty tabs with black background', async () => {
        render(<DifficultyLevelWindow />);
        const difficultyDiv = screen.getByText('Difficulties').parentElement;
        // @ts-ignore
        expect(difficultyDiv).toHaveStyle('background-color: rgb(0 0 0);');
    });
    it('All categories default value', async () => {
        render(<DifficultyLevelWindow />);
        // @ts-ignore
        expect(screen.getByText('Difficulties')).toBeDefined();
    });
    it('background color primary', async () => {
        render(<DifficultyLevelWindow />);
        const tabList = screen.getByRole('tablist', { name: 'Tabs variants' });
        // @ts-ignore
        expect(tabList).toHaveClass('border-success');
    });
});