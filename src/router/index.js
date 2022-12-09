import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/authors',
    name: 'Authors',
    component: () => import('../views/AllAuthors.vue'),
    },
    {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../views/post/_id.vue'),
    },
    {
    path: '/author/:id',
    name: 'Author',
    component: () => import('../views/author/_id.vue'),
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.afterEach((to, from) => {
	// Only run if you are coming from a route
	if (from.name) { 
		document.documentElement.scrollTop = 0
		
		// Close menu after navigation
		store.dispatch('CloseMenu')
	}
})

export default router
