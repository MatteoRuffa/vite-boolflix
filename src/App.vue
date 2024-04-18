<template> 
  <!-- <video id="netflix-intro" autoplay muted>
    <source src="/public/videos/Netflix-New-Logo-Animation-2019-(1).mp4" type="video/mp4">
  </video>

  <audio id="netflix-sound" autoplay>
    <source src="/public/audio/Netflix-New-Logo-Animation-2019.mp3" type="audio/mpeg">
  </audio> -->
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
      getDataShows() {
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
          console.log(res.data.results);
          this.store.data.movies = res.data.results;
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          console.log('finally');
        }),
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          console.log(res.data.results);
          this.store.data.tvShows = res.data.results;
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          console.log('finally');
        })
      },
      searchShows() {
        this.store.options.params.query = this.searchQuery;
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
          this.store.data.movies = res.data.results;
          console.log('Movie data:', res.data);
        }).catch((err) => {
          console.error('Error fetching movie data:', err);
        })
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          this.store.data.tvShows = res.data.results;
          console.log(res.data.results);
        }).catch((err) => {
          console.error('Error fetching TV show data:', err);
        })
      },
      onSubmit() {
        this.searchShows();
      },
    },
    created() {
      //this.searchShows();
      this.getDataShows()
    }, 
    mounted() {
    //   const video = document.getElementById('netflix-intro');
    //   const audio = document.getElementById('netflix-sound');
    //   video.onplay = () => {
    //     audio.play();
    //   };
    //   video.onended = () => {
    //     video.style.display = 'none';
    //     audio.pause();
    //     audio.currentTime = 0;
    //   };
    //   video.oncanplaythrough = () => {
    //     video.play();
    //   }
  }
}
</script>

<style lang="scss" scoped>
#netflix-intro {
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



