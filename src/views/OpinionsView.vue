<template>
  <div>
      <h1>opiniones</h1>
      <p>escribe tu opinion para el juego: {{gameName}}</p>
      <p>id del juego es: {{gameId}}</p>

      <form>
        
        <label for="autor">Nombre</label>
        <input v-model="autor" 
            type="text" placeholder="nombre">
        
        <label for="opinion">Opinion</label>
        <textarea
            v-model="opinion" 
            placeholder="Tu opinion debe ir aqui" 
            cols="30" rows="10"></textarea>
        
        <button @click="agregar">agregar</button>
      
      </form>

      <h1>A continuacion podras ver tu opinion</h1>
      
      <div v-if="gameOpinions.length">
          <div class="opiniones" v-for="op,index in gameOpinions"
                                     :key="`op${index}`">
              <p>opinion creada por: {{op.autor}}</p>
              <p>tu opinion: {{op.opinion}} </p>
              <button>eliminar</button>
              <button>editar</button>
          </div>
      </div>
      <div v-else>
        no hay opiniones
      </div>
  </div>
</template>

<script>
export default {
    props:['gameName','gameId','gameOpinions'],
    data(){
        return{
           autor:'',
           opinion:'',
           lista:'',
           
        }
    },
    methods:{
        agregar(e){
            e.preventDefault()
            this.$emit('getGame',this.gameData)   
        }
    },
    computed:{
        gameData(){
            return {
                    name:this.gameName,
                    autor:this.autor,
                    opinion:this.opinion}

        }
    }
  

}
</script>

<style>

</style>