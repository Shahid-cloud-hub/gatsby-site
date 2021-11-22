import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "../Components/Card.js";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import { Container } from "../Components/styles/Container.styled";
import GlobalStyled from "../Components/styles/Global.js";
import content from "../Components/content";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

const IndexPage = () => {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyled />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default IndexPage