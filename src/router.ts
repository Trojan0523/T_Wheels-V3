import Doc from './views/Doc.vue';
import Home from './views/Home.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Markdown from "./components/Markdown.vue";
import intro from './markdown/intro.md';
import install from './markdown/install.md';
import getStarted from './markdown/get-started.md';

import {h} from 'vue';
import {createWebHashHistory, createRouter} from 'vue-router'
const history = createWebHashHistory();
const md = string => h(Markdown, {content: `../markdown/${string}.md`,key: string})

export  const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home, },
        {path: '/doc',component: Doc,
          children: [
            {path:"", redirect: '/doc/intro' },
            {path: "intro", component: md(intro)},
            {path: "install", component: md(install)},
            {path: "get-started", component: md( getStarted)},
            {path: "switch", component: SwitchDemo},
            {path: "button", component: ButtonDemo},
            {path: "dialog", component: DialogDemo},
            {path: "tabs", component: TabsDemo},
        ]},
    ]
})
router.afterEach(() => {
})
