import Vue from 'vue'
import App from './App.vue'
import '@supermap/vue-iclient3d-webgl/dist/styles/vue-iclient3d-webgl.min.css'
import VueiClientWebgl from '@supermap/vue-iclient3d-webgl'

Vue.use(VueiClientWebgl)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
