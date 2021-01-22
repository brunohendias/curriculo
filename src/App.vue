<template>
  <div id="app">
    <navbar/>
    <portifolio />
    <projetos />
    <sobre />
    <experiencias />
    <contato />
    <modal />
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import portifolio from './components/sections/portifolio.vue'
import projetos from './components/sections/projetos.vue'
import sobre from './components/sections/sobre.vue'
import experiencias from './components/sections/experiencias.vue'
import contato from './components/sections/contato.vue'
import modal from './components/shared/modals/modalExperiencias'

export default {
  name: 'App',
  components: {
    navbar,
    portifolio,
    projetos,
    sobre,
    experiencias,
    contato,
    modal
  }
}
</script>