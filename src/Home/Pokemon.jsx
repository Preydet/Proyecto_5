import { Typography } from "@mui/material";
import useFetch from "../components/useFetch";

const Pokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

    const { data, loading, error } = useFetch(url);

    console.log("Datos de la API", data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error en la carga de pokemon: {error.message}</p>;

    return (
        <>
            <Typography>Tarjetas de pokemon</Typography>
            <ul>
                {data.results.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}

            </ul>            
        </>
    );
}

export default Pokemon;