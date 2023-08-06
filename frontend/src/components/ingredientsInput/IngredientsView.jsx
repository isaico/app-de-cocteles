import CocktailContext from '../../context/CocktailsContext';
import { useContext } from 'react';
import {Button} from 'flowbite-react'
const IngredientsView = () => {
    const { userIngredients, deleteUserIngredient } =
        useContext(CocktailContext); //lista de ingredientes y lista cockteles completa

    return (
        <div>
            {userIngredients.map((item, i) => (
                <div key={i}>
                    <h3>{item.ingredientValue}</h3>
                    <Button color='success' onClick={() => deleteUserIngredient(item.id)}>
                        X
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default IngredientsView;
