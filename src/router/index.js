import Vue from 'vue';
import Router from 'vue-router';
import Heros from '@/views/heros/Heros.vue';
import HerosAdd from '@/views/heros/HerosAdd.vue';
import HerosEdit from '@/views/heros/HerosEdit.vue';
import HerosWeapon from '@/views/weapon/HerosWeapon.vue';
import HerosSkill from '@/views/skill/HerosSkill.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      redirect: {'name': 'Heros'}
    },
    {
      name: 'Heros',
      path: '/heros',
      component: Heros
    },
    {
      name: 'HerosAdd',
      path: '/heros/Add',
      component: HerosAdd
    },
    {
      name: 'HerosEdit',
      path: '/heros/Edit/:id',
      component: HerosEdit
    },
    {
      name: 'HerosWeapon',
      path: '/weapon',
      component: HerosWeapon
    },
    {
      name: 'HerosSkill',
      path: '/skill',
      component: HerosSkill
    }
  ]
});
