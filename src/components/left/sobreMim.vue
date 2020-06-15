<template>
	<div id="sobreMim" class="boxInfo">
		<div class="row rounded">
			<div class="col-md-4">
				<img class="h-100 w-100 rounded" src="@/img/perfil.jpg" alt="foto de perfil">
			</div>
			<div class="col-md-8">
				<ol>
					<template v-for="info in infos">
						<li class="mt-3">{{info.texto}}</li>
					</template>
				</ol>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			infos: [
				{'texto': 'Desenvolvedor Web Full Stack.'},
				{'texto': 'Sempre a procura de novas tecnologias em diversas areas.'},
				{'texto': 'Buscando conhecimento em palestras, networking, rede socias...'},
				{'texto': 'Começei a estudar tecnologia aos 17 anos em 2017.'},
				{'texto': 'Ensino medio completo cursando Ciencias da computação.'}
			]
		}
	}
}
</script>

<style lang="css">
	li {
		list-style-type: circle;
	}
</style>