import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)


console.log(routes);
const router = new VueRouter({
    mode: 'history',
    base: process.env.BSE_URL,
    routes
})
// 解决重复多次点击某个操作，频繁触发同一个路由的情况
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router