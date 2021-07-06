<template>
    <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">
            <h2 class="page-section-heading text-center text-uppercase text-white">
                {{title}}
            </h2>
            <divider />
            <div class="row">
                <div class="col-sm-5" :class="texto.divClass" v-for="(texto, i) in textos" :key="i">
                    <p class="lead" v-html="texto.texto"></p>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-sm-6 text-center">
                    <h4 class="text-uppercase">Redes Sociais</h4>
                    <a class="btn btn-outline-light btn-social mx-1" 
                        v-for="(rede, i) in redesSociais" :key="i" :href="rede.href">
                        <i :class="rede.icon"></i>
                    </a>
                </div>
                <div class="col-sm-6 text-center">
                    <h4 class="text-uppercase">Gmail</h4>
                    <h6>
                        brunodiashen@gmail.com
                    </h6>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import divider from '../shared/divider.vue'

export default {
    name: 'sobre',
    components: {
        divider
    },
    data() {
        return {
            title: 'Sobre',
            textos: [
                {divClass: 'ml-auto', texto: 'Olá! Meu nome é Bruno Dias, moro em Belo Horizonte - MG. <br> Estou cursando Ciências da computação no Centro Universitário de Belo Horizonte (UniBH). <br> Comecei a estudar tecnologia no ano de 2016. <br> Atualmente trabalho no cargo de desenvolvedor Full Stack'},
                {divClass: 'mr-auto', texto: 'Interessei-me por esta área pelo fato de gostar de diversificar meus conhecimentos e também por me permitir uma extensa lista de novas possibilidade, entre elas: <br> - Desenvolvimento de sites para colocar ideias em prática. <br> - Ferramentas para facilitar o nosso dia a dia e até mesmo, jogos para entretenimento e aprender mais ainda a respeito das tecnologias utilizadas.'}
            ],
            redesSociais: [
                {nome: 'Github', icon: 'fab fa-fw fa-github', href: 'https://github.com/brunohendias'},
                {nome: 'Linkedin', icon: 'fab fa-fw fa-linkedin-in', href: 'https://linkedin.com/in/brunohda5'},
                {nome: 'Whatsapp', icon: 'fab fa-fw fa-whatsapp', href: 'https://api.whatsapp.com/send?phone=5531997753105&text=Ola!%20Tudo%20bem?%20Estou%20analisando%20seu%20curriculo!'}
            ]
        }
    }
}
</script>