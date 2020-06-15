<template>
	<b-card class="mb-2 boxInfo">
		<b-row>
		    <b-col md="4">
		    	<b-card-img :src="link_image" :alt="label"></b-card-img>
		    </b-col>
		    <b-col md="8">
		    	<b-card-body :title="label">
		    		<b-card-text> {{texto}} </b-card-text>
		    	</b-card-body>
		  	</b-col>
		</b-row>
	</b-card>
</template>

<script>
export default {
	name: 'cardsexperiencia',
	props: {
		link_image: {
			type: String,
			required: true
		},
		link_doc: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		},
		texto: {
			type: String
		}
	}
}
</script>