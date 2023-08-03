import CocktailList from './CocktailList';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/cocktails.api';

const CocktailContainer = () => {
    
    const {
        isLoading,
        data: cocktails,
        isError,
        error,
    } = useQuery({
        queryKey: ['cocktails'],
        queryFn: getProducts,
    });
   
    return (
        <>
            {' '}
            {isLoading ? (
                <div>loading...</div>
            ) : isError ? (
                <div>Error: {error.message}</div>
            ) : (
                <CocktailList list={cocktails} />
            )}
        </>
    );
};
export default CocktailContainer;
