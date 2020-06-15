<template>
	<b-list-group>
		<b-list-group-item v-for="item, i in lista" :key="i" :href="item.link" class="boxInfo">
			<span>{{item.titulo}}</span>
		</b-list-group-item>
	</b-list-group>
</template>

<script>
export default {
  	name: 'listCurso',
  	props: {
  		lista: {
  			type: Array,
  			required: true
  		}
  	}
}
</script>