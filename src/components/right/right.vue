<template>
	<div>
		<Projetos />
		<Cursos />
		<Contato />
	</div>
</template>

<script>
import Projetos from './projetos'
import Cursos from './cursos'
import Contato from './contato'

export default {
    name: 'right',
    components: {
    	Projetos,
    	Cursos,
        Contato
    }
}
</script>