<template>
    <nav id="mainNav" class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">{{title}}</a>
            <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" 
                type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" 
                aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-lg-2" v-for="(menu, i) in menus" :key="i">
                        <a class="nav-link py-2 px-0 px-lg-2 rounded js-scroll-trigger" 
                            :href="menu.href" v-smooth-scroll>
                            {{ menu.nome }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            title: 'Bem vindo!',
            menus: [
                {nome: 'Projetos', href: '#portfolio'},
                {nome: 'Sobre', href: '#about'},
                {nome: 'Experiencias', href: '#experiencias'},
                {nome: 'Contato', href: '#contact'}
            ]
        }
    }
}
</script>