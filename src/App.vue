<template>
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
        }),
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          console.log(res.data.results);
        })
      },
      searchShows() {
        this.store.options.params.query = this.searchQuery;
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
          this.store.movies = res.data.results;
          console.log(res.data.results, this.movies);
        }),
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          this.tvShows = res.data.results;
          //console.log(res.data.results, this.tv);
        })
      },
      onSubmit() {
        this.searchShows();
      },
    },
    created() {
      //this.getDataShows()
    }
  }
</script>

<style lang="scss" scoped>

</style>