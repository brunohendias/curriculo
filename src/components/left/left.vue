<template>
	<div>
		<Sobremim />
        <Experiencias />
	</div>
</template>

<script>
import Sobremim from './sobreMim'
import Experiencias from './experiencias'

export default {
	name: 'left',
	components: {
		Sobremim,
    	Experiencias
	}
}
</script>