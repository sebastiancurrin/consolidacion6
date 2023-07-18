<template>
  <div>
      <h1>opiniones</h1>
      <p>escribe tu opinion para el juego: {{name}}</p>

      <form>
        <label for="nombre">Nombre</label>
        <input type="text" placeholder="nombre">
        <label for="opinion">Opinion</label>
        <textarea placeholder="Tu opinion debe ir aqui" 
            cols="30" rows="10"></textarea>
        <button>agregar</button>
      </form>

      <h1>A continuacion podras ver tu opinion</h1>
      <p>opinion creada por juanito</p>
      <p>tu opinion</p>
      <button>eliminar</button>
      <button>editar</button>
  </div>
</template>

<script>
export default {
    props:['name']
}
</script>

<style>

</style>