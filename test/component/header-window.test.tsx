import {describe, expect, it} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import '@testing-library/jest-dom'
import React from "react";


describe("test of header component",  () => {

    it("should have the correct title", async () => {
        render(<HeaderComponent />);
        const text = screen.getByText("CTF ICS/OT");
        expect(text).toBeDefined();

    });

    it("should be in the link", async () => {
        render(<HeaderComponent />);
        const text = screen.getByText("CTF ICS/OT");
        expect(text.parentElement).toHaveProperty("href");
    });
    it('My account in Header', () => {
        render(<HeaderComponent />);
        const elementWithAriaLabel = screen.getAllByText("My account");
        // @ts-ignore
        expect(elementWithAriaLabel).toBeDefined();
    });

});