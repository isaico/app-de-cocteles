import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CocktailContainer from '../components/Cocktails/CocktailContainer';
import IngredientsForm from '../components/IngredientsForm/IngredientsForm';

export const AppContext = React.createContext();

const Layout = () => {
    const [ingredients, setIngredients] = useState([]);

    function addIngredient(value) {
        setIngredients([...ingredients, value]);
        console.log('cargado con exito', ingredients);
    }
    return (
        <>
            <Header />
            <Footer />
            <div>
                {ingredients.map((item,i)=><div key={i}>{item}</div>)}
            </div>
            <IngredientsForm addIngredient={addIngredient}></IngredientsForm>
            <CocktailContainer />
        </>
    );
};

export default Layout;
