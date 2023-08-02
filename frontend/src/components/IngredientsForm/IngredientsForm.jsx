import { useState } from 'react';
const IngredientsForm = () => {
    const [ingr, setingr] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const ingredient = Object.fromEntries(formData);
        // console.log(ingredient,"transofmado")
        // console.log(ingr,"State")
        console.log(ingredient);
        console.log(ingredient.ingredient);
        setingr([...ingr, ingredient.ingredient]);
        console.log(ingr,'estado');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="ingredient">Ingrediente</label>
            <input type="text" id="ingredient" name="ingredient" />
            <button type="submit">Agregar</button>
            <div>
                {ingr.map((element,i) => (
                    <h4 key={i}>{element}</h4>
                ))}
            </div>
        </form>
    );
};

export default IngredientsForm;
