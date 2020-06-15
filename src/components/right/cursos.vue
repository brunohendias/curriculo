<template>
	<div id="cursos">
		<h1>Cursos</h1>
		<h2>Front-end</h2>
		<listGroup :lista="cursosFrontEnd"></listGroup>
		<h2>Back-end</h2>
		<listGroup :lista="cursosBackEnd"></listGroup>
	</div>
</template>

<script>
import listGroup from '@/shared/listGroup/listGroup'

export default {
	components: {
		listGroup
	},
	data() {
		return {
			cursosFrontEnd: [
				{'titulo': 'Curso Vue JS 2 - O Guia Completo (incl. Vue Router & Vuex)', 'link': 'https://www.udemy.com/vue-js-completo/'},
				{'titulo': 'Curso completo de Desenvolvimento Web - Crie 6 projetos', 'link': 'https://www.udemy.com/curso-completo-do-desenvolvedor-web/'},
				{'titulo': 'Curso Desenvolvedor Web Completo 2018 + 10 de projetos', 'link': 'https://www.udemy.com/curso-desenvolvedor-web-completo/'}
			],
			cursosBackEnd: [
				{'titulo': 'Curso Completo do Desenvolvedor NodeJS e MongoDB', 'link': 'https://www.udemy.com/curso-completo-do-desenvolvedor-nodejs/'}
			]
		}
	}
}
</script>