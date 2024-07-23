<template>
    <div class="card-container">
        <div class="mr-card" @mouseover="hover = true" @mouseleave="hover = false">
            <div class="side front" v-show="!hover">
                <div class="logo" v-if="backdrop_path">
                    <img src="/images/B-logo-boolflix.png" alt="">
                </div>
                <img :src="store.imageUrl + poster_path" :alt="title">
            </div>
            <div class="side back" v-show="hover">
                <div class="movie-details">
                    <div>Titolo: {{ title || name }}</div>
                    <div>Titolo Originale: {{ original_title || original_name }}</div>
                    <div>Lingua:
                        <img 
                            :src="`https://flagcdn.com/16x12/${original_language}.png`"
                            @error="useFallback"
                            width="16"
                            height="12"
                            :alt="`${original_language}`">
                    </div>
                    <div>Voto:
                        <div>
                            <i v-for="n in getStars()" :key="n" class="fa-regular fa-star"></i>
                        </div>
                    </div>
                    <div class="trama">Trama: {{ overview }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'CardComponent',
    props: ['id', 'title', 'name', 'original_title', 'original_name', 'original_language', 'vote_average', 'overview', 'poster_path', 'type'],
    data() {
        return {
            store,
            hover: false,
        }
    },
    methods: {
        useFallback(event) {
            event.target.onerror = null;
            event.target.outerHTML = this.original_language; 
        },
        getStars() {
            return Math.ceil(this.vote_average / 2);
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.card-container {
    perspective: 1000px;
    display: inline-block;
    margin: 10px;

    .mr-card {
        position: relative;
        width: 450px; // Larghezza maggiore
        height: 300px; // Altezza minore
        transition: transform 0.3s ease;
        transform-style: preserve-3d;
        cursor: pointer;

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
        }

        .front {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .back {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: $bg-black;
            color: #fff;
            padding: 10px;
            box-sizing: border-box;
            transform: rotateY(180deg);

            .movie-details {
                text-align: center;
            }

            .trama {
                overflow: auto;
                max-height: 150px;
                margin-top: 10px;
                &::-webkit-scrollbar-thumb {
                    border-radius: 8px;
                    background-color: #363636;
                }
                &::-webkit-scrollbar-track {
                    border-radius: 8px;
                    background-color: #e7e7e7;
                    border: 1px solid #cacaca;
                    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
                }
                &::-webkit-scrollbar {                 
                    width: 12px;
                }
            }
        }
    }

    .mr-card:hover {
        transform: scale(1.1);
    }
}
</style>
