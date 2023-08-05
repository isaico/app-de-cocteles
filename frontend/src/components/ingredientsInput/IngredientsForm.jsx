/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';

const IngredientsForm = ({ addIngredient }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const ingredient = Object.fromEntries(formData);
        const ingredientValue = fistCharUpper(ingredient.ingredient)
        addIngredient({ ingredientValue, id: uuidv4() });
    };
    const fistCharUpper = (string) => {
        const cadena = string.trim();
        const firstLetter = cadena.charAt(0);
        const modifiedString = firstLetter.toUpperCase() + cadena.substring(1);
        return modifiedString;
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="ingredient">Ingrediente</label>
            <input
                type="text"
                id="ingredient"
                name="ingredient"
                placeholder="ejemplo: vodka"
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default IngredientsForm;
