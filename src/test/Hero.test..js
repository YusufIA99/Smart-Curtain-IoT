import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../Components/Hero";

test('åben-btn har rigtig tekst', () => {
    const { sceen.getByTestId } = render(<Hero />);
    const åbenBtn = screen.getByTestId('åben-btn');
    expect(åbenBtn).toHaveTextContent('Åben gardinerne');
});
