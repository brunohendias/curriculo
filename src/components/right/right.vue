<template>
	<div>
		<Experiencias />
		<Cursos />
		<Projetos />
	</div>
</template>

<script>
import Projetos from './projetos'
import Experiencias from './experiencias'
import Cursos from './cursos'

export default {
  name: 'right',
  components:{
  	Projetos,
  	Experiencias,
  	Cursos
  }
}
</script>