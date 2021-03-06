import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastyProvider } from '../src/contexts/Toasty';
import CheckAuth from '../src/components/CheckAuth';
import theme from '../src/theme';

//export default function MyApp(props) {
 // const { Component,  pageProps: { session, ...pageProps } } = props;




  export default function MyApp({
    Component, 
    pageProps: { session, ...pageProps }
  }) {

   
 

  return (
    <React.Fragment>
      <Head>
        <title>Anunx</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
        <ToastyProvider>
            <CssBaseline />
            {
              Component.requireAuth
              ? <CheckAuth  Component={Component} pageProps={pageProps} />
              :  <Component {...pageProps} />
            }
          </ToastyProvider>
        </ThemeProvider>
      </SessionProvider>  
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};