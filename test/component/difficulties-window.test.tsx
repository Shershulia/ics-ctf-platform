import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import {describe, expect, it} from "@jest/globals";
import DifficultyLevelWindow from "../../components/MainPage/FiltersRight/DifficultyLevelWindow";


describe('DifficultyLevelWindow Component', () => {
        render(<DifficultyLevelWindow />);

        it('renders title correctly', async () => {
            expect(screen.getByText('Difficulties')).toBeDefined();
    });




});