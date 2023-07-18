<template>
  <div>
    para ver informacion ingresa tus datos
    <button @click="accesoValido">ingresar datos</button>
    <Resumen v-if="entrar" />
  </div>
</template>

<script>
import Resumen from "@/components/Resumen.vue"

export default {
    components:{
        Resumen,
    },
    // +++++ data +++++
    data(){
        return{
            entrar:false,
        }
    },
    // +++++ methods +++++
    methods:{
        accesoValido(){
            this.entrar=true;
        }
    }
}
</script>

<style>

</style>