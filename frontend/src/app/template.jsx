'use client';
import { SnackbarProvider } from 'notistack';
import React, { useEffect } from 'react';



const Template = ({ children }) => {

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');

    }, []);

    return (

        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: "center" }} autoHideDuration={1000}>
            {children}
        </SnackbarProvider>
    )
}

export default Template;