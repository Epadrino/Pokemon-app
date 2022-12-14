import { useEffect, useState } from "react"

import { Layout } from "../../components/layouts"
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorit } from "../../components/ui"
import { Pokemon } from "../../interfaces";
import { localFavorites } from "../../util";

const Favorite = () =>{

    const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);

    useEffect(() =>{

        setFavoritePokemons(localFavorites.pokemons());

    },[]);

    return(
       <Layout title="Favorite">
            {
                favoritePokemons.length === 0
                ? (<NoFavorit/>)
                : (<FavoritePokemons pokemons={favoritePokemons}/>)
            }
       </Layout>
    )
}

export default Favorite