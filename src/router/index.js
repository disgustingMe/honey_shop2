import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Promotions from '../views/Promotions.vue'
import Information from '../views/Information.vue'
import Contacts from '../views/Contacts.vue'
import PersonalAccount from '../views/PersonalAccount.vue'
import ConfPolitics from '../views/ConfPolitics.vue'
import SiteDevelopment from '../views/SiteDevelopment.vue'
import SiteMap from '../views/SiteMap.vue'



Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/aboutUs',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/promotions',
        name: 'Promotions',
        component: Promotions
    },
    {
        path: '/information',
        name: 'Information',
        component: Information
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/peronalAccount',
        name: 'PersonalAccount',
        component: PersonalAccount
    },
    {
        path: '/confPolitics',
        name: 'ConfPolitics',
        component: ConfPolitics
    },
    {
        path: '/siteDevelopment',
        name: 'SiteDevelopment',
        component: SiteDevelopment
    },
    {
        path: '/siteMap',
        name: 'SiteMap',
        component: SiteMap
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
