/* eslint-disable react/prop-types */

const Cocktail = ({item}) => {
   
    return (
        <>
            <div key={item.id}>
                <h3 className={"text-2xl"} >{item.name}</h3>
                <div>{item.ingredients.map((subItem,i) => <p key={i}>{subItem}</p>)}</div>
                <p>{item?.recepy}</p>
            </div>
        </>
    );
};
export default Cocktail;
