import { Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
    const { id } = useParams();

    return (
        <Layout>
            <Typography variant="h4">
                Detalle del Pokémon #{id}
            </Typography>
        </Layout>
    );
}

export default PokemonDetail;