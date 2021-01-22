import Vue from 'vue'
import App from './App.vue'

/* Plugin para rolagem com efeito */
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll, {
  duration: 900,    // tempo de duracao da animacao em ms
  offset: -70,        // pxs a cima ou abaixo do top do elemento
  updateHistory: false // Mostrar a hash no titulo
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
