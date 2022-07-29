import React, { useState, ChangeEvent } from "react";
import { CTask } from "../../models";

type TaskProps = {
    task: CTask;
};

const Task = ({ task }: TaskProps) => {
    const [update, setUpdate] = useState<boolean>(task.completed);

    const handleTaskComplete = (event: ChangeEvent<HTMLInputElement>): void => {
        setUpdate(event.target.checked);
        task.changeComplete();
    };

    return (
        <li className="w-full mb-2 last:mb-0 rounded-lg shadow-md bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input
                    checked={task.completed}
                    onChange={handleTaskComplete}
                    data-testid="checkbox"
                    type="checkbox"
                    id="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                    htmlFor="checkbox"
                    className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    {task.text}
                </label>
            </div>
        </li>
    );
};

export default Task;
