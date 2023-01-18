import EnterScreen from '@/components/EnterScreen.vue';
import MainComponent from '@/components/MainComponent.vue';
import SignIn from '@/components/SignIn.vue';
import SignUp from '@/components/SignUp.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: EnterScreen
    },
    {
        path: '/main',
        component: MainComponent
    },
    {
        path: '/sign-in',
        component: SignIn
    },
    {
        path: '/sign-up',
        component: SignUp
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;