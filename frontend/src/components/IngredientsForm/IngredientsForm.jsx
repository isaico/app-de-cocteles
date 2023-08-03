/* eslint-disable react/prop-types */


const IngredientsForm = ({ addIngredient }) => {
    // const {addIngredient} = useContext(AppContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const ingredient = Object.fromEntries(formData);
        const ingredientValue = ingredient.ingredient;
        addIngredient(ingredientValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="ingredient">Ingrediente</label>
            <input type="text" id="ingredient" name="ingredient" />
            <button type="submit">Agregar</button>
        </form>
    );
};


export default IngredientsForm;
