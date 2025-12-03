import { Box, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import pokeball from '../../assets/img/pokeball.png';

const Header = ({onFilter}) => {
      return (
        <Box sx={{
            width: '100vw',
            maxWidth: '100%',
            height: 80,
            backgroundColor: '#1976d2',
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'row'},
            alignItems: 'center',
            justifyContent: 'center',
            color: "#fff",
            padding: 2,
            gap: 1,
            position: 'relative',
        }}
        >
        {/* Favicon a la izquierda y clickeable*/}

        <Link to="/" style={{ 
            position: 'absolute',
            left: 16,
        }}>
        
        <Box                   
                component={'img'}
                src={pokeball}
                alt="Pokédex icon"
                sx={{
                    width: 40,
                    height: 40,
                }}
            />
        </Link>
                    

            {/* Título */}
            <Typography 
                variant="h6"
                    sx={{ 
                    color: "white",
                    textDecoration: "none",
                    cursor: "default",
                    flexShrink: 0,

                 }}
            >
                Pokédex React
            </Typography>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="filled-basic"
                    label="Filled"
                    variant="filled"
                    size="small"
                    onChange={(e) => onFilter(e.target.value)}
                    sx={{ 
                        backgroundColor: '#fff',
                        borderRadius: 1,
                        mt: { xs: 1, sm: 0},
                        width: { xs: '90%', sm: '25ch'},
                        flexShrink: 0
                    }}
                    />  
                </Box>
        </Box>

  ) 
}

export default Header;