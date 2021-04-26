import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'; 
import newExercice from './views/newExercice.vue'
import updateExercice from './views/updateExercice.vue'
import deleteexercice from './views/deleteexercice.vue'
import entrainements from './views/entrainements.vue';
import entrainement from './views/entrainement.vue';
Vue.use(Router);



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ 
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/entrainements',
      name: 'entrainements',
      component: entrainements,
    },
    {
      path: '/newExercice',
      name: 'newExercice',
      component: newExercice,
    },
    {
      path: '/updateExercice/:idexercice',
      name: 'updateExercice',
      component: updateExercice,
    },
    {
      path: '/deleteexercice/:idexercice',
      name: 'deleteexercice',
      component: deleteexercice,
    },
  
  {
    path: '/entrainement',
    name: 'entrainement',
    component: entrainement,
  },
  ],
});