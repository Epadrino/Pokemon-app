import { defaultUtils } from '@nextui-org/react/types/theme/common';
import axios from 'axios';

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'

})


export default pokeApi;

