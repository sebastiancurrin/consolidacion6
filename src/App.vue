<template>
  <div id="app">
    <nav class="nav"> 
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <div class="main">
      
    <router-view @getGame="saveGame"/>
    
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      games:{}, // objeto de objetos id:{nombre: , opiniones:{autor: ,opinion}} 
      gamesData:[]
    }
  },
  methods:{
    saveGame(ob){
      this.gamesData.push(ob)
    }
  }
}
</script>

<style lang="scss">
body, ul, ol{
  margin: 0;
  padding: 0;
}

#app{
  width: 95%;
  margin: 0 auto;
}
.nav{
  display: block;
  height: 10vh;
  background-color: aquamarine;
  margin-bottom: 1rem;
}
.main{
  margin: 0 auto;
  //background-color: red;
}
</style>
