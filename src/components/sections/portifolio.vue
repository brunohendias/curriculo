<template>
    <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
            <img class="masthead-avatar mb-5" :src="avatar" alt="Avatar" />
            <h1 class="masthead-heading text-uppercase mb-0">{{title}}</h1>
            <divider />
            <p class="masthead-subheading font-weight-light mb-0">{{subhead}}</p>
        </div>
    </header>
</template>

<script>
import divider from '../shared/divider.vue'

export default {
    name: 'portifolio',
    components: {
        divider
    },
    data() {
        return {
            avatar: require('@/assets/img/avatars/avatar.png'),
            title: 'Portfolio',
            subhead: 'Web Developer - Full Stack'
        }
    }
}
</script>