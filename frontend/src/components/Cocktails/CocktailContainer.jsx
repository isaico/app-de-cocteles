import CocktailList from './CocktailList';
import CocktailContext from '../../context/CocktailsContext';
import { useContext, useEffect, useState } from 'react';
import filter from '../utils/filter';
//este componente va a renderizar una lista de cockteles dependiendo,con filtro o sin filtro

const CocktailContainer = () => {
    const [filterList, setFilterList] = useState([]);

    const {
        cocktails,
        userIngredients,
        getCocktails,
    } = useContext(CocktailContext); //lista de ingredientes y lista cockteles completa

    useEffect(() => {
        if (userIngredients.length === 0) {
            getCocktails();
        } else {
            handleFilter(cocktails, userIngredients);
        }
    }, [userIngredients]);

    const handleFilter = (list, filterParamsList) => {
        const updatedList = filter(list, filterParamsList);
        setFilterList(updatedList);
    };

    return (
        <>
            {userIngredients.length === 0 ? (
                <CocktailList cocktails={cocktails} />
            ) : userIngredients.length > 0 ? (
                <CocktailList cocktails={filterList} />
            ) : (
                <div>no hay tragos con esos ingreds</div>
            )}
        </>
    );
};
export default CocktailContainer;
