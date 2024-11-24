// src/__test__/GuestList.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import GuestList from "../components/GuestList";
import { ListType } from "../utils/types";
import React from "react"


test("the user should not be able to add an empty message", () => {
  const listItem: ListType[] = [{ id: 1, message: "First message" }];
  render(<GuestList listItem={listItem} />);

  // Ensure that the list starts with one item
  const guestList = screen.getByTestId("guest-list");
  console.log('Initial child nodes length:', guestList.childNodes.length);  // Debug log
  expect(guestList.childNodes.length).toBe(1); // Initially, there should be 1 message

  // Click "Send!" without typing anything
  const sendButton = screen.getByText("Send!");
  fireEvent.click(sendButton);

  // Log the child nodes length after sending an empty message
  console.log('Child nodes length after clicking Send button:', guestList.childNodes.length);  // Debug log
  expect(guestList.childNodes.length).toBe(1); // No new message should be added
});

test("Check that it is ok for messages to be duplicates and still being rendered correctly", () => {
  render(<GuestList listItem={[]} />);

  const input = screen.getByPlaceholderText("Leave a message...");
  const sendButton = screen.getByText("Send!");

  // Type a message and click "Send!"
  fireEvent.change(input, { target: { value: "Duplicate message" } });
  fireEvent.click(sendButton);

  // Type the same message and click "Send!" again
  fireEvent.change(input, { target: { value: "Duplicate message" } });
  fireEvent.click(sendButton);

  // Check if both identical messages appear in the list
  expect(screen.getAllByText("Duplicate message").length).toBe(2);
});
