<template>
    <div>
        <ul>
            <li>Titolo: {{ title }}</li>
            <li>Titolo Originale: {{ original_title }}</li>
            <li>Lingua: {{ original_language }}</li>
            <li>Voto: {{ vote_average }}</li>
        </ul>
    </div>
</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'original_title', 'original_language', 'vote_average'],
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>