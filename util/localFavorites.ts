import { Pokemon } from "../interfaces";


const toggleFavorite = (pokemon: Pokemon) => {

    let favorites: Pokemon[] = JSON.parse (localStorage.getItem ('favorites') || '[]');
    
    if (favorites.length == 0) {

        favorites.push (pokemon);

    }
     else {
       
        favorites.forEach(pokemonFavorito=>{
        
             if (pokemonFavorito.id === pokemon.id){
                 favorites = favorites.filter (poke => poke.id !== pokemon.id);
             } else {
                 favorites.push(pokemon);
             }
        }); 

    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));

}

const existInFavorites = (id: number): boolean => {

    if (typeof window === 'undefined') return false;

    let favorites: Pokemon[] = JSON.parse (localStorage.getItem ('favorites') || '[]');
    
    console.log(favorites.filter((pokemon)=> pokemon.id == id).length > 0)

    return favorites.filter((pokemon)=> pokemon.id == id).length > 0;
}

const pokemons =(): Pokemon[] =>{

    return JSON.parse( localStorage.getItem('favorites') || '[]');

}

export default{
    toggleFavorite,
    existInFavorites,
    pokemons,
}