import { render, screen } from "@testing-library/react";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import '@testing-library/jest-dom'
import {describe, expect, it} from "@jest/globals";

describe("Main Page", () => {
    it("should have the correct title", async () => {
        render(<HeaderComponent />);
        const myElem = screen.getByText("CTF ICS/OT");

        expect(myElem).toBeDefined();
    });
});