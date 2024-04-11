import { render, screen } from "@testing-library/react";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import '@testing-library/jest-dom'
import {describe, expect, it} from "@jest/globals";
import TopFilterWindow from "../../components/MainPage/FiltersRight/TopFilterWindow";
import {Checkbox, Input} from "@nextui-org/react";

describe("Main Page", () => {


    describe("test of header component",  () => {
        render(<HeaderComponent />);
        const text = screen.getByText("CTF ICS/OT");

        it("should have the correct title", async () => {
            expect(text).toBeDefined();

        });

        it("should be in the link", async () => {
            expect(text.parentElement).toHaveProperty("href");
        });

    });




    describe("filters",  () => {
        render(<TopFilterWindow />);

        it("should be in the link", async () => {
            const myElem = screen.getByText("Filters");
            expect(myElem).toBeDefined();
        });
        it("should be hide solved", async () => {
            render(<TopFilterWindow />);
            render(<Checkbox />);

            const myElem = screen.getByText("Hide Solved");
            expect(myElem).toBeDefined();
        });
        it("should be show saved", async () => {
            render(<TopFilterWindow />);
            render(<Checkbox />);
            const myElem = screen.getByText("Show Saved");
            expect(myElem).toBeDefined();
        });

        it("should render an SVG image inside the input", async () => {
            render(<Input />);
            const svgImage = screen.getByTestId("svg-image");
            expect(svgImage).toBeDefined();
        });

    });
});