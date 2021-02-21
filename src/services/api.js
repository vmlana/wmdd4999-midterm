import axios from 'axios'

import { API_KEY, BASE_URL } from '../config/api_config'

export const getMovies = async recipeName => {
  const url = `${BASE_URL}/now_playing?api_key=${API_KEY}`
  try {
    const response = await axios.get(url)

    const movies = response.data.results

    console.log(movies);

    return movies
  } catch (error) {
    throw error
  }
}

