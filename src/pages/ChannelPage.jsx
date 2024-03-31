import React from "react";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Navigation from "../Components/Navigation/Navigation";
import Container from "../Components/Container/Container";

function ChannelPage(){
    return(
        <div>
            <Container>
                <Header />
                <Navigation />
            </Container>
            <Footer />
        </div>
    )
} 

export default ChannelPage;