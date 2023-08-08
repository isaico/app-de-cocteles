/* eslint-disable react/prop-types */
import { useContext } from 'react';
import CocktailsContext from '../../context/CocktailsContext';
import DefaultModal from '../Modal/Modal';
// import useWindowDimensions from 'react-use';
const Cocktail = ({ item }) => {
    const { userIngredients } = useContext(CocktailsContext);

    return (
        <>
            <div
                className="sm:min-w-1/3 w-2/3 max-w-xs p-4 bg-thirthBg border border-gray-500 rounded-xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 grid"
                key={item.id}
            >
                <div className="">
                    <h3 className="mb-4 text-3xl font-semibold text-center text-color-main dark:text-gray-400 font-tilt">
                        {item.name}
                    </h3>

                    <ul role="list" className="space-y-3 my-7">
                        {item.ingredients.map((subItem, i) => (
                            <li className="flex space-x-3 items-center" key={i}>
                                <svg
                                    className={`flex-shrink-0 w-4 h-4 text-gray-500
                                          ${
                                              userIngredients.find(
                                                  (ing) =>
                                                      subItem ===
                                                      ing.ingredientValue
                                              )
                                                  ? 'text-pink-500'
                                                  : 'text-gray-500'
                                          }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-300 ">
                                    {subItem}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* //  MODAL PARA INTERCAMBIAR ENTRE MOBILE Y PC,   */}
                <div className="self-end">
                    {/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-purple-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-full">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Ver receta!
                        </span>
                    </button> */}
                    <DefaultModal item={item}></DefaultModal>
                    {/* <button
                        type="button"
                        className=" text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5  w-full text-center"
                    >
                        Ver receta
                    </button> */}
                </div>
            </div>
        </>
    );
};
export default Cocktail;
