APP.VUE
<template> 
  
  

  <AccountSelection v-if="!selectedAccount" @accountSelected="onAccountSelected" />
  <!-- <div v-else>
    <video  ref="netflixIntro" >
      <source src="/public/videos/Netflix-New-Logo-Animation-2019-(1).mp4" type="video/mp4" @error="onVideoError">
    </video> 
    
    <HeaderComponent :searchQuery="this.store.searchQuery" @searchQuery="searchQuery = $event" 
    @submit="onSubmit"/>
    <MainComponent  />
  </div> -->
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import AccountSelection from './components/AccountSelection.vue';
  export default {
    name: 'App',
    components: {
    //   HeaderComponent,
    //   MainComponent,
    //   AccountSelection,
    },
    data() {
      return {
        store,
        selectedAccount: null,
      }
    },
    methods: {
      onAccountSelected(account) {
        console.log('Received accountSelected event with account:', account);
        this.selectedAccount = account;
        this.$nextTick(() => {
          this.playVideo();
        });
      },
      playVideo() {
        this.$refs.netflixIntro.play();
        this.$refs.netflixIntro.onended = () => {
          this.$refs.netflixIntro.style.display = 'none';
        };
      },
      onVideoError() {
        console.error('Error loading video');
      },
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

