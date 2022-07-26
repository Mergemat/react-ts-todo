import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { CTask } from "./models";
import App from "./App";
import React from "react";

// const setup = () => {
//     const utils = render(<App />)
//     const input = utils.getByLabelText('cost-input')
//     return {
//       input,
//       ...utils,
//     }
//   }

test("should create a task", () => {
    const app = render(<App />);

    const input = app.getByTestId("addTaskInput");
    fireEvent.change(input, { target: { value: "New Task" } });

    const taskSubmit = app.getByTestId("addTaskSubmit");
    fireEvent.click(taskSubmit);

    const newTask = screen.getByText("New Task");

    expect(newTask).toBeInTheDocument();
});

test("should show 3 tasks after filtering", () => {
    const app = render(<App />);

    for (let i = 0; i < 5; i++) {
        const input = app.getByTestId("addTaskInput");
        fireEvent.change(input, { target: { value: `New Task ${i}` } });
        const taskSubmit = app.getByTestId("addTaskSubmit");
        fireEvent.click(taskSubmit);
    }
    const input = app.getAllByTestId("checkbox");
    input.slice(0, 3).forEach((input) => fireEvent.click(input));

    const completed = app.getByTestId("completed");
    fireEvent.click(completed)

    const newTasks = screen.getAllByText(/New Task/i);
    
    expect(newTasks).toHaveLength(3);
});

test("should show 2 tasks after filtering", () => {
    const app = render(<App />);

    for (let i = 0; i < 5; i++) {
        const input = app.getByTestId("addTaskInput");
        fireEvent.change(input, { target: { value: `New Task ${i}` } });
        const taskSubmit = app.getByTestId("addTaskSubmit");
        fireEvent.click(taskSubmit);
    }
    const input = app.getAllByTestId("checkbox");
    input.slice(0, 3).forEach((input) => fireEvent.click(input));

    const completed = app.getByTestId("active");
    fireEvent.click(completed)

    const newTasks = screen.getAllByText(/New Task/i);
    
    expect(newTasks).toHaveLength(2);
});