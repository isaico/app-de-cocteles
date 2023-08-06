
import IngredientsView from '../ingredientsInput/IngredientsView';
import CocktailContainer from '../Cocktails/CocktailContainer';
import CocktailState from '../../context/CocktailsState';
import Header from '../Header/Header';
const Main = () => {
   

    return (
        <>
            <CocktailState>
                <Header />
                <IngredientsView />
                <CocktailContainer />
            </CocktailState>
        </>
    );
};

export default Main;
