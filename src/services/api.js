import axios from 'axios'

import { API_KEY, BASE_URL } from '../config/api_config'

export const getMovies = async recipeName => {
  const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
  try {
    const response = await axios.get(url)

    const movies = response.data.results

    console.log(movies);

    return movies
  } catch (error) {
    throw error
  }
}


export const getConfig = async config => {
  const url = `${BASE_URL}/configuration?api_key=${API_KEY}`
  try {
    const response = await axios.get(url)
    const config = response.data
    
    console.log(config);

    return config
  } catch (error) {
    throw error
  }
}

