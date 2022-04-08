import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';
const KEY = '084ca305e7a4e4bb3dbbc7b67e975385';
getMovies();

export async function getMovies() {
  const response = await axios.get(`${BASE_URL}?api_key=${KEY}&language=en-US&page=1`);
  try {
    const data = response.data.results;
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
