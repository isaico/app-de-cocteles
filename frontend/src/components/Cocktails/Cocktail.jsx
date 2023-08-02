/* eslint-disable react/prop-types */

const Cocktail = ({item}) => {
    console.log(item,"cada item")
    // console.log(item.cocktail,"item item")
    // console.log(item.cocktail,"cada item dentro")
    return (
        <>
            <div key={item.id}>
                <h3>{item.name}</h3>
                <div>{item.ingredients.map((subItem,i) => <p key={i}>{subItem}</p>)}</div>
                <p>{item?.recepy}</p>
            </div>
        </>
    );
};
export default Cocktail;
