<template>
    <div v-for="(shows, type) in allShows" :key="type">
        <h2 >{{ type }} </h2>
        <div class="mr-row"  :ref="`${type}-container`">
            <div class="card-container"  v-for="card in shows" :key="card.id">
                <CardCarousel :id="card.id" :title="card.title || card.name" :original_title="card.original_title" :original_language="card.original_language" 
                :vote_average="card.vote_average" :overview="card.overview"  :backdrop_path="card.backdrop_path"/>
            </div>
        </div>
        <i class="fa-solid fa-angle-left" @click="scrollContentbehind(type)"></i>
        <i class="fa-solid fa-chevron-right" @click="scrollContentForward(type)"></i>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardCarousel from './CardCarousel.vue';
    export default {
        name: 'CardList',
        props: ['movies', 'tvShows'],
        components: {
            CardCarousel
        },
        data() {
            return {
                store,
                moviesLeft: '', 
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
            allShows() {
                return {
                    'Film': this.store.data.movies,
                    'TvShows': this.store.data.tvShows
                };
            },
        },
        created() {
            //console.log('Movies:', this.movies);
            //console.log('TV Shows:', this.tvShows);
        },
        
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
div {
    position: relative;
    // max-height: 300px;
    h2 {
        padding: 20px;
    }
    
    .mr-row {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        position: relative;
       
        .card-container {
            transition: transform 0.3s;
            position: relative;
            .CardCarousel{
                overflow: visible;
                position: absolute;
            }
            &:hover {
            transform: scale(1.1);
            z-index: 10000;
            }
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