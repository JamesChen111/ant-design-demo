import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    hideInMenu: true,
    component: () =>
      import(/* webpackChunkName: "user" */ "../layouts/UserLayout"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Register")
      },
      {
        path: "/user/register-result",
        name: "register.result",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/RegisterResult")
      }
    ]
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layouts" */ "../layouts/BasicLayout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { icon: "dashboard", title: "仪表盘" },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            meta: { title: "分析页" },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis"
              )
          }
        ]
      },
      // form
      {
        path: "/form",
        name: "form",
        component: { render: h => h("router-view") },
        meta: { icon: "form", title: "表单", authority: ["admin"] },
        children: [
          {
            path: "/form/basic-form",
            name: "basicform",
            meta: { title: "基础表单" },
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/BasicForm")
          },
          {
            path: "/form/step-form",
            name: "stepform",
            hideChildrenInMenu: true,
            meta: { title: "分布表单" },
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/Forms/StepForm"),
            children: [
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info"
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step1"
                  )
              },
              {
                path: "/form/step-form/confirm",
                name: "confirm",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step2"
                  )
              },
              {
                path: "/form/step-form/result",
                name: "result",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/Forms/StepForm/Step3"
                  )
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "/403",
    name: "403",
    hideInMenu: true,
    component: () =>
      import(/* webpackChunkName: "exception" */ "@/views/Exception/403")
  },
  {
    path: "*",
    name: "404",
    hideInMenu: true,
    component: () =>
      import(/* webpackChunkName: "exception" */ "@/views/Exception/404")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.path !== from.path) {
    Nprogress.start();
  }
  next();
});
router.afterEach(() => {
  Nprogress.done();
});
export default router;
