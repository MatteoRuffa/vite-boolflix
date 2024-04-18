<template>
    <div class="card-container" :ref="`${type}-container`">
        <div class="mr-card" :style="{ '--rotation': rotation }" @mouseover="hover = true" @mouseleave="hover = false">
            <div class="side front" v-if="!hover">
                <img :src="store.imageUrl + poster_path" :alt="title">
            </div>
            <div class="side back" v-else >
                <div>Titolo: {{ title || name }}</div>
                <div>Titolo Originale: {{ original_title || original_name}}</div>
                <div>Lingua: 
                    <img 
                        :src="`https://flagcdn.com/16x12/${original_language}.png`"
                        @error="useFallback"
                        width="16"
                        height="12"
                        :alt="`${original_language}`">
                </div>
                <div>Voto:
                    <div >
                        <i v-for="n in getStars()" :key="n" class="fa-regular fa-star"></i></div>
                    </div> 
                <div class="trama">Trama: {{ overview }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'original_title', 'original_language', 'vote_average', 'overview', 'poster_path', 'type'],
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
        },
        computed: {             //MI RESTITUISCE UNA STRINGA CHE RAPPRESENTA UN ANGOLO IN GRADI IN BASE ALLO STATO DI HOVER(SE HOVER: TRUE=> ROTATION SARA 180DEG, ALTRIMENTI ROTATION SARA 0DEG)
            rotation() {
                return this.hover ? '180deg' : '0';
            },
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.card-container {
    perspective: 1000px;
    .mr-card {
        position: relative;
        width: 300px;
        height: 450px;
        transition: transform 1s;
        transform-style: preserve-3d;
        transform: rotateY(calc(var(--rotation)));  //HO USATO CALC PER CALCOARE L'ANGOLO DI ROTAZIONE (0 O 180)
        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
        }
        .front {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .back {
            display: flex;
            flex-direction: column;
            align-items: center;
            
            background-color: $bg-black;
            padding: 18px;
            font-weight: 500;
            .trama {
                overflow: auto;
                height: 290px!important;
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
            position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                transform: rotateY(180deg);
        }
        
    }
}
</style>
