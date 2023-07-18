<template>
  <div class="home">
    <div>
      <GameCard
          v-for="game,index in games" :key="index"
          :img_src="imagen"
          :game="game"
      />
    </div>
    <button @click="cargarMas">
      cargar 20+</button>
  </div>
</template>

<script>
// @ is an alias to /src
import GameCard from '@/components/GameCard.vue'

export default {
  name: 'HomeView',
  components: {
    GameCard,
  },
  // +++++ data +++++
  data(){
    return{
      imagen:'',
      games:[],
      nextList:'',
      
    }
  },
  // +++++ methods +++++
  methods:{
    async cargarMas(e){
      e.preventDefault()
      const response = await fetch(this.nextList);
      const gamesInfo = await response.json();
      this.nextList = gamesInfo.next
      this.games.push(...gamesInfo.results)
   }

  },
  // +++++ computed +++++
  computed:{

  },
  // +++++ lifecycle hooks +++++
  async beforeCreate(){
    const key = 'c7fe2226a7464b85999ddda59f6ff163'
    const url = "https://api.rawg.io/api/games"
    const fullUrl = `${url}?key=${key}`
    const response = await fetch(fullUrl);
    const gamesInfo = await response.json();
    this.games.push(...gamesInfo.results)
    this.nextList = gamesInfo.next
    console.log(this.games)
    console.log(gamesInfo)


  },
}
</script>

<style lang="scss">
  .home{
    display: block;
    width: 90%;
    margin: 0 auto;
    background-color: blue;
  }
</style>