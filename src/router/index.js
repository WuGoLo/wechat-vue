import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Payment from "@/views/payment/pay_order.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/payment",
    name: "payment",
    redirect: '/payment/order',
    component: Payment,
    children: [
      {
        path: "order",
        name: "payOrder",
        component: () => import("@/views/payment/pay_order.vue")
      }
    ],
  }
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
