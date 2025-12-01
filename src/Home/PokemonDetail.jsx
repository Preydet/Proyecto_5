import { Box, Card, CardContent, CardMedia, Chip, LinearProgress, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";

const PokemonDetail = () => {
    const { id } = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const {data, loading, error} = useFetch(url);

    if (loading)
        return (
            <Layout>
                <p>Cargando detalles del Pokémon...</p>
            </Layout>
        );
    if (error)
        return (
            <Layout>
                <p>Error al cargar los detalles del Pokémon: {error.message}</p>
            </Layout>
        );

    return (
        <Layout>
            <Box sx={{ maxWidth: 600, margin: "0 auto"}}>
                {/*Tarjeta Principal*/}
                <Card sx={{ padding: 2, textAlign: "center" }}>

                    {/* Imagen*/}
                    <CardMedia
                        component="img"
                        image={data.sprites.front_default}
                        alt={data.name}
                        sx={{ width: "200px", height: "200px", margin: "0 auto" }}
                    />

                    {/* Nombre */}
                    <Typography variant="h3" sx={{ textTransform: "capitalize" }}>
                        {data.name}
                    </Typography>

                    <CardContent>

                        {/*Tipos*/}
                        <Typography variant="h6">Tipos:</Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, marginBottom: 2 }}>
                            {data.types.map((t) => (
                                <Chip
                                    key={t.type.name}
                                    label={t.type.name}
                                    sx={{ textTransform: "capitalize" }}
                                    color="primary"
                                />
                            ))}
                        </Box>

                        {/*Altura y Peso*/}
                        <Typography variant="body1"><strong>Altura:</strong> {data.height / 10} m</Typography>
                        <Typography variant="body1"><strong>Peso:</strong> {data.weight / 10} kg</Typography>

                        {/*Habilidades*/}
                        <Typography variant="h6" sx={{ mt: 3 }}>Habilidades:</Typography>
                        <Box>
                            {data.abilities.map((a) => (
                                <Typography
                                    key={a.ability.name}
                                    sx={{ textTransform: "capitalize"}}>
                                    - {a.ability.name}
                                </Typography>
                            ))}
                                    
                        </Box>

                        {/*Estadísticas*/}
                        <Typography variant="h5" sx={{ mt: 4 }}>Estadísticas:</Typography>
                        {data.stats.map((stat) => (
                            <Box Key={stat.stat.name} sx={{ my: 1 }}>
                                <Typography sx={{ textTransform: "capitalize" }}>
                                    {stat.stat.name}: {stat.base_stat}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={stat.base_stat > 100 ? 100 : stat.base_stat}
                                    
                                />
                            </Box>
                        ))}
                    </CardContent>
                </Card>                                                  
            </Box>
        </Layout>
    );        
   
}

export default PokemonDetail;