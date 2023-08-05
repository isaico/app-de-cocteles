import IngredientsForm from './IngredientsForm';
import IngredientsView from './IngredientsView';
import { useContext } from 'react';
import CocktailContext from '../../context/CocktailsContext'


const Ingredients = () => {
    const {userIngredients,updateUserIngredients,deleteUserIngredient} = useContext(CocktailContext);

    return (
        <>
            <IngredientsForm addIngredient={updateUserIngredients} />
            <IngredientsView />
        </>
    );
};

export default Ingredients;
