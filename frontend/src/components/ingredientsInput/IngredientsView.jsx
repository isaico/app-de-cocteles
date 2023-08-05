import CocktailContext from '../../context/CocktailsContext';
import { useContext } from 'react';
const IngredientsView = () => {
    const { userIngredients, deleteUserIngredient } =
        useContext(CocktailContext); //lista de ingredientes y lista cockteles completa

    return (
        <div>
            {userIngredients.map((item, i) => (
                <div key={i}>
                    <h3>{item.ingredientValue}</h3>
                    <button onClick={() => deleteUserIngredient(item.id)}>
                        X
                    </button>
                </div>
            ))}
        </div>
    );
};

export default IngredientsView;
