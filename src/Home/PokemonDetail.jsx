import { Box, Card, CardContent, CardMedia, Chip, Grid, LinearProgress, Typography } from "@mui/material";
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
            <Box sx={{ 
                    width: "100vw",
                    minHeight: "calc(100vh - 160px)",
                    display: "flex", 
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                }}>
                {/*Tarjeta Principal*/}
                <Card sx={{ 
                    width: "100%", 
                    maxWidth: 900, 
                    padding: 3,
                    display: "flex", 
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                                        
                    }}>

                    {/*Grid para imagen y datos*/}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} 
                        sx={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                        }}>
                    
                    {/* Imagen*/}
                    <CardMedia
                        component="img"
                        image={data.sprites.front_default}
                        alt={data.name}
                        sx={{ width: "200px", height: "200px", margin: "0 auto" }}
                    />

                    {/* Nombre */}
                    <Typography variant="h3" sx={{ textTransform: "capitalize", marginTop: 2 }}>
                        {data.name}
                    </Typography>

                    </Grid>

                    {/*Información general*/}

                    <Grid item xs={12} md={8}
                      sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                    }}

                    >
                                         
                    <CardContent sx={{ width: "100%" }}>

                        {/*Tipos*/}
                        <Typography variant="h6">Tipos:</Typography>
                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
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
                        <Typography variant="h6" sx={{ mb: 1 }}>Habilidades:</Typography>
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
                        <Typography variant="h6" sx={{ mb: 1 }}>Estadísticas:</Typography>
                        {data.stats.map((stat) => (
                            <Box key={stat.stat.name} sx={{ mb: 1 }}>
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
                    </Grid>
                    </Grid>
                </Card>                                                  
            </Box>
        </Layout>
    );        
   
}

export default PokemonDetail;