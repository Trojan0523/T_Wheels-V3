import { createApp } from 'vue'
import App from './App.vue'
import Doc from './components/Doc.vue';
import Home from './components/Home.vue';
import './index.scss';
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory();

const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/xxx',
            component: Doc,
        },
    ]
});

const app =  createApp(App)
app.mount('#app')
app.use(router)
