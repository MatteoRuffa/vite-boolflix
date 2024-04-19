APP.VUE
<template> 
  <video ref="netflixIntro" autoplay muted>
    <source src="/public/videos/Netflix-New-Logo-Animation-2019-(1).mp4" type="video/mp4">
  </video>

  <audio ref="netflixSound" autoplay>
    <source src="/public/audio/Netflix-New-Logo-Animation-2019.mp3" type="audio/mpeg">
  </audio>
  <HeaderComponent :searchQuery="this.store.searchQuery" @searchQuery="searchQuery = $event" @submit="onSubmit"/>
  <MainComponent />
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getTopRatedMovies() {
        axios.get(this.store.apiUrl + this.store.endPoint.popularMovies, this.store.options).then((res) => {
            this.store.initialData.movies = res.data.results;
            console.log('Top rated movie data:', res.data);
        }).catch((err) => {
            console.error('Error fetching top rated movie data:', err);
        })
        axios.get(this.store.apiUrl + this.store.endPoint.popularTvShows, this.store.options).then((res) => {
            this.store.initialData.tvShows = res.data.results;
            console.log('Top rated tvShows data:', res.data);
        }).catch((err) => {
            console.error('Error fetching top rated movie data:', err);
        })
      },
      
      searchShows() {
        this.store.options.params.query = this.searchQuery;
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
          this.store.data.movies = res.data.results;
          this.store.dataLoaded = true;
          console.log('Movie data:', res.data);
          console.log(this.store.dataLoaded);
        }).catch((err) => {
          console.error('Error fetching movie data:', err);
        })
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          this.store.data.tvShows = res.data.results;
          this.store.dataLoaded = true; 
          console.log('tvShows data:', res.data);
          console.log(this.store.dataLoaded);
        }).catch((err) => {
          console.error('Error fetching TV show data:', err);
        })
      },
      onSubmit() {
        this.searchShows();
      },
    },
    created() {
      this.getTopRatedMovies();
      //this.searchShows();
      // this.getDataShows();
    }, 
    mounted() {
      console.log(this.store.dataLoaded);
      this.$refs.netflixIntro.onplay = () => {
      this.$refs.netflixSound.play();
      };
      this.$refs.netflixIntro.onended = () => {
        this.$refs.netflixIntro.style.display = 'none';
        this.$refs.netflixSound.pause();
        this.$refs.netflixSound.currentTime = 0;
      };
      this.$refs.netflixIntro.oncanplaythrough = () => {
        this.$refs.netflixIntro.play();
      }
    }
}
</script>

<style lang="scss" scoped>
video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1000;
  background-size: cover;
}

</style>

