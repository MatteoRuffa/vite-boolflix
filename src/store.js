import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv'
    },
    options: {
        params: {
            api_key: 'e7eb5a3cedc202ea1ab6986f0348fa7d',
            query: 'a',
        }
    },
    imageUrl: 'http://image.tmbd.org/t/p/original',
})