<template>
    <div id="app">
        <navbar/>
        <portifolio />
        <projetos />
        <sobre />
        <experiencias />
        <modal />
    </div>
</template>

<script>
import navbar from './components/shared/navbar.vue'
import portifolio from './components/sections/portifolio.vue'
import projetos from './components/sections/projetos.vue'
import sobre from './components/sections/sobre.vue'
import experiencias from './components/sections/experiencias.vue'
import modal from './components/shared/modals/projetos.vue'

export default {
  name: 'App',
  components: {
    navbar,
    portifolio,
    projetos,
    sobre,
    experiencias,
    modal
  }
}
</script>