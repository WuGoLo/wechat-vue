import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/product",
  //   name: "product",
  //   redirect: '/product/details',
  //   component: Product,
  //   children: [
  //     {
  //       path: "details",
  //       name: "prdDetails",
  //       component: () => import("@/views/product/prd_details.vue")
  //     }
  //   ],
  // }
];

const router = new VueRouter({
  routes
});

export default router;
