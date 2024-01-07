<!-- 로고, 검색창, 메뉴바가 포함되어 있는 기본 헤더 컴포넌트 -->
<template>
  <header class="main-header">
    <div class="main-header__options">
      <div
        class="main-header__option"
        v-for="option in Object.keys(options)"
        :key="option"
      >
        <router-link :to="options[option]" class="link">{{
          option
        }}</router-link>
      </div>
    </div>
    <div class="main-header__column">
      <div class="main-header__logo">
        <router-link to="/" class="link">로고</router-link>
      </div>
      <div class="main-header__search">
        <input
          type="text"
          class="search-input"
          placeholder="검색어를 입력하세요"
        />
        <button class="search-button">
          <img src="@/assets/search.png" alt="검색" />
        </button>
      </div>
    </div>
    <div class="main-header__column">
      <div class="main-header__menu-bar">
        <div
          class="menu-componenet"
          v-for="(serverName, idx) in serverNames"
          :key="idx"
        >
          <router-link
            :to="{ path: '/board', query: { server: serverName } }"
            class="link"
            >{{ serverName }}</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "MainHeader",
  data() {
    return {
      options: {
        로그인: "/login",
        회원가입: "/signup",
        마이페이지: "/mypage",
      },
      serverNames: [
        "루나",
        "스카니아",
        "엘리시움",
        "크로아",
        "오로라",
        "레드",
        "이노시스",
      ],
    };
  },
};
</script>
<style scoped>
.main-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
.main-header__options {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  padding: 0.5rem 1rem;
}
.main-header__option {
  padding: 0 1rem;
}
.main-header__column {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.main-header__logo {
  width: 20rem;
  height: 10rem;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-header__search {
  width: 50rem;
  height: 10rem;
  position: relative;
  margin: 0 1rem;
}
.search-input {
  border: 4px solid #61e2a1;
  width: 100%;
  height: 50%;
  padding: 0 1rem;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  outline: none;
}
.search-button {
  position: absolute;
  top: calc(50% - 2.5rem);
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: #61e2a1;
}
.search-button img {
  width: 3rem;
  height: 3rem;
}
.main-header__menu-bar {
  /* gap: 1rem; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: #46dc91;
}
.menu-componenet {
  padding: 1rem;
  width: calc((100vw - 40rem) / 7);
  min-width: 10rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.main-header__menu-bar .menu-componenet:hover {
  background-color: #21d44e;
  transition: all 0.3s ease-in-out;
}
.link {
  text-decoration: none;
  color: #000000;
}
</style>
