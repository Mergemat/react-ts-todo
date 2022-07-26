import { fireEvent, render, screen } from "@testing-library/react";
import { CTask } from "../../models";
import Task from "./Task";
import React from "react"


test("should create a task with default name", () => {
    const task1 = new CTask("");

    render(<Task task={task1} />);

    const linkElement = screen.getByText(/Some task/i)
    expect(linkElement).toBeInTheDocument();

});

test("should change task status on click", () => {
    const task1 = new CTask("");

    render(<Task task={task1} />);

    const linkElement = screen.getByTestId("checkbox")
    fireEvent.click(linkElement)
    expect(task1.completed).toBe(true)  

});
