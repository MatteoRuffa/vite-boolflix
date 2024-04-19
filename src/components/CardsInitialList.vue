<template>
    <div v-for="(shows, type) in allShowsInitial" :key="type">
        <h2>Most popular {{ type }} </h2>
        <div class="mr-row"  :ref="`${type}-container`">
            <div class="card-container"  v-for="card in shows" :key="card.id">
                <CardComponent :id="card.id" :title="card.title || card.name" :original_title="card.original_title" :original_language="card.original_language" 
                :vote_average="card.vote_average" :overview="card.overview"  :poster_path="card.poster_path"/>
            </div>
        </div>
        <i class="fa-solid fa-angle-left" @click="scrollContentbehind(type)"></i>
        <i class="fa-solid fa-chevron-right" @click="scrollContentForward(type)"></i>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        props: ['movies', 'tvShows'],
        components: {
            CardComponent
        },
        data() {
            return {
                store
            }
        },
        methods: {
            scrollContentForward(type) {
                const element = this.$refs[`${type}-container`][0]; //NON FUNZIONAVA PERCHE $refs E UN ARRAY E NONUN OGGETTO!!!![0]FUNGE!!!È VIVOOOO!!!
                if (element) {
                    element.scrollBy({
                        left: 1215, 
                        behavior: "smooth",
                    });
                } else {
                    console.error(`Element with ref ${type}-container not found`);
                }
            },
            scrollContentbehind(type) {
                const element = this.$refs[`${type}-container`][0];
                if (element) {
                    element.scrollBy({
                        left: -1215, 
                        behavior: "smooth",
                    });
                } else {
                    console.error(`Element with ref ${type}-container not found`);
                }
            }
        },
        computed: {
            allShowsInitial() {
                return {
                    'Film': this.store.initialData.movies,
                    'TvShows': this.store.initialData.tvShows
                };
            },
        },
        created() {
            console.log('Movies:', this.store.initialData.movies);
            console.log('TvShows:', this.store.initialData.tvShows);
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
div {
    position: relative;
    
    .mr-row {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        position: relative;
        h2 {
            position: absolute;
        }
    }
    .fa-chevron-right {
        font-size: 4rem;
        color: $text-gray;
        position: absolute;
        z-index: 500;
        top: 50%;
        right: 0;
        cursor: pointer;
        &:hover {
            color: $text-light;
        }
    }
    .fa-angle-left{
        font-size: 4rem;
        color: $text-gray;
        position: absolute;
        z-index: 500;
        top: 50%;
        left: 0;
        cursor: pointer;
        &:hover {
            color: $text-light;
        }
    }
}
</style>