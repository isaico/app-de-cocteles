import CocktailContext from '../../context/CocktailsContext';
import { useContext } from 'react';

const IngredientsView = () => {
    const { userIngredients, deleteUserIngredient } =
        useContext(CocktailContext); //lista de ingredientes y lista cockteles completa

    return (
        <div
            className="bg-secondaryBg md:py-8 lg:px-12 px-4 rounded-2xl flex flex-col items-center lg:mr-16 mb-8 p-4 md:mb-8  max-h-72 md:max-h-[34rem] overflow-auto sm:min-w-max w-full"
            id="toastContainer"
        >
            <h2 className=" text-xl text-gray-200 pb-2">Ingredientes:</h2>
            {userIngredients.length === 0 ? (
                <div className="flex max-w-xs items-center mt-4 text-color-main pb-2 md:pb-0">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        className='mx-2 w-8'
                    >
                        <path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z" />
                        <path d="M4.9 4.9l14.2 14.2" />
                    </svg>
                    <span className="text-gray-200 text-sm ">
                    Todavía no ingresaste ingredientes
                    </span>
                </div>
            ) : (
                userIngredients.map((item, i) => (
                    <div
                        id="toast-default"
                        className="flex items-center my-2  w-full max-w-xs p-3 sm:p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 font-tilt"
                        role="alert"
                        key={i}
                    >
                        <div className="ml-3 text-sm font-semibold">
                            {item.ingredientValue.toUpperCase()}
                        </div>
                        <button
                            type="button"
                            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                            data-dismiss-target="#toast-default"
                            aria-label="Close"
                            onClick={() => deleteUserIngredient(item.id)}
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-3 h-3 text-color-main"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                               
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default IngredientsView;
