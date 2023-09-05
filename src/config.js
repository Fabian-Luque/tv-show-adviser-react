const BASE_URL= "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
const CONFIG = {
    headers:{
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2I5YWVkYWU2MDRlYjU4MjU4OWQ5NGVjZjBkNzA3OCIsInN1YiI6IjVkZTgzZGFkYTMxM2I4MDAxMjkyNTk3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0Sjmg8tKCRwNF7FnynGt8xqz2MMvNT5mm37MdJDs0M"
    }
}
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";
const SMALL_IMG_COVER_BASE_URL = "https://image.tmdb.org/t/p/w300";

export { BASE_URL, API_KEY_PARAM, CONFIG, BACKDROP_BASE_URL, SMALL_IMG_COVER_BASE_URL };