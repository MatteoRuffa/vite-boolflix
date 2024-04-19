import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/',
    //popolarUrl: 'https://api.themoviedb.org/3/movie/popular',
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv',
        popularMovies: 'movie/popular',
        popularTvShows: 'tv/popular'
    },
    options: {
        params: {
            api_key: 'e7eb5a3cedc202ea1ab6986f0348fa7d',
            query: '',
        }
    },
    data: {
        movies: [],
        tvShows: [],
    },
    // movies: [],
    // tvShows: [],
    initialData: {
        movies: [],
        tvShows: [],
    },
    dataLoaded: false,
    searchQuery: '',
    imageUrl: 'http://image.tmdb.org/t/p/w500',
    
})