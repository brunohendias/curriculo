<template>
    <section class="page-section portfolio" id="experiencias">
        <div class="container text-center">
            <!-- Portfolio Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">{{title}}</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Portfolio Grid Items-->
            <div v-for="(row, i) in rows" :key="i">
                <h1 class="my-5">{{row.title}}</h1>
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4 mb-5" v-for="(card, j) in row.cards" :key="j">
                        <div class="portfolio-item mx-auto" data-toggle="modal" :data-target="'#cursosModal' + j">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">
                                    <i class="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img class="card-tela-section" :src="card.src" :alt="card.nome" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'experiencias',
    data() {
        return {
            title: 'Experiencias',
            rows: [
                {
                    title: 'Front - End',
                    cards: [
                        { nome: 'vuejs', src: require('@/assets/img/experiencias/frontend/vue.jpeg') },
                        { nome: 'bootstrap', src: require('@/assets/img/experiencias/frontend/bootstrap.jpeg') },
                        { nome: 'pacotefront', src: require('@/assets/img/experiencias/frontend/pacotefront.jpeg') }
                    ]
                },{
                    title: 'Back - End',
                    cards: [
                        { nome: 'laravel', src: require('@/assets/img/experiencias/backend/laravel.png') },
                        { nome: 'php', src: require('@/assets/img/experiencias/backend/php.png') },
                        { nome: 'python', src: require('@/assets/img/experiencias/backend/python.jpeg') },
                        { nome: 'csharp', src: require('@/assets/img/experiencias/backend/csharp.jpeg') }
                    ]
                },{
                    title: 'Banco de dados',
                    cards: [
                        { nome: 'Firebase', src: require('@/assets/img/experiencias/bancodedados/firebase.png') },
                        { nome: 'Oracle', src: require('@/assets/img/experiencias/bancodedados/plsql.png') },
                        { nome: 'Mysql', src: require('@/assets/img/experiencias/bancodedados/mysql.jpeg') }
                    ]
                },{
                    title: 'Sistema operacional',
                    cards: [
                        { nome: 'Linux/Windows', src: require('@/assets/img/experiencias/so/linuxwindows.webp') }
                    ]
                }
            ]
        }
    }
}
</script>