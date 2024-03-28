import React from "react";
import Header from '../Components/Header/Header';
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
import Main from "../Components/Main/Main";

function FilmPage(){
    return (
        <div>
            <Container>
                <Header />
                <Main />
            </Container>
            <Footer />
        </div>
    )
}

export default FilmPage;
