import React from 'react'
import {ThemeProvider} from 'styled-components'
import App, {Container} from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'

const theme = {
  primary: 'rgb(0, 121, 191)',
}

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    )
  }
}

export default MyApp
