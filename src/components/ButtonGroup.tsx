import React from "react";

type BGProps = {
    changeModeHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const ButtonGroup = ({ changeModeHandler }: BGProps) => {
    return (
        <div className="inline-flex w-full justify-center mt-4" role="group">
            <button
                type="button"
                onClick={changeModeHandler}
                value="All"
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
                All
            </button>
            <button
                type="button"
                onClick={changeModeHandler}
                value="Active"
                data-testid="active"
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
                Active
            </button>
            <button
                type="button"
                onClick={changeModeHandler}
                value="Completed"
                data-testid="completed"
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
                Completed
            </button>
        </div>
    );
};

export default ButtonGroup;
