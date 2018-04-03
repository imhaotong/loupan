import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Loushi from './views/Loushi.vue'
import Our from './views/Our.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {               
      path: '/about/:fenlei',
      name: 'about',
      component: About
    },
     {
      path: '/loushi',
      name: 'loushi',
      component: Loushi
    },
    {
    	path:'/our',
    	name:'our',
    	component:Our
    }

  ]
})
