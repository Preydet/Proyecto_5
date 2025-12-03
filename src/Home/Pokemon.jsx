import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import useFetch from "../components/useFetch";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";



const Pokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=150";

    //Estado para filtrar los pokémon
    const [filter, setFilter] = useState("");

    //Hook personalizado para obtener datos de la API
    const { data, loading, error } = useFetch(url);

    //Función para extraer el ID del Pokémon desde URL

    const getPokemonId = (url) => url.split('/').filter(Boolean).pop();

    //Mostrar mensaje de carga mientras llega la APi

    if (loading)
         return (
            <Layout onFilter={setFilter}>
                <p>Cargando Pokémon...</p>
            </Layout>
        )
    // Mostrar mensaje de error si falla la API
    if (error) 
        return (
            <Layout onFilter={setFilter}>
            <p>Error en la carga de Pokémon: {error.message}</p>
            </Layout>
        )

    // Filtrar los pokémon según el texto del filtro
    const filteredData = data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Layout onFilter={setFilter}>
                                            
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 3 }}>

                {/*Tarjetas de Pokémon*/}

            </Typography>

            {/* Grid de tarjetas centradas */}

            <Box sx={{ 
                display: "flex",
                flexWrap: "wrap", 
                justifyContent: "center", 
                gap: 2,
                width: '100%',
                maxWidth: 1200,
                margin: '0 auto',
                }}>
                {filteredData.map((pokemon) => {
                    const pokemonId = getPokemonId(pokemon.url);
                    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
                    
                    return (
                        <Box key={pokemon.name} sx={{ 
                            flex: '1 1 150px',
                            maxWidth: '180px',
                            display: 'flex', 
                            justifyContent: 'center'

                            }}>
                            <Card sx={{ textAlign: "center", width: "100%", padding: 1, height: 200, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <CardActionArea component={Link} to={`/pokemon/${pokemonId}`}>
               
                                    {/*Imagen del pokemon*/}

                                    <CardMedia
                                        component="img"
                                        image={imageUrl}
                                        alt={pokemon.name}
                                        sx={{ width: "120px", height: "120px", margin: "0 auto"}}
                                    />

                                    {/*Nombre del pokemon*/}
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            sx={{ textTransform: "capitalize"}}
                                        >
                                            {pokemon.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                
                             </Card>
                        </Box>
                    );
            
            })}

            </Box>
                               
        </Layout>
    )
}

export default Pokemon;