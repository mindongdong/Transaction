// Vue 3에서는 Vue 생성자 대신 createRouter와 createWebHistory를 임포트합니다
import { createRouter, createWebHistory } from "vue-router";

// 라우트 정의
const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    // Vue 3에서도 Lazy loading을 사용할 수 있습니다
    component: () => import("@/views/MainPage.vue"),
  },
  {
    path: "/signup",
    component: () => import("@/views/SignupPage.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/registerForm",
    component: () => import("@/views/BoardRegistrationForm.vue"),
  },
  {
    path: "/board",
    component: () => import("@/views/BoardPage.vue"),
  },
  {
    path: "/boardContent",
    component: () => import("@/views/BoardContent.vue"),
  }
];

// createRouter 함수를 사용하여 라우터 인스턴스를 생성합니다.
// 이때 history 모드를 설정합니다.
const router = createRouter({
  history: createWebHistory(), // Vue 3에서는 createWebHistory를 사용합니다
  routes,
});

// 생성된 라우터 인스턴스를 export합니다.
export default router;
