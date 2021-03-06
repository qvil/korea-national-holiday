import React from "react";
import App, { Container } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
// import theme from "../styles/theme";
import darkTheme from "../styles/darkTheme";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Component {...pageProps} />
          <GlobalStyle />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;
