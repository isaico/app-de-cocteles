import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import IngredientsForm from '../components/IngredientsForm/IngredientsForm';
const Layout = () => {
    return (
        <>
            <Header />
            {/* <Main/> */}
            <Footer />
            <IngredientsForm></IngredientsForm>
        </>
    );
};

export default Layout;
