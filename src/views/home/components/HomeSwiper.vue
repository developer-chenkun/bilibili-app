<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in swiperList" :key="item.imgSrc">
      <img :src="item.imgSrc" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import axios from "axios";
import { onBeforeMount, ref } from "vue";

interface swiperItem {
  link: string;
  imgSrc: string;
}

const swiperList = ref<swiperItem[]>([]);

const getSwiper = () => {
  axios({
    url: "/swiperList",
    method: "get",
  }).then((res) => {
    swiperList.value = res.data.result;
  });
};

onBeforeMount(() => {
  getSwiper();
});
</script>
<style scoped lang="less">
.my-swipe {
  width: 100%;
  height: 200px;
  .van-swipe-item {
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
