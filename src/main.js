import Vue from 'vue'
import App from './App'
import router from './router'
import TreeView from 'vue-json-tree-view'
import VueDragTree from 'vue-drag-tree'

Vue.component('vue-drag-tree', VueDragTree)
Vue.config.productionTip = false
Vue.use(TreeView)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})