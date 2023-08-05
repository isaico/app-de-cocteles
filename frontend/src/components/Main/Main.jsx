import { useState } from 'react';
import Ingredients from '../ingredientsInput/Ingredients';
import CocktailContainer from '../Cocktails/CocktailContainer';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/cocktails.api';
import CocktailState from '../../context/CocktailsState';
// export const MyContext = createContext(null);

const Main = () => {
    // const [ingredients, setIngredients] = useState([]); //lista de los ingredeintes agregados por usuario
    // const {
    //     isLoading,
    //     data,
    //     isError,
    //     error,
    // } = useQuery({
    //     queryKey: ['cocktails'],
    //     queryFn: getProducts,
    // });

    return (
        <CocktailState>
            <Ingredients />
            {/* {isLoading ? (
                <div>loading</div>
            ) : isError ? (
                <div>error:{error}</div>
            ) : (
                )} */}
            <CocktailContainer />
        </CocktailState>
    );
};

export default Main;
