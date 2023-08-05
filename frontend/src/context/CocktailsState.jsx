import axios from 'axios';
import CocktailsContext from './CocktailsContext';
import CocktailsReducer from './CocktailsReducer';
import {
    GET_COCKTAILS,
    UPDATE_USER_INGREDIENTS,
    DELETE_USER_INGREDIENT
} from './types';

import React, { useReducer } from 'react';

const CocktailState = (props) => {
    //conecto la url con axios, utilizo reactQuery y Json server
    const respApi = axios.create({ baseURL: 'http://localhost:3000' });
    //creo el estado inicial
    const initialState = {
        cocktails: [],
        userIngredients: [],
        
    };

    //dispatch escucha los cambios, initialState el valor de los datos iniciales
    const [state, dispatch] = useReducer(CocktailsReducer, initialState);

    //funcion para obtener productos
    const getCocktails = async () => {
        try {
            const res = await respApi.get('/cocktails');
            const data = res.data;
            dispatch({ type: GET_COCKTAILS, payload: data });
        } catch (error) {
            console.log(error);
        }
    };
    
   
    const updateUserIngredients = (data) => {
        dispatch({
            type: UPDATE_USER_INGREDIENTS,
            payload: data,
        });
    };
    const deleteUserIngredient = (id) => {
        dispatch({
            type: DELETE_USER_INGREDIENT,
            payload: id,
        });
    };

    return (
        <CocktailsContext.Provider
            value={{
                cocktails: state.cocktails,
                userIngredients: state.userIngredients,
                getCocktails,
                updateUserIngredients,
                deleteUserIngredient
            }}
        >
            {props.children}
        </CocktailsContext.Provider>
    );
};
export default CocktailState;
