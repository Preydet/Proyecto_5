import { Box, TextField} from "@mui/material"

const Filters = ({ filter, onFilterChange} ) => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'nowrap',
                marginLeft: {sm: 2},
            }}
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