import React from "react";
import Header from '../Components/Header/Header';
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
import Navigation from "../Components/Navigation/Navigation";
import Novelties from "../Components/Novelties/Novelties";
import novelties from '../Components/data/local/novelties';
import './FilmPage.css';

function FilmPage(){
    return (
        <div>
            <Container>
                <Header />
                <main>
                    <Navigation />
                    <h2 className={"novelties_title"}>🔥 Новинки</h2>
                    <Novelties dataArray={novelties} />
                    <h2 className={"genre_title"}>Жанры</h2>
                </main>
            </Container>
            <Footer />
        </div>
    )
}

export default FilmPage;
