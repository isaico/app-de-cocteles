import { useState } from 'react';
const IngredientsForm = () => {
    const [ingr, setingr] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const ingredients = Object.fromEntries(formData);
        console.log(ingredients);
        setingr(ingredients);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="ingredient">Ingrediente</label>
            <input type="text" id="ingredient" name="ingredient" />
            <button type="submit">Agregar</button>
            <div>{ingr.ingredient}</div>
        </form>
    );
};

export default IngredientsForm;
