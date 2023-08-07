import React from 'react';

const ButtonGroup = ({ setIsButtonClicked }) => {
    return (
        <div className=" flex rounded-md shadow-sm mb-4 mt-4 lg:mt-0 lg:self-center " role="group">
            <button
                type="button"
                onClick={() => setIsButtonClicked(true)}
                className="inline-flex items-center px-4 py-2 text-md font-medium text-gray-100 bg-transparent border border-gray-100 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="mx-2 w-8"
                >
                    <path d="M7.5 7l-2-2h13l-2 2M11 13v6H6v2h12v-2h-5v-6l8-8V3H3v2l8 8z" />
                </svg>
                Ver todos los disponibles!
            </button>
            <button
                type="button"
                onClick={() => setIsButtonClicked(false)}
                className="inline-flex items-center px-2 py-2 text-md font-medium text-gray-100 bg-transparent border  rounded-r-lg  border-gray-100 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 "
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="mx-2  w-8"
                >
                    <path d="M13.33 12.67L7.66 7 6.13 5.47 2.39 1.73 1.11 3 3 4.89V5l8 8v6H6v2h12v-1.11l2.84 2.84 1.27-1.27-8.78-8.79M13 19v-4.11L17.11 19H13M8.2 5l-2-2H21v2l-6.4 6.4L10.2 7h6.3l2-2H8.2z" />
                </svg>
                Ocultar todos los disponibles!
            </button>
        </div>
    );
};

export default ButtonGroup;
