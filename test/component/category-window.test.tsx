import React from 'react';
import { render, screen } from '@testing-library/react';
import {describe, expect, it} from "@jest/globals";
import '@testing-library/jest-dom/extend-expect';
import CategoryFilterWindow from "../../components/MainPage/FiltersRight/CategoryFilterWindow";


describe('CategoryFilterWindow Component', () => {

    it('renders title correctly', async () => {
            render(<CategoryFilterWindow/>);
            expect(screen.getByText('Category filter')).toBeDefined();
    });
    it('renders radiobuttons', async () => {
        render(<CategoryFilterWindow />);
        const categoryTab = screen.getByRole('radiogroup');
        expect(categoryTab).toBeDefined()
    });
    it('renders difficulty tabs with black background', async () => {
        render(<CategoryFilterWindow />);
        const categoryDiv = screen.getByText('Category filter').parentElement;
        // @ts-ignore
        expect(categoryDiv).toHaveStyle('background-color: rgb(0 0 0);');
    });
    it('All categories default value', async () => {
        render(<CategoryFilterWindow />);
        expect(screen.getByText('All categories')).toBeDefined();
    });
    it('selected background color primary', async () => {
        render(<CategoryFilterWindow />);
        const radioButton = screen.getByLabelText('Radio variants');
        // @ts-ignore
        expect(radioButton).toHaveClass('data-[selected=true]:border-success');
    });
});