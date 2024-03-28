import React from "react";
import "./Footer.css";
import image from "../../assets/icon/footer_icon.png";
import Container from '../Container/Container';

function Footer(){
    return (
        <footer>
            <Container>
                <img src={image} alt="" />
                <div className="contact_info">
                    <p className="adress">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
                    <p className="tel">+7 (3412) 93-88-61, 43-29-29</p>
                    <p className="other_link">
                        <a className="link" href="htc-cs.ru">htc-cs.ru</a>
                    </p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;