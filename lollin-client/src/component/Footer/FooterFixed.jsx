import React from 'react';
import { Logo, Container, Wrapper, Column, Row, FooterLink, Title, Copyright } from './FooterFixedElements';

const FooterFixed = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Row>
                        <Column>
                            <Logo>
                                <h1>Lollin</h1>
                            </Logo>
                        </Column>
                        <Column>
                            <Title>About Us</Title>
                            <FooterLink href="#">Wiki</FooterLink>
                            <FooterLink href="#">Client repository</FooterLink>
                            <FooterLink href="#">Server repository</FooterLink>
                        </Column>
                        <Column>
                            <Title>Team Spieler</Title>
                            <FooterLink href="#">조중우</FooterLink>
                            <FooterLink href="#">이호준</FooterLink>
                            <FooterLink href="#">연호진</FooterLink>
                            <FooterLink href="#">유승훈</FooterLink>
                        </Column>
                    </Row>
                </Wrapper>
                <Copyright>Copyright 2021. Team Spieler all pictures cannot be copied without permission.</Copyright> 
            </Container>
        </>
    )
}

export default FooterFixed
