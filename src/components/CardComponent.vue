<template>
    <div class="card-container">
        <div class="mr-card" :style="{ '--rotation': rotation }" @mouseover="hover = true" @mouseleave="hover = false">
            <div class="side front"  v-if="!hover">
                <span>Titolo: {{ title }}</span><br>
                <span>Titolo Originale: {{ original_title }}</span><br>
                <span>Lingua: {{ original_language }}</span><br>
                <span>Voto: {{ vote_average }}</span><br>
                <span class="trama">Trama: {{ overview }}</span>
            </div>
            <div class="side back" v-else>
                <img :src="store.imageUrl + poster_path" :alt="title">
            </div>
        </div>
            
       
    </div>
    
</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'original_title', 'original_language', 'vote_average', 'overview', 'poster_path'],
        data() {
            return {
                store,
                hover: false,
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
            
            // display: flex;
            // flex-direction: column;
            // align-items: center;
            background-color: $bg-black;
            padding: 10px;
            font-weight: 500;
            .trama {
                overflow: hidden;
                max-height: 270px;
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
        .back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            
            transform: rotateY(180deg);
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}


</style>
