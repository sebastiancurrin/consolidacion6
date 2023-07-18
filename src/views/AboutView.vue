<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="gamesApi">api</button>
  </div>
</template>

<script>
export default {
  // +++++ data +++++
  data(){
    return{

    }
  },
  // +++++ methods +++++
  methods:{
    async gamesApi(e){
      e.preventDefault()
      const key = 'c7fe2226a7464b85999ddda59f6ff163'
      const url = `https://api.rawg.io/api/games?key=${key}`
      const response = await fetch(url);
      const games = await response.json();
      console.log(games);
    
    }
  }
}
</script>