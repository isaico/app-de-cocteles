import Cocktail from './Cocktail';

const CocktailList = ({ cocktails }) => {
    return (
        <div className='bg-secondaryBg flex flex-wrap basis-2/3 rounded-xl gap-4 justify-center p-8' id='cocktailList'>
            {cocktails?.map((cocktail) => (
                <Cocktail key={cocktail.id} item={cocktail} />
            ))}
        </div>
    );
};
export default CocktailList;
