<template>
    <section class="page-section portfolio" id="portfolio">
        <div class="container">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">{{title}}</h2>
            <divider />
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4 mb-5" v-for="(card, i) in cards" :key="i">
                    <div class="portfolio-item mx-auto" data-toggle="modal" :data-target="card.target">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white">
                                <i class="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
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
                    nome: 'Sambox', 
                    src: require('@/assets/img/portfolio/sambox.png'), 
                    target: '#portfolioModal1' 
                },{
                    nome: 'Stock trader', 
                    src: require('@/assets/img/portfolio/stocktrader.png'), 
                    target: '#portfolioModal2' 
                },{
                    nome: 'Gerence', 
                    src: require('@/assets/img/portfolio/gerence.png'), 
                    target: '#portfolioModal3' 
                },{
                    nome: 'Tarefas', 
                    src: require('@/assets/img/portfolio/tarefas.png'), 
                    target: '#portfolioModal4' 
                },{
                    nome: 'Vingadores', 
                    src: require('@/assets/img/portfolio/centralcine.png'), 
                    target: '#portfolioModal5' 
                },{
                    nome: 'Mega sena', 
                    src: require('@/assets/img/portfolio/megasena.png'), 
                    target: '#portfolioModal6' 
            }]
        }
    }
}
</script>