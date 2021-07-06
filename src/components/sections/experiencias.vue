<template>
    <section class="page-section portfolio" id="experiencias">
        <div class="container text-center">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">{{title}}</h2>
            <divider />
            <div v-for="(row, i) in rows" :key="i">
                <h1 class="my-5">{{row.title}}</h1>
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4 mb-5" v-for="(card, j) in row.cards" :key="j">
                        <div class="portfolio-item mx-auto" data-toggle="modal" :data-target="'#cursosModal' + j">
                            <a :href="card.doc" target="_blank">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white">
                                        <i class="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img class="card-tela-section" :src="card.src" :alt="card.nome" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import divider from '../shared/divider.vue'

export default {
    name: 'experiencias',
    components: {
        divider
    },
    data() {
        return {
            window,
            title: 'Experiencias',
            rows: [{
                    title: 'Front - End',
                    cards: [
                        { nome: 'vuejs', src: require('@/assets/img/experiencias/frontend/vue.jpeg'), doc: 'https://br.vuejs.org/' },
                        { nome: 'bootstrap', src: require('@/assets/img/experiencias/frontend/bootstrap.jpeg'), doc: 'https://getbootstrap.com/' },
                        { nome: 'InertiaJS', src: require('@/assets/img/experiencias/frontend/inertiajs.png'), doc: 'https://inertiajs.com/' },
                        { nome: 'pacotefront', src: require('@/assets/img/experiencias/frontend/pacotefront.jpeg'), doc: 'https://www.w3schools.com/' }
                    ]
                },{
                    title: 'Back - End',
                    cards: [
                        { nome: 'php', src: require('@/assets/img/experiencias/backend/php.png'), doc: 'https://www.php.net/' },
                        { nome: 'python', src: require('@/assets/img/experiencias/backend/python.jpeg'), doc: 'https://www.python.org/' },
                        { nome: 'csharp', src: require('@/assets/img/experiencias/backend/csharp.jpeg'), doc: 'https://docs.microsoft.com/pt-br/dotnet/csharp/' },
                        { nome: 'laravel', src: require('@/assets/img/experiencias/backend/laravel.png'), doc: 'https://laravel.com/' },
                        { nome: '.Net Core', src: require('@/assets/img/experiencias/backend/aspnetcore.png'), doc: 'https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0' },
                    ]
                },{
                    title: 'Banco de dados',
                    cards: [
                        { nome: 'Firebase', src: require('@/assets/img/experiencias/bancodedados/firebase.png'), doc: 'https://firebase.google.com/' },
                        { nome: 'Oracle', src: require('@/assets/img/experiencias/bancodedados/plsql.png'), doc: 'https://www.oracle.com/br/index.html' },
                        { nome: 'Mysql', src: require('@/assets/img/experiencias/bancodedados/mysql.jpeg'), doc: 'https://www.mysql.com/' },
                        { nome: 'Postgree', src: require('@/assets/img/experiencias/bancodedados/postgreesql.png'), doc: 'https://www.postgresql.org/' }
                    ]
                },{
                    title: 'Sistema operacional',
                    cards: [
                        { nome: 'Linux/Windows', src: require('@/assets/img/experiencias/so/linuxwindows.webp'), doc: 'https://www.linux.org/' }
                    ]
            }]
        }
    }
}
</script>