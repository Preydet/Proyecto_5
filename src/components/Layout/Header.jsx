import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import pokeball from '../../assets/img/pokeball.png';
import Filters from "../../Home/Filters";

const Header = ({filter, onFilterChange}) => {
      return (
        <Box sx={{
            width: '100vw',
            backgroundColor: '#1976d2',
            color: "#fff",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
            gap: 1,
            boxSizing: 'border-box',
            position: 'relative',
        }}
        >
        {/* Fila superior: icono + titulo */}
        <Box sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            height: 60,
            }}
        >

    
        {/* Favicon a la izquierda y clickeable*/}

        <Link to="/" style={{
            position: 'absolute',
            left: '8rem',
            top: '50%',
            transform: 'translateY(-50%)'            
        }}>
        
        <Box                   
                component={'img'}
                src={pokeball}
                alt="Pokédex icon"
                sx={{
                    width: 60,
                    height: 60,
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
        </Box>    
            <Box>
                <Filters
                    filter={filter}
                    onFilterChange={onFilterChange}                  
                    
                    />  
            </Box>
        </Box>
      )
}
        

  


export default Header;