<template>
    <div>
        <span>Titolo: {{ title }}</span><br>
        <span>Titolo Originale: {{ original_title }}</span><br>
        <span>Lingua: {{ original_language }}</span><br>
        <span>Voto: {{ vote_average }}</span><br>
        <span class="trama">Trama: {{ overview }}</span>
        
    </div>
</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'original_title', 'original_language', 'vote_average', 'overview'],
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
div{
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $bg-black;
    padding: 10px;
    font-weight: 500;
    .trama {
        overflow: auto;
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

</style>
<!-- <ul>
    <li>Titolo: {{ title }}</li>
    <li>Titolo Originale: {{ original_title }}</li>
    <li>Lingua: {{ original_language }}</li>
    <li>Voto: {{ vote_average }}</li>
</ul> -->