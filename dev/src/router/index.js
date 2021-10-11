import Vue from 'vue'
// 路由
import VueRouter from 'vue-router'
// vuex
import store from '@/store'
// 获取请求接口
import url from "@/api/url.js"
// 请求头token
import {gettesting} from '@/api/user.js'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Zblog',
    component: () => import('../layout/index'),
    meta: {
      title: 'zblog博客',
      znav: '首页',
      iconfont: 'icon-home'
    }
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/article/index'),
    meta: {
      title: '文章',
      znav: '文章',
      iconfont: 'icon-paper'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/admin/login/index'),
    meta: {
      title: '登录',
      znav: '登录',
      iconfont: 'icon-user'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/admin/register/index'),
    meta: {
      title: '注册',
      znav: '注册',
      iconfont: 'icon-user'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../layout/admin'),
    meta: {
      title: '后台管理中心 - 安全第一请勿泄露后台地址 - Copyright by Zblog后台管理系统',
      znav: '后台',
      needLogin: true,
    },
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/admin/dashboard/index'),
        name: 'Dashboard',
        meta: { 
          title: '首页', 
          icon: 'el-icon-s-home', 
          affix: true, 
          znav:'首页',
          needLogin: true,
        }
      },
      {
        path: 'documentation',
        component: () => import('@/views/admin/documentation/index'),
        name: 'Documentation',
        meta: { 
          title: '文章', 
          icon: 'el-icon-document', 
          affix: true, 
          znav: '文章',
          needLogin: true,
        },
          
        children:[
          {
            path: 'newarticle',
            name: 'NewArticle',
            component: () => import('@/views/admin/documentation/newarticle'),
            meta: {
              title: '编写文章',
              znav: '编写文章',
              icon: 'el-icon-edit',
              needLogin: true,
            },
          },
          {
            path: 'managedoc',
            name: 'ManageDoc',
            component: () => import('@/views/admin/documentation/managedoc'),
            meta: {
              title: '管理文章',
              znav: '管理文章',
              icon: 'el-icon-s-management',
              needLogin: true,
            },
          },
        ]
      },
      {
        path: 'gallery',
        component: () => import('@/views/admin/gallery/index'),
        name: 'Gallery',
        meta: { 
          title: '图库',
          icon: 'el-icon-folder', 
          affix: true,
          znav: '图库',
          needLogin: true,
       }
      },
      {
        path: 'setting',
        component: () => import('@/views/admin/setting/index'),
        name: 'Setting',
        meta: { 
          title: '设置',
          icon: 'el-icon-setting', 
          affix: true,
          znav: '设置',
          needLogin: true,
       },
       children:[
        {
          path: 'basettings',
          name: 'Basettings',
          component: () => import('@/views/admin/setting/basettings'),
          meta: {
            title: '基础设置',
            znav: '基础设置',
            icon: 'el-icon-s-management',
            needLogin: true,
          }
        },
       ]
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: ()=>import('../views/error/index'),
    meta:{
      title:'页面没了',
      znav:'404'
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // ------------未匹配到路由------------
  if (to.matched.length === 0) { 
    next('/404') 
  } else {
    // ---------设置title--start-----------
    let title=zblog
    if (to.meta.params){
      title = `${to.meta.title}:${to.params[to.meta.params] || ''} - ${title}`
  }else {
      title = `${to.meta.title} - ${title}`
  }
  document.title=title;
 // ---------设置title--end-----------
  // ----------是否加载loading---start-----------
  if (to.path !== from.path&to.path.indexOf("admin")== -1) {
      store.dispatch('setLoading', true);
  }
   // ----------是否加载loading---end-----------
  // 判断权限（是否需要登录）start------------------
 
  // ----------------
  if (to.meta.needLogin) {
    gettesting(url.checktoken).then((ok)=>{
            if(ok.data.data.ok==1){
              next()
            }else{
              next({
                name: 'Login',
                query: {redirect: to.fullPath}
              })
            }
    })
    // 判断权限（是否需要登录）end------------------
  }else{
    next();
  }

  }
})
router.afterEach((to, from) => {
  // 最多延迟 关闭 loading
  setTimeout(() => {
      store.dispatch('setLoading', false);
  }, 500)
})
// 解决某个报错-------------------
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)}
export default router
