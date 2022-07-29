import React, { useState, ChangeEvent, FormEvent } from "react";
import { CTask } from "./models";
import Task from "./components/Task/Task";
import ButtonGroup from "./components/ButtonGroup";

type Mode = "All" | "Active" | "Completed";

const App = () => {
    const [tasks, setTasks] = useState<CTask[]>([]);
    const [newTask, setNewTask] = useState<string>("");
    const [mode, setMode] = useState<Mode>("All");

    const handleTaskInputChange = (
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        setNewTask(event.target.value);
    };

    //Создаем таск, кидаем в массив и очищаем инпут
    const addNewTask = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const task = new CTask(newTask);
        setTasks((prev) => [...prev, task]);
        setNewTask("");
    };

    //Меняем режим отображения
    const changeModeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        setMode(button.value as Mode);
    };

    //Фильтруем и отдаем массив в зависимости от режима
    const getArray = () => {
        switch (mode) {
            case "All":
                return tasks;
            case "Active":
                return tasks.filter((task) => task.completed == false);
            case "Completed":
                return tasks.filter((task) => task.completed == true);
        }
    };

    return (
        <div className="w-full min-h-screen flex justify-center pt-4 bg-gray-100 dark:bg-gray-600">
            <div className="flex flex-col w-full justify-center items-center max-w-xl">
                <form className="w-full mb-4" onSubmit={addNewTask}>
                    <div className="relative">
                        <input
                            className="block shadow-lg p-4 pl-5 pr-28 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="New task"
                            type="text"
                            id="addTaskInput"
                            data-testid="addTaskInput"
                            value={newTask}
                            onChange={handleTaskInputChange}
                            required
                        />
                        <button
                            type="submit"
                            data-testid="addTaskSubmit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add task
                        </button>
                    </div>
                </form>
                <ul className="w-full text-sm font-medium text-gray-900 rounded-lg dark:text-white">
                    {getArray().map((task: CTask, index: number) => (
                        <Task key={index} task={task} />
                    ))}
                </ul>

                <ButtonGroup changeModeHandler={changeModeHandler} />
            </div>
        </div>
    );
};

export default App;
