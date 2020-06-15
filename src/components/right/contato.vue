<template>
	<div id="contato" class="mb-5">
		<h1>Contato</h1>
		<div class="col-sm-10 m-auto rounded boxInfo">
			<div :class="linhaContato">
				<div class="w-100">
					<font color="#000" :size="sizeIcon">
						<i class="fab fa-github-square" alt="Github"></i>
					</font>
					<a href="https://github.com/brunohendias?tab=repositories">
						<span class="texto">Github</span>
					</a>
					<div class="float-right">
						<a href="https://www.facebook.com/profile.php?id=100013873149290">
							<span class="texto">Facebook</span>
						</a>
						<font color="#2a6eff" :size="sizeIcon">
							<i class="fab fa-facebook-square" alt="Facebook"></i>
						</font>
					</div>
				</div>
			</div>
			<div :class="linhaContato">
				<div class="w-100">
					<font color="#00639e" :size="sizeIcon">
						<i class="fab fa-linkedin" alt="Linkedin"></i>
					</font>
					<a href="https://www.linkedin.com/in/bruno-dias-a5a60917a">
						<span class="texto">Linkedin</span>
					</a>
					<div class="float-right">
						<a href="https://bit.ly/32z5E1J">
							<span class="texto">Whatssap</span>
							<font color="#0f0" :size="sizeIcon">
								<i class="fab fa-whatsapp-square" alt="Whatssap"></i>
							</font>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sizeIcon: 45,
			linhaContato: 'row col-sm-10 m-auto'
		}
	}
}
</script>

<style lang="css" scoped>
	.texto {
		padding: 10px;
	}
	a {
		color: white;
	}
</style>