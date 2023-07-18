<template>
  <div class="gameCard gameCard-border">
    <h1>juego: {{game.name}}</h1>
    <h2>rating: {{game.rating}}</h2>
    <h2>lanzado: {{game.released}}</h2>
    <h2>actualizacion: {{game.updated}}</h2>

    <img class="gameCard__img" 
        :src="game.background_image" alt="">
    
    <button>
        <router-link :to="{name:'opiniones',
            params:{gameroute,name:game.name}}">
            opinar
        </router-link>
    </button>
    
    <button>
        <router-link :to="{name:'administracion'}">
            corazon</router-link>
        </button>
  </div>
</template>

<script>
export default {
    props:[
        'nombreJuego',
        'game'
    ],
    computed:{
        gameroute(){
            return this.game.name.replace(/\s/g, "");
        }
    },
    // +++++ lifecycle hooks +++++
    created(){
    }
}
</script>

<style lang="scss">
.gameCard{
    box-sizing: border-box;
    display: inline-block;
    width: 32.8%;
    overflow: hidden;
    //background-color: rebeccapurple;
    vertical-align: top;
    text-align: center;
    margin-right: .5%;
    margin-bottom: 1rem;

    
    &__img{
        display: block;
        margin: 0 auto;
        width: 80%;
        height: 30%;
        overflow: hidden;
    }

    &-border{
        border: 1px solid black;
    }
 
}
</style>>
    