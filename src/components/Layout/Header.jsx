import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const Header = () => {
      return (
        <Box sx={{
            width: '100vw',
            height: 80,
            backgroundColor: '#1976d2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: "#fff",
        }}
        >
            <Typography 
                variant="h6"
                component={Link}
                to="/"
                sx={{ 
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                 }}
            >
                Pokédex React
            </Typography>
        </Box>

  ) 
}

export default Header;