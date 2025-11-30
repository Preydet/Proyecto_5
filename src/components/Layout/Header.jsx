import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const Header = () => {
      return (
    <AppBar position="static">
        <Toolbar>
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
        </Toolbar> 
    </AppBar>   
  ) 
}

export default Header;