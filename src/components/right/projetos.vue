<template>
	<div id="projetos">
		<h1>Projetos</h1>
		<listGroup :lista="projetos"></listGroup>
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
			projetos: [
				{'titulo': 'Sambox - Site para empresa Sam Box, feito com: Vue, Bootstrap-vue, jquery usando pluguin(jquery-easing)', 'link': 'https://brunohendias.github.io/Sambox/'},
				{'titulo': 'Trader - Compra e venda de ações feito com: Vue, Vuetify, axios', 'link': 'https://brunohendias.github.io/stocktrader/'},
				{'titulo': 'Formulario de cadastro feito com: Vue, axios e bootstrap 4', 'link': 'https://brunohendias.github.io/formulario/'},
				{'titulo': 'Tarefas TODO, organizar o dia mais facil guardando as tarefas, feito com: Vue e bootstrap 4', 'link': 'https://brunohendias.github.io/tarefastodo/'},
				{'titulo': 'Vingadores - Land Page do filme Vingadores, feito com: Bootstrap-4 e Jquery usando pluguin(jquery-easing)', 'link': 'https://brunohendias.github.io/Vingadores/'},
				{'titulo': 'Mega sena - Pequeno projeto sobre o evento Mega-sena feito com: JavaScript puro e bootstrap 4', 'link': 'https://brunohendias.github.io/Megasena/'},
				{'titulo': 'Cadastro Aluno - formulario para cadastro de aluno e notas feito com: Vue, Bootstrap 4', 'link': 'https://brunohendias.github.io/cadastroAluno/'},
				{'titulo': 'Python - Exercicios e mini jogos para praticar', 'link': 'https://github.com/brunohendias/Python/'},
				{'titulo': 'Laravel - Vue.js + Laravel, feito com: Laravel 6, Vue 2, Bootstrap 4', 'link': 'https://github.com/brunohendias/laravelVue/'}
			]
		}
	}
}
</script>