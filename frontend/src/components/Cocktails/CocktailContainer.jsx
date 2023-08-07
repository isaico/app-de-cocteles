import CocktailList from './CocktailList';
import CocktailContext from '../../context/CocktailsContext';
import Loading from '../Loading/Loading';
import { useContext, useEffect, useState } from 'react';
import filter from '../utils/filter';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
//este componente va a renderizar una lista de cockteles dependiendo,con filtro o sin filtro

const CocktailContainer = () => {
    const [filterList, setFilterList] = useState([]);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { cocktails, userIngredients, getCocktails } =
        useContext(CocktailContext); //lista de ingredientes y lista cockteles completa

    useEffect(() => {
        if (userIngredients.length === 0) {
            getCocktails();
            setIsLoading(false);
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
            {isLoading ? (
                <Loading />
            ) : userIngredients && userIngredients.length === 0 ? (
                <div className="flex flex-col items-center">
                    {/* <ButtonGroup setIsButtonClicked={setIsButtonClicked} /> */}
                   
                        {isButtonClicked && (
                            <CocktailList cocktails={cocktails}></CocktailList>
                        )}
                    
                </div>
            ) : filterList && userIngredients.length > 0 ? (
                <CocktailList cocktails={filterList} />
            ) : (
                <div>no hay tragos con esos ingredientes</div>
            )}
        </>
    );
};
export default CocktailContainer;
