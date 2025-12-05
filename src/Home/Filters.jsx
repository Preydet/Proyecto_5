import { Box, TextField} from "@mui/material"

const Filters = ({ filter, onFilterChange} ) => {
    return (
        <Box
            component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                 > 
                               
        {/* Filtro por nombre */}
        <TextField
            label="Buscar Pokémon"
            variant="filled"
            size="small"
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
            sx={{ backgroundColor: '#fff', borderRadius: 1, minWidth: 200, width: {xs:'60vw', sm:250}, }} 
        />
    </Box>      
    
    )
}

export default Filters;