import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const route = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      alias: "/a",
      component: () => import("./views/About.vue")
    },
    {
      path: "/post/:postId",
      name: "post",
      component: () => import("./views/Post.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue") // чтобы загружались только при необходимости
    },
    {
      path: "/c",
      redirect: "/contact"
    },
    {
      path: "/user/:userId",
      component: import(/* webpackChunkName: "user" */ "./components/Test.vue"),
      props: true,
      children: [
        {
          path: "profile",
          component: import(
            /* webpackChunkName: "user" */ "./components/TestItem.vue"
          )
        },
        {
          path: "posts",
          component: import(
            /* webpackChunkName: "user" */ "./components/TestItem2.vue"
          )
        }
      ]
    },
    {
      path: "*",
      component: () => import("./views/About.vue")
    }
  ]
});

route.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default route;
