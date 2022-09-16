import { Grid } from '@nextui-org/react';
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';

import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { SmallPokemon, PokemonListResponse } from '../interfaces';

interface Props{
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({pokemons}) => {
  
  return (
    <Layout title='Listado de Pokémon'>

     <Grid.Container gap={2} justify='flex-start'>
      {
        pokemons.map((pokemon) =>(
              <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))
      }
     </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  
  const pokemons: SmallPokemon[] = data.results.map((poke: any, i: number) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  })) 

  return {
    props:{
      pokemons
    }
  }
}

export default Home
