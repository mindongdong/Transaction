<template>
  <div class="post-container">
    <div class="title-container">
      <h1 class="main-title">판매 리스트</h1>
      <h1 class="sub-title">{{ post.category }}</h1>
    </div>

    <div class="post-information">
      <div class="post-column">
        <div class="post-column__title">판매 제목</div>
        <h1 class="post-title">{{ post.title }}</h1>
      </div>
      <div class="post-column">
        <div class="post-column__title">판매 내용</div>
        <p class="post-description">{{ post.description }}</p>
      </div>
      <div class="post-column">
        <div class="post-column__title">판매 카테고리</div>
        <p class="post-category">{{ post.category }}</p>
      </div>
      <div class="post-column">
        <div class="post-column__title">판매 가격</div>
        <p class="post-price">{{ post.price }}</p>
      </div>
    </div>

    <div class="image-gallery">
      <div class="image" v-for="(image, index) in post.images" :key="index">
        <img :src="image" alt="Post image" />
      </div>
    </div>

    <button class="post-button">구매 신청하기</button>

    <div class="post-details">
      <span>글번호: {{ post.id }}</span>
      <span>등록시간: {{ post.time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "게시물 제목",
        description: "게시물 내용 및 상세 설명",
        category: "메이플 서버",
        id: "2024010809352420",
        time: "2024-01-08 05:32:40",
        price: "54900원",
        images: [
          // 이미지 URL들을 배열로 추가합니다.
        ],
      },
    };
  },
};
</script>

<style>
.post-container {
  font-family: "Arial", sans-serif;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  max-width: 75rem;
  min-width: 75rem;
  margin: auto;
}

.title-container {
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

.post-information {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #e1e4e8;
}

.post-column {
  display: flex;
  flex-direction: row;
  border: 1px solid #e1e4e8;
}

.post-column__title {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #61e2a288;
  font-size: 1.5rem;
  font-weight: bold;
}

.post-title,
.post-description,
.post-category,
.post-price {
  width: 70%;
  font-weight: 600;
  font-size: 1.25rem;
  text-align: left;
  padding: 2rem;
  border-radius: 5px;
}

.post-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.image-gallery {
  display: flex;
  justify-content: center;
}

.image-gallery .image {
  margin-right: 10px;
}

.image-gallery .image:last-child {
  margin-right: 0;
}

.image-gallery img {
  width: 100px; /* 이미지 크기는 프로젝트에 맞게 조정 */
  height: 100px;
  border-radius: 4px;
}

.post-button {
  width: 20rem;
  height: 3rem;
  margin: 2rem auto;
  background-color: #007bff;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
