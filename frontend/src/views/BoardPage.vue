<template>
  <div class="board-container">
    <div class="board-title">
      <h1 class="main-title">판매 리스트</h1>
      <h1 class="sub-title">{{ $route.query.server }}</h1>
    </div>

    <!-- 게시판 목록 -->
    <div class="board-list">
      <div
        class="board-item"
        v-for="(item, index) in boardItems"
        :key="index"
        @click="openBoardContent"
      >
        <div class="item-level">{{ item.level }}</div>
        <div class="item-description">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-title__sub">{{ item.sub_title }}</div>
        </div>
        <div class="item-price">{{ item.price }}</div>
        <div class="item-status">{{ item.status }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardItems: [
        // 데이터 구조는 이미지 내용을 기반으로 해서 여기에 배열로 구성됩니다.
        {
          level: "[90~5000]",
          title: "제목1 입니다.",
          sub_title: "서브 제목1 입니다.",
          price: "가격 2,780원",
          status: "판매중",
        },
        {
          level: "[90~5000]",
          title: "제목2 입니다.",
          sub_title: "서브 제목2 입니다.",
          price: "가격 2,780원",
          status: "판매중",
        },
        {
          level: "[90~5000]",
          title: "제목3 입니다.",
          sub_title: "서브 제목3 입니다.",
          price: "가격 2,780원",
          status: "판매중",
        },
        {
          level: "[90~5000]",
          title: "제목4 입니다.",
          sub_title: "서브 제목4 입니다.",
          price: "가격 2,780원",
          status: "판매중",
        },
        {
          level: "[90~5000]",
          title: "제목5 입니다.",
          sub_title: "서브 제목5 입니다.",
          price: "가격 2,780원",
          status: "판매중",
        },
        {
          level: "[90~5000]",
          title: "제목6 입니다.",
          sub_title: "서브 제목6 입니다.",
          price: "가격 2,780원",
          status: "판매중",
        },
      ],
    };
  },
  methods: {
    openBoardContent() {
      this.$router.push({ path: "/boardContent" });
    },
  },
};
</script>
<style>
/* 게시판 컨테이너 스타일링 */
.board-container {
  font-family: "Arial", sans-serif;
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 4px;
  overflow: hidden;
  max-width: 75rem;
  min-width: 75rem;
  margin: auto;
}

.board-title {
  padding: 2rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e4e8;
}

.main-title {
  font-size: 2rem;
  color: #000;
  font-weight: bold;
  margin-right: 1rem;
}

.sub-title {
  font-size: 1.5rem;
  color: #555;
}

/* 검색 및 필터 섹션 스타일링 */
.search-filter-section {
  padding: 10px;
  border-bottom: 1px solid #e1e4e8;
}

.board-list {
  padding: 10px;
  cursor: pointer;
}

/* 게시판 목록 아이템 스타일링 */
.board-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e1e4e8;
}

/* 마지막 아이템의 하단 테두리 제거 */
.board-item:last-child {
  border-bottom: none;
}

.item-level {
  font-size: 0.85rem;
  color: #555;
  margin-right: 10px;
  flex-basis: 10%;
}

.item-description {
  flex-basis: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.item-title {
  font-size: 1.2rem;
  color: #000;
  font-weight: bold;
}
.item-title__sub {
  font-size: 1rem;
  color: #555;
}
.item-price {
  font-size: 1rem;
  color: #007bff;
  flex-basis: 20%;
  text-align: right;
}

.item-status {
  font-size: 1rem;
  color: #28a745;
  flex-basis: 15%;
  text-align: right;
}

.item-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
}

/* 액션 버튼 스타일 */
.item-actions button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
  border-radius: 4px;
}

.item-actions button:hover {
  background-color: #0056b3;
}
</style>
