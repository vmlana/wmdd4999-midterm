import axios from 'axios'

import { API_KEY, BASE_URL } from '../config/api_config'

export const getMovies = async (origin, category, keyword) => {

  let endpoint = ''
  if (origin === 'movie') {
    if (category === 0) {
      endpoint = 'movie/now_playing'
    } else if (category === 1) {
      endpoint = 'movie/popular'
    } else if (category === 2) {
      endpoint = 'movie/top_rated'
    } else if (category === 3) {
      endpoint = 'movie/upcoming'
    } else {
      endpoint = 'movie/now_playing'
    }
  } else if (origin === 'tv') {
    if (category === 0) {
      endpoint = 'tv/airing today'
    } else if (category === 1) {
      endpoint = 'tv/on_the_air'
    } else if (category === 2) {
      endpoint = 'tv/popular'
    } else if (category === 3) {
      endpoint = 'tv/top_rated'
    } else {
      endpoint = 'tv/airing_today'
    }
  } else {
    if (category === 0) {
      endpoint = 'search/multi'
    } else if (category === 1) {
      endpoint = 'search/movie'
    } else if (category === 2) {
      endpoint = 'search/tv'
    } else {
      endpoint = 'search/multi'
    }
  }


  let url = '';
  if (keyword === undefined || keyword === '') {
    url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}`
  } else {
    url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&query=${keyword}`
  }

  try {
    const response = await axios.get(url)
    const movies = response.data.results

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
    return config
  } catch (error) {
    throw error
  }
}

