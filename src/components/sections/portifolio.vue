<template>
    <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
            <!-- Masthead Avatar Image-->
            <img class="masthead-avatar mb-5" :src="avatar" alt="Avatar" />
            <!-- Masthead Heading-->
            <h1 class="masthead-heading text-uppercase mb-0">{{title}}</h1>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Masthead Subheading-->
            <p class="masthead-subheading font-weight-light mb-0">{{subhead}}</p>
        </div>
    </header>
</template>

<script>
export default {
    name: 'portifolio',
    data() {
        return {
            avatar: require('@/assets/img/avatars/avatarredondonavbar.png'),
            title: 'Portfolio',
            subhead: 'Web Developer - Full Stack'
        }
    }
}
</script>

<style>

</style>