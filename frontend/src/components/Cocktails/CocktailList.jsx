import Cocktail from './Cocktail';

const CocktailList = ({ cocktails }) => {
    // console.log(cocktails,"cocktailsLIST")
    return (
        <div>
            {cocktails?.map((cocktail) => (
                <Cocktail key={cocktail.id} item={cocktail} />
            ))}
        </div>
    );
};
export default CocktailList;
