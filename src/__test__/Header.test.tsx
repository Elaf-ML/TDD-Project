import { render, screen } from "@testing-library/react";
import Header from "../components/Header"; // Adjust the import path if needed
import React from "react";
test("Check that the header text is rendered correctly and also as an h1", () => {
  render(<Header />);
  
  // Adjusted to match the exact text "Guestbook" (without space)
  const headerText = screen.getByRole("heading", { level: 1, name: "Guestbook" });
  
  expect(headerText).toBeInTheDocument();
});

test("Check that the h1 element has correct class names", () => {
  render(<Header />);
  
  const headerText = screen.getByRole("heading", { level: 1 });
  
  expect(headerText).toHaveClass("text-4xl", "font-bold", "text-pink-600", "mb-2", "tracking-wide");
});

test("Check that the SubTitle component is rendered within the Header", () => {
  render(<Header />);
  
  // Adjusted to match the correct text in the component
  const subTitleText = screen.getByText("Leave a message and interact with others.");
  
  expect(subTitleText).toBeInTheDocument();
});

test("Check that the Header passes the correct text prop to SubTitle", () => {
  render(<Header />);
  
  // Match the subtitle text as per your component structure
  const subTitle = screen.getByText("Leave a message and interact with others.");
  
  expect(subTitle).toBeInTheDocument();
});
