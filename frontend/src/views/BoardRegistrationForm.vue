<template>
  <div class="board-register-form">
    <div class="form-title">
      <h1>구매 등록</h1>
    </div>
    <div class="form-section">
      <label for="title">글 제목</label>
      <input
        type="text"
        id="title"
        v-model="form.title"
        placeholder="글 제목을 입력하세요"
      />
    </div>

    <div class="form-section">
      <label>카테고리</label>
      <select v-model="form.category">
        <option value="">서버를 선택하세요</option>
        <option value="luna">루나</option>
        <option value="scania">스카니아</option>
        <option value="elysium">엘리시움</option>
        <option value="croa">크로아</option>
        <option value="aurora">오로라</option>
        <option value="red">레드</option>
        <option value="enosys">이노시스</option>
      </select>
    </div>

    <div class="form-section">
      <label for="price">판매가격</label>
      <input
        type="number"
        id="price"
        min="0"
        step="1000"
        v-model="form.price"
        placeholder="가격을 입력하세요"
      />
    </div>

    <div class="form-section">
      <label for="description">내용</label>
      <textarea
        id="description"
        v-model="form.description"
        rows="4"
        placeholder="내용을 입력하세요"
      ></textarea>
    </div>

    <div class="form-section last-section">
      <label for="screenshot">스크린샷</label>
      <input type="file" id="screenshot" />
    </div>

    <div class="form-buttons">
      <button class="form-submit" type="submit" @click="submitForm">
        글 등록하기
      </button>
      <button class="form-submit">
        <router-link to="/" class="link">취소하기</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        category: "",
        tradeType: "sell",
        price: null,
        description: "",
      },
    };
  },
  methods: {
    submitForm() {
      // 폼 제출 로직을 여기에 추가합니다.
      // 예를 들어, 서버로 폼 데이터를 전송할 수 있습니다.
      console.log(this.form);
    },
  },
};
</script>

<style>
/* 기존의 CSS 코드 */
.board-register-form {
  width: calc(100vw - 40rem);
  min-width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 0.5rem;
}

.form-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  border-bottom: 3px solid #4fbb8588;
  margin-bottom: 2rem;
}

.form-section {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #ccc;
}

.last-section {
  border-bottom: 1px solid #ccc;
}

.form-section label {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #61e2a288;
  font: 1.5rem bold;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

.form-section input[type="text"],
.form-section input[type="number"],
.form-section select,
.form-section textarea,
.form-section input[type="file"] {
  width: 70%;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.radio-buttons label {
  margin-right: 10px;
}

.radio-buttons input[type="radio"] {
  margin-right: 5px;
}

.form-buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 2rem;
}

.form-submit {
  width: 20rem;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #4fbb85;
  color: white;
  cursor: pointer;
  font: 1rem bold;
}

.form-submit:last-child {
  margin-left: 2rem;
  background-color: #ccc;
}

.form-submit:last-child a {
  color: white;
  text-decoration: none;
}
</style>
