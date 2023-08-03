// import { useQuery } from '@tanstack/react-query';
// import { getProducts } from '../../api/cocktails.api';
import Cocktail from './Cocktail';

const CocktailList = (list) => {

    return (
        <div>
            {list.list.map((cocktail) => (
                <Cocktail key={cocktail.id} item={cocktail} />
            ))}
        </div>
    );
};
export default CocktailList;
