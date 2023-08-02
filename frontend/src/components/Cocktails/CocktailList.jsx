import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/cocktails.api';
import Cocktail from './Cocktail';

const Cocktails = () => {
    const {
        isLoading,
        data: cocktails,
        isError,
        error,
    } = useQuery({
        queryKey: ['cocktails'],
        queryFn: getProducts,
    });
    // if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                cocktails.map((cocktail) => (
                    <Cocktail key={cocktail.id} item={cocktail} />
                ))
            )}
        </div>
    );
};
export default Cocktails;
