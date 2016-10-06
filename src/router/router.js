import Vue from 'vue';
import VueRouter from 'vue-router';
import Posts from '../components/Posts'
import Comments from '../components/Comments'


const routes = [
  {path: '/', redirect: '/posts'},
  {path: '/posts', name: 'posts', component: Posts},
  {path: '/comments/:postId', name: 'comments', component: Comments}
];

Vue.use(VueRouter);

export default new VueRouter({routes});
