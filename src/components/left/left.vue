<template>
	<div>
		<Sobremim />
		<Contato />
	</div>
</template>

<script>
import Sobremim from './sobreMim'
import Contato from './contato'

export default {
  name: 'left',
  components: {
  	Sobremim,
  	Contato
  }
}
</script>