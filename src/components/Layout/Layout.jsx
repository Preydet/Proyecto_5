import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "../ErrorBoundary";

const Layout = ({ children }) => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
    }}>
        {/* Header siempre visible */}
      
        <Header />

        {/* Contenido protegido por ErrorBoundary */}
        <ErrorBoundary>
            <Box sx={{ 
                flex: 1,
                display: 'flex',
                width: '100%',
                padding: 2,
                }}>
                {children}
            </Box>
        </ErrorBoundary>

        {/* Footer siempre visible */}

        <Footer />
    </Box>          
    
  )
}

export default Layout;