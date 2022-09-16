import React, { FC } from 'react'

import { Grid } from '@nextui-org/react'

import { FavoriteCardsPokemons } from './'
import { Pokemon } from '../../interfaces';

interface Props{
    pokemons: Pokemon[];
}

export const FavoritePokemons: FC<Props> = ({pokemons}) => {
  return (
    
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
        pokemons.map(pokemon => (
            <FavoriteCardsPokemons key={pokemon.id} pokemonName={pokemon.name} pokemonId={pokemon.id}/>
        ))
    }
    </Grid.Container>
  )
}
