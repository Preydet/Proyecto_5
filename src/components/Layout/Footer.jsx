import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <Box
        component={Link}
        to="/"
        sx={{
            textAlign: 'center',
            padding: '1rem',
            marginTop: '2rem',
            backgroundColor: '#f1f1f1',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
            display: 'block'
        }}
    >
        <Typography variant="body2">
            &copy {new Date().getFullYear()} Pokédex React.
        </Typography>
    </Box>
  )
}

export default Footer;