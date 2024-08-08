<!-- 로고, 검색창, 메뉴바가 포함되어 있는 기본 헤더 컴포넌트 -->
<template>
  <header class="main-header">
    <div class="main-header__column">
      <div class="main-header__logo">
        <router-link to="/" class="link">
          <img class="main-header__logo--img" src="@/assets/G.png" alt="로고" />
          <img class="main-header__logo--img" src="@/assets/C.png" alt="로고" />
        </router-link>
      </div>
      <div class="main-header__menu-bar">
        <div class="menu-componenet" v-for="(serverName, idx) in serverNames" :key="idx">
          <router-link :to="{ path: '/main' }" class="link">{{ serverName
            }}</router-link>
        </div>
      </div>
      <!-- <div class="main-header__search">
        <input type="text" class="search-input" placeholder="검색어를 입력하세요" />
        <button class="search-button">
          <img src="@/assets/search.png" alt="검색" />
        </button>
      </div> -->
      <div class="main-header__options">
        <button class="search-button">
          <img src="@/assets/search.png" alt="검색" />
        </button>
        <div class="main-header__option" v-for="option in Object.keys(options)" :key="option">
          <router-link :to="options[option]" class="link">{{
            option
            }}</router-link>
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
        "액션",
        "롤플레잉",
        "RPG",
        "FPS",
        "스포츠",
        "캐주얼",
        "어드벤처",
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
  flex-direction: column;
  color: #fff;
}

.main-header__options {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  padding: 0.5rem 1rem;
}

.main-header__option {
  padding: 0 1rem;
}

.main-header__column {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem;
}

.main-header__logo {
  width: 15%;
  height: 2rem;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.main-header__logo a {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-header__logo--img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
}

.main-header__search {
  width: 25%;
  height: 5rem;
  position: relative;
}

.search-input {
  border: 4px solid #BB1936;
  width: 100%;
  height: 50%;
  padding: 0 1rem;
  margin-top: 2.5rem;
  font-size: 1rem;
  outline: none;
  border-radius: 1rem;
}

/* .search-button {
  position: absolute;
  top: calc(50%);
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #BB1936;
  border-radius: 1rem;
} */

.search-button {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1rem;
  background: black;
  border: none;
  cursor: pointer;
}

.search-button:hover {
  background-color: #4a4a4a;
  transition: all 0.1s ease-in-out;
}

.search-button img {
  width: 1.5rem;
  height: 1.5rem;
}

.main-header__menu-bar {
  /* gap: 1rem; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.menu-componenet {
  min-width: 5rem;
  font-size: 1rem;
  cursor: pointer;
}

.menu-componenet a {
  border-radius: 1rem;
  padding: 0.5rem;
}

.menu-componenet a:hover {
  background-color: #BB1936;
  transition: all 0.3s ease-in-out;
}

/* .main-header__menu-bar .menu-componenet:hover {
  background-color: #ed5070;
  transition: all 0.3s ease-in-out;
} */
.link {
  text-decoration: none;
  color: white;
}
</style>
