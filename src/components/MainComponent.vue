<template>
    <main>
        <div class="wrapper" v-if="!this.store.dataLoaded">
            <video id="dune-trailer" class="fullscreen-video" autoplay muted>
                <source src="/public/videos/y2meta.net_dune-official-main-trailer.mp4" type="video/mp4">
            </video>
            <div class="background-fade"></div>
            <div class="info-video">
                <div class="B-logo"><img src="/images/B-logo-boolflix.png" alt=""><span>film</span></div>
                <h2>Dune</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores hic, asperiores ullam explicabo quo possimus nam aspernatur repellat ipsam. Aspernatur?</p>
                <div class="buttons">
                    <button type="button" class="btn btn-light left"><i class="fa-solid fa-play"></i> <span>Riproduci</span></button>
                    <button type="button" class="btn btn-secondary right"><i class="fa-solid fa-circle-info"></i><span>Altre info</span></button>
                </div>
            </div>
        </div>
        <div class="container">
            <CardsInitialList  class="cards-initial-list" :movies="store.data.movies" :tvShows="store.data.tvShows" v-if="!this.store.dataLoaded" />
            <CardList  :movies="store.data.movies" :tvShows="store.data.tvShows" v-else/>
        </div>
    </main>
</template>

<script>
import { store } from '../store.js';
// import CardListMovies from './CardListMovies.vue';
// import CardListTvShows from './CardLIstTvShows.vue';
import CardsInitialList from './CardsInitialList.vue';
import CardList from './CardList.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardList,
            CardsInitialList,
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
main {
    color: $text-light;
    .wrapper{
        position: relative;
        .fullscreen-video {
            width: 100%;  
            height: 85vh; 
            object-fit: cover; 
            position: relative;
        }
        .background-fade {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60vh;  
            background: linear-gradient(to top, $bg-dark 0%, rgba(0, 0, 0, 0) 100%);
        }
        .cards-initial-list {
            position: absolute;
            bottom: -100px!important;  
            width: 100%;  
        }
        .info-video{
            position: absolute;
            top: 300px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            .B-logo {
                display: flex;
                span {
                    text-transform: uppercase;
                    color: $text-gray;
                    padding: 20px;
                    font-size: 2.5rem;
                    letter-spacing: 10px;
                }   
            }
            p {
                width: 400px;
            }
            .buttons{
                display: flex;
                .left {
                width: 230px!important;
                font-size: 1.4rem;
                padding: 6px 12px;
                background-color: $button-light;
                border-radius: 4px;
                margin: 10px;
                display: flex;
                justify-content: center;
                border-color:  rgba(255, 255, 255, 0.5);
                &:hover {
                    backdrop-filter: blur(5px);
                    background-color: rgba(255, 255, 255, 0.5);
                }
                .fa-solid {
                    font-size: 2.2rem!important;
                }
                span {
                    padding-left: 10px;
                }
            }
            .right {
                width: 230px!important;
                font-size: 1.4rem;
                padding:  6px 12px;
                background-color: $button-dark;
                border-radius: 4px;
                margin: 10px;
                display: flex;
                justify-content: center;
                border-color:  rgba(91, 87, 86, 0.5);
                &:hover {
                    backdrop-filter: blur(5px);
                    background-color: rgba(91, 87, 86, 0.5);
                }
                .fa-solid {
                    font-size: 2.4rem!important;
                    color: $text-gray;
                }
                span {
                    padding-left: 10px;
                }
            }
            }
            
        }
    }
    .container {
        padding: 70px;
        max-width: 1700px!important;
        
    }
}

</style>