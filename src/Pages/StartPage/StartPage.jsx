import React from "react";
import mainLogo from '../../assets/startPage/scb_logo_RGB_NEW_main 1.svg';
import cardLeft from '../../assets/startPage/image 25.svg';
import cardRight from '../../assets/startPage/image 26.svg';
import {Container} from "react-bootstrap";
import s from './startPage.module.scss';
import {LogInButton} from "../../UI/LogInButton/LogInButton";

const StartPage = () => {
    return(
        <Container fluid>
            <div className={s.logo__container}>
                <img src={mainLogo} alt={"mainLogo"}/>
            </div>

            <div className={s.images__container}>
                <div className={s.blur}/>
                <img src={cardLeft} className={s.card} alt={"card"}/>
                <img src={cardRight} className={s.card2} alt={"card"}/>
            </div>

            <div className={s.button__container}>
                <LogInButton/>
                {/*<SignUpButton/>*/}
            </div>


        </Container>
    )
}

export default StartPage