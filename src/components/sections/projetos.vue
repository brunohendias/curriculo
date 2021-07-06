<template>
    <section class="page-section portfolio" id="portfolio">
        <div class="container">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">{{title}}</h2>
            <divider />
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4 mb-5" v-for="(card, i) in cards" :key="i">
                    <div class="portfolio-item mx-auto" data-toggle="modal" :data-target="'#portfolioModal'+i">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white">
                                <i class="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <h5>
                            {{ card.nome }}
                        </h5>
                        <img class="img-fluid" :src="card.src" :alt="card.nome" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import divider from '../shared/divider.vue'

export default {
    name: 'projetos',
    components: {
        divider
    },
    data() {
        return {
            title: 'Projetos',
            cards: [{
                    nome: 'Gerence', 
                    src: require('@/assets/img/portfolio/gerence/login.jpeg')
                },{
                    nome: 'Stock trader', 
                    src: require('@/assets/img/portfolio/stocktrader/stocktrader.jpeg')
                },{
                    nome: 'Centro de vacinação', 
                    src: require('@/assets/img/portfolio/vacinacao/vacina.jpeg')
                },{
                    nome: 'Sambox', 
                    src: require('@/assets/img/portfolio/sambox/sambox.png')
                },{
                    nome: 'Vingadores', 
                    src: require('@/assets/img/portfolio/vingadores/vingadores.png')
                },{
                    nome: 'Tarefas', 
                    src: require('@/assets/img/portfolio/tarefas/tarefas.png')
                }
            ]
        }
    }
}
</script>