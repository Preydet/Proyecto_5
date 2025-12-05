import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import ErrorBoundary from "../ErrorBoundary";

const Layout = ({ children, filter, onFilterChange}) => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box',
    }}>
        {/* Header siempre visible */}
      
        <Header 
            filter={filter} 
            onFilterChange={onFilterChange}             
        />

        {/* Contenido protegido por ErrorBoundary */}
        <ErrorBoundary>
            <Box sx={{ 
                flex: 1,
                width: '100%',
                padding: 2,
                boxSizing: 'border-box',
                overflowY: 'auto',
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