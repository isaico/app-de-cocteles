import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';

// export const AppContext = React.createContext();

const Layout = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default Layout;
