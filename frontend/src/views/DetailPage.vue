<template>
    <div class="container">
        <img v-if="currentImageIndex === 0" class="detail-img" src="@/assets/maple-detail.png" @click="showNextImage">
        <img v-if="currentImageIndex === 1" class="detail-img" src="@/assets/valro-detail.png" @click="showNextImage">
        <img v-if="currentImageIndex === 2" class="detail-img" src="@/assets/roa-detail.png" @click="showNextImage">
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentImageIndex: 0
        };
    },
    methods: {
        showNextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % 3;
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #060613;
    padding-top: 3rem;
}

.detail-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
}
</style>