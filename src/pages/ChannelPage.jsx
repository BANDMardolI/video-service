import React from "react";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Navigation from "../Components/Navigation/Navigation";
import Container from "../Components/Container/Container";
import Channels from '../Components/Channels/Channels';
import channels from '../Components/data/local/channels';

function ChannelPage(){
    return(
        <div>
            <Container>
                <Header />
                <Navigation />
                <Channels dataArray={channels} />
            </Container>
            <Footer />
        </div>
    )
} 

export default ChannelPage;