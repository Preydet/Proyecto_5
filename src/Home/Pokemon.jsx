import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
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

            <Grid container spacing={3} justifyContent={"center"} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                {filteredData.map((pokemon) => {
                    const pokemonId = getPokemonId(pokemon.url);
                    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
                    
                    return (
                        //Cada item ocupa 2 columnas de 12 en pantalla md, 6 por fila
                        <Grid item xs={6} sm={4} md={2} lg={2} xl={2} key={pokemon.name} sx={{ display: "flex", justifyContent: "center" }}>                        
                            
                            <Card sx={{ 
                                textAlign: "center", 
                                width: "100%",
                                maxWidth: 180,
                                padding: 1, 
                                height: 220, 
                                display: "flex", 
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                flexGrow: 0,
                               
                                }}>
                                <CardActionArea component={Link} to={`/pokemon/${pokemonId}`}>
               
                                    {/*Imagen del pokemon*/}

                                    <CardMedia
                                        component="img"
                                        image={imageUrl}
                                        alt={pokemon.name}
                                        sx={{ 
                                            maxWidth: "100%", 
                                            height: "130px",
                                            objectFit: "contain", 
                                            margin: "0 auto"
                                        }}
                                    />

                                    {/*Nombre del pokemon*/}
                                    <CardContent sx={{
                                        flexGrow: 1,
                                        display: "flex", 
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 1,
                                    }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ textTransform: "capitalize"}}
                                        >
                                            {pokemon.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                
                             </Card>
                        </Grid>
                    );
            
            })}
            </Grid>
            
                               
        </Layout>
    )
}

export default Pokemon;