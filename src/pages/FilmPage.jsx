import React from "react";
import Header from '../Components/Header/Header';
import './FilmPage.css';
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
import Navigation from "../Components/Navigation/Navigation";
import Novelties from "../Components/Novelties/Novelties";
import novelties from '../Components/data/local/novelties';
import Genres from '../Components/Genres/Genres';
import genres from '../Components/data/local/genres';

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
                    <Genres dataArray={genres} />
                </main>
            </Container>
            <Footer />
        </div>
    )
}

export default FilmPage;
