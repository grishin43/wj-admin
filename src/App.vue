<template>
    <div id="app">
        <Header  :sidebar_active="sidebar_active" @changevalue="sidebar_active = $event"></Header>
        <transition name="fade">
            <Sidebar v-if="sidebar_active"></Sidebar>
        </transition>
        <div class="wja-content"></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import Header from './components/header/index.vue'
    import Sidebar from './components/sidebar/index.vue'

    Vue.use(BootstrapVue);

    export default {
        name: 'app',
        components: {
            Header,
            Sidebar
        },
        data() {
            return {
                Header,
                sidebar_active: false
            }
        }
    }
</script>