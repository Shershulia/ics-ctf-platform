import React from 'react';
import { render, screen } from '@testing-library/react';
import {describe, expect, it} from "@jest/globals";
import '@testing-library/jest-dom/extend-expect';
import CategoryFilterWindow from "../../components/MainPage/FiltersRight/CategoryFilterWindow";
import SortTopFilterComponent from "../../components/MainPage/SortTopFilter/SortTopFilterComponent";


describe('CategoryFilterWindow Component', () => {

    it('renders title correctly', async () => {
            render(<SortTopFilterComponent/>);
            expect(screen.getByText('Sort')).toBeDefined();
    });

    it('renders select correctly', async () => {
        render(<SortTopFilterComponent />);
        const selectComponent = screen.getByLabelText('select');
        // @ts-ignore
        expect(selectComponent).toBeInTheDocument();
    });


    it('renders pagination correctly', async () => {
        render(<SortTopFilterComponent />);
        const selectComponent = screen.getByLabelText('pagination');
        // @ts-ignore
        expect(selectComponent).toBeInTheDocument();
    });

    it('renders difficulty tabs with black background', async () => {
        render(<SortTopFilterComponent />);
        const categoryDiv = screen.getByText('Sort').parentElement;
        // @ts-ignore
        expect(categoryDiv).toHaveStyle('background-color: rgb(0 0 0);');
    });
    it('Three option value', async () => {
        render(<SortTopFilterComponent />);
        expect(screen.getAllByText('Date')).toBeDefined();
        expect(screen.getByText('Points')).toBeDefined();
        expect(screen.getByText('Difficulties')).toBeDefined();

    });

    it('at least one page', async () => {
        render(<SortTopFilterComponent />);
        expect(screen.getAllByText('1')).toBeDefined();
    });

    it('first page is chosen', async () => {
        render(<SortTopFilterComponent />);
        const paginationItems = screen.getAllByLabelText(/pagination item 1 active/i);
        expect(paginationItems.length).toBeGreaterThan(0);
    });
    it('selected background color primary', async () => {
        render(<SortTopFilterComponent />);
        const select = screen.getAllByText('Date')[1]
        // @ts-ignore
        expect(select).toHaveClass('group-data-[has-value=true]:text-primary');
    });
});