import { render, screen } from "@testing-library/react";
import SubTitle from "../components/SubTitle";
import React from "react"

test("Check that the subtitle is under the header and rendered correctly", () => {
    const mockData: string = "Leave a message down below...";

    render(<SubTitle text={mockData} />);

    const subtitleText = screen.getByRole("heading", { level: 3, name: mockData });

    expect(subtitleText).toBeInTheDocument();
});

test("Check that the h3 element has the correct class", () => {
    render(<SubTitle text="Some Text" />); // Ensure you pass some text so the h3 exists

    const headerText = screen.getByRole("heading", { level: 3 });

    expect(headerText).toHaveClass("text-1xl text-pink-400 pt-4 font-light");
});

test("Check so SubTitle renders correctly without text prop", () => {
    render(<SubTitle text="" />);

    const headerText = screen.getByRole("heading", { level: 3 });

    expect(headerText).toBeInTheDocument();
    expect(headerText).toHaveTextContent(""); // Should be empty as text is an empty string
});
