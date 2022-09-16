import { Spacer, Link, Text } from '@nextui-org/react'
import Image from 'next/image'
import NexLink from 'next/link'

import React from 'react'

export const Navbar = () => {
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: 'rgba(57,59,52,23) ',
    }}>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
          alt='icono de la app'
          width={70}
          height={70}
        />

        <NexLink href='/' passHref>
          <Link>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okémon</Text>
          </Link>
        </NexLink>

            <Spacer css={{flex: 1}}/>
        
        <NexLink href='/favorite' passHref>
          <Link css={{marginRight: '20px'}}> 
            <Text color='white' >Favoritos</Text>
          </Link>
        </NexLink>

        
    </div>
  )
}
