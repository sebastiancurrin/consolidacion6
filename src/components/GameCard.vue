<template>
  <div class="card p-4 column is-one-quarter">
    <h1>juego: {{game.name}}</h1>
    <h2>rating: {{game.rating}}</h2>
    <h2>lanzado: {{game.released}}</h2>
    <h2>actualizacion: {{game.updated}}</h2>

    <img class="gameCard__img" 
        :src="game.background_image" alt="">
    <footer class="card-footer">
    <button class="card-footer-item button">
        <router-link :to="{name:'opiniones',
            params:{gameroute,
                    gameName:game.name,
                    gameId:game.id,
                    gameOpinions:opiniones
                    }
                    }">
            opinar
        </router-link>
    </button>
    
    <button class="card-footer-item button">
        <router-link :to="{name:'administracion'}">
            corazon</router-link>
        </button>
  
  </footer>
  </div>
</template>

<script>
export default {
    props:[
        'nombreJuego',
        'game'
    ],
    data(){
        return{
            opiniones:[
                {   
                    autor:'jack',
                    opinion:'juego malo'},
                {
                    autor:'bob',
                    opinion:'juego bueno'
                },
                
                ]
        }
    },
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
    