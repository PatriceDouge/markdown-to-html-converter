import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from "../pages/index";

describe("Home page", () => {
    it("should render", () => {
        render(<Home />);

        // two text boxes should be rendered
        const textbox = screen.getAllByRole('textbox');
        expect(textbox.length).toEqual(2);
        
        // button should be rendered
        const convertButton = screen.getByRole('button', { name: /convert to html/i });
        expect(convertButton).toBeInTheDocument();
    });
});