import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game/Game'
import About from '@/components/About/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/game'
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
