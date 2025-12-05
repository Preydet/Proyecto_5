import { Box, Typography,Link, Stack } from "@mui/material"


const Footer = () => {
    return (
      <Box        
        sx={{
            width: '100vw',
            backgroundColor: '#1976d2',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 3,
            gap: 1,
            mt: 4,
            boxSizing: 'border-box',

        }}
    >
       {/* Información de contacto */}
       <Typography variant="body1" sx={{ mb:1 }}>
       {'\u00A9'} Pokédex React
       </Typography>

       <Typography variant="body2" sx={{ textAlign: "center" }}>
        Dirección: Calle Ficticia 123, Ciudad pokémon      
       </Typography>

       <Typography variant="body2" sx={{ textAlign: "center"}}>
        Telefóno: +56 9 124456789
       </Typography>      

       {/* Redes sociales ficticias*/}
       <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
        Síguemos en: Facebook | Twitter | Instagram
        </Typography>

    </Box>
  )
}

export default Footer;