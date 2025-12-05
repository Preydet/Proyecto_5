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
            height: { xs: 60, sm: 100},
            px: {xs: 2, sm: 4 },
            }}
        >

    
        {/* Favicon a la izquierda y clickeable*/}

        <Link 
            to="/"
            onClick={() => onFilterChange("")}
            style={{
            position: 'absolute',
            left: 64,
            top: '50%',
            transform: 'translateY(-50%)'            
        }}>
        
        <Box                   
                component={'img'}
                src={pokeball}
                alt="Pokédex icon"
                sx={{
                    width: { xs: 40, sm:60 },
                    height: { xs: 40, sm: 60 },
                }}
            />
        </Link>
                    

            {/* Título */}
            <Typography 
                variant="h6"
                    sx={{ 
                    color: "white",
                    textAlign: 'center',
                    flexGrow: 1,
                    fontSize: { xs: '1rem', sm: '1.5rem'},

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