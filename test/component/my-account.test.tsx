import {describe, expect, it} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import React from "react";
import LeftAccountPageComponent from "../../components/AccountPage/LeftAccountPageComponent";
import '@testing-library/jest-dom/extend-expect';
import UserTabsComponents from "../../components/AccountPage/UserTabsComponents";
import RightMainFunctionsComponent from "../../components/AccountPage/RightMainFunctionsComponent";
import StatisticsComponent from "../../components/AccountPage/StatisticsComponent";
import AchievementsComponent from "../../components/AccountPage/AchievementsComponent";

describe('My account Side Components', () => {

    it('account info name', async () => {
        render(<LeftAccountPageComponent />);
        expect(screen.getByText('Name:')).toBeDefined();
    });
    it('account info email', async () => {
        render(<LeftAccountPageComponent />);
        expect(screen.getByText('Email:')).toBeDefined();
    });
    it('All categories default value', async () => {
        render(<LeftAccountPageComponent />);
        // @ts-ignore
        expect(screen.getByText('Email:').parentElement.parentElement).toHaveClass("bg-black w-full");
    });

    it('Edit account tab', async () => {
        render(<UserTabsComponents />);
        // @ts-ignore
        expect(screen.getByText('Edit account')).toBeDefined();
    });
    it('Achievements tab', async () => {
        render(<UserTabsComponents />);
        // @ts-ignore
        expect(screen.getByText('Achievements')).toBeDefined();
    });
    it('Update Name button', async () => {
        render(<RightMainFunctionsComponent />);
        const updateNameButton = screen.getByText('Update Name');
        expect(updateNameButton).toBeInstanceOf(HTMLButtonElement);
    });
    it('Name input', async () => {
        render(<RightMainFunctionsComponent />);
        const inputElement = screen.getByLabelText('Name');
        expect(inputElement).toBeInstanceOf(HTMLInputElement);
    });
    it('Update Email button', async () => {
        render(<RightMainFunctionsComponent />);
        const updateNameButton = screen.getByText('Update Email');
        expect(updateNameButton).toBeInstanceOf(HTMLButtonElement);
    });
    it('Email input', async () => {
        render(<RightMainFunctionsComponent />);
        const inputElement = screen.getByLabelText('Email');
        expect(inputElement).toBeInstanceOf(HTMLInputElement);
    });
    it('Statisctics component table', async () => {
        render(<StatisticsComponent />);
        expect(screen.getByText('DIFFICULTY')).toBeDefined();
        expect(screen.getByText('SOLVED')).toBeDefined();
        expect(screen.getByText('TOTAL')).toBeDefined();
        expect(screen.getByText('PROGRESS')).toBeDefined();

    });

    it('AchievementsComponent component', async () => {
        render(<AchievementsComponent />);
        expect(screen.getByText('Statistics:')).toBeDefined();
        expect(screen.getByText('Your solved problems:')).toBeDefined();
        expect(screen.getByText('Assign your diploma:')).toBeDefined();
    });
    it('Generate component', async () => {
        render(<AchievementsComponent />);
        expect(screen.getByText('Generate Diploma')).toBeDefined();
        expect(screen.getByText('Generate Diploma')).toBeInstanceOf(HTMLButtonElement);
    });

});