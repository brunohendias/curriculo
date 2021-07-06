<template>
    <div>
        <templateM title="Gerence" :index="0">
            <p class="mb-5"></p>
            
            <img v-for="(img, i) in imgs.gerence" :key="i" 
                class="img-fluid my-4" :src="img" alt="gerence" />
            
            <visualizar :link="links.gerence"/>
        </templateM>
        <templateM title="Stock trader" :index="1">
            <p class="mb-5"></p>
            
            <img v-for="(img, i) in imgs.stocktrader" :key="i" 
                class="img-fluid my-4" :src="img" alt="stocktrader" />
            
            <visualizar :link="links.stocktrader"/>
        </templateM>
        <templateM title="Centro de vacinação" :index="2">
            <p class="mb-5"></p>
            
            <img v-for="(img, i) in imgs.vacinacao" :key="i" 
                class="img-fluid my-4" :src="img" alt="vacinacao" />
            
            <visualizar :link="links.vacinacao"/>
        </templateM>
        <templateM title="Sambox" :index="3">
            <p class="mb-5"></p>
            
            <img v-for="(img, i) in imgs.sambox" :key="i" 
                class="img-fluid my-4" :src="img" alt="sambox" />
            
            <visualizar :link="links.sambox"/>
        </templateM>
        <templateM title="Vingadores" :index="4">
            <p class="mb-5"></p>
            
            <img v-for="(img, i) in imgs.vingadores" :key="i" 
                class="img-fluid my-4" :src="img" alt="vingadores" />

            <visualizar :link="links.vingadores"/>
        </templateM>
        <templateM title="Tarefas" :index="5">
            <p class="mb-5"></p>
            
            <img v-for="(img, i) in imgs.tarefas" :key="i" 
                class="img-fluid my-4" :src="img" alt="tarefas" />

            <visualizar :link="links.tarefas"/>
        </templateM>
    </div>
</template>

<script>
import templateM from '../templates/modal.vue'
import visualizar from '../buttons/visualizar.vue'

export default {
    name: 'projetos',
    components: {
        templateM,
        visualizar
    },
    data() {
        return {
            links: {
                gerence: 'https://gerence.brunohendias.com.br',
                stocktrader: 'https://stocktrader.brunohendias.com.br',
                vacinacao: 'https://github.com/brunohendias/vacinacao',
                sambox: 'https://sambox.brunohendias.com.br',
                vingadores: 'https://brunohendias.github.io/Vingadores',
                tarefas: 'https://brunohendias.github.io/tarefastodo'
            },
            imgs: {
                gerence: [
                    require('@/assets/img/portfolio/gerence/login.jpeg'),
                    require('@/assets/img/portfolio/gerence/inscricao.jpeg'),
                    require('@/assets/img/portfolio/gerence/candidato.jpeg'),
                    require('@/assets/img/portfolio/gerence/geracandidato.jpeg'),
                    require('@/assets/img/portfolio/gerence/aluno.jpeg')
                ],
                stocktrader: [
                    require('@/assets/img/portfolio/stocktrader/stocktrader.jpeg'),
                    require('@/assets/img/portfolio/stocktrader/acoes.jpeg'),
                    require('@/assets/img/portfolio/stocktrader/portifolio.jpeg'),
                ],
                vacinacao: [
                    require('@/assets/img/portfolio/vacinacao/fabricante.jpeg'),
                    require('@/assets/img/portfolio/vacinacao/vacina.jpeg'),
                    require('@/assets/img/portfolio/vacinacao/paciente.jpeg'),
                    require('@/assets/img/portfolio/vacinacao/historico.jpeg'),
                ],
                sambox: [
                    require('@/assets/img/portfolio/sambox/fullpage.jpeg'),
                ],
                vingadores: [
                    require('@/assets/img/portfolio/vingadores/fullpage.jpeg'),
                ],
                tarefas: [
                    require('@/assets/img/portfolio/tarefas/fullpage.jpeg'),
                ]
            }
        }
    }
}
</script>