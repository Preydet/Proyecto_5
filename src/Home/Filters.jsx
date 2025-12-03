import { Box, FormControl, Select, TextField, InputLabel, MenuItem } from "@mui/material"

const Filters = ({ filter, onFilterChange, type, onTypeChange } ) => {
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

        {/* Filtro por tipo */}
        <FormControl sx={{ minWidth: 150, backgroundColor: '#fff', borderRadius: 1 }}>
            <InputLabel>Tipo</InputLabel>
            <Select
                value={type}
                label="Tipo"
                onChange={(e) => onTypeChange(e.target.value)}
                >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="fire">Fuego</MenuItem>
                <MenuItem value="water">Agua</MenuItem>
                <MenuItem value="grass">Planta</MenuItem>
                <MenuItem value="electric">Eléctrico</MenuItem>
                <MenuItem value="psychic">Psíquico</MenuItem>
                <MenuItem value="ice">Hielo</MenuItem>
                <MenuItem value="dragon">Dragón</MenuItem>
                <MenuItem value="dark">Siniestro</MenuItem>
                <MenuItem value="fairy">Hada</MenuItem>
                </Select>
        </FormControl>
    </Box>      
    )
}

export default Filters;