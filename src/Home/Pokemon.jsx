import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import useFetch from "../components/useFetch";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const Pokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=150";

    const { data, loading, error } = useFetch(url);

    //Función para extraer el ID del Pokémon desde URL

    const getPokemonId = (url) => url.split('/').filter(Boolean).pop();

    //Mostrar mensaje de carga mientras llega la APi

    if (loading)
         return (
            <Layout>
                <p>Cargando Pokémon...</p>
            </Layout>
        )
    // Mostrar mensaje de error si falla la API
    if (error) 
        return (
            <Layout>
            <p>Error en la carga de pokemon: {error.message}</p>
            </Layout>
        )

    return (
        <Layout>
        
            <Typography variant="h4" gutterBottom>
                Tarjetas de Pokémon
            </Typography>

            <Grid container spacing={2}>
                {data.results.map((pokemon) => {
                    const pokemonId = getPokemonId(pokemon.url);
                    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
                    
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
                            <Card sx={{ textAlign: "center", padding: 1 }}>
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
                        </Grid>
                    );
            
            })}

            </Grid>                     
        </Layout>
    )
}

export default Pokemon;