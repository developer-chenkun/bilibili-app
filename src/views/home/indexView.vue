<template>
  <div class="home">
    <app-header />
    <HomeChannel>
      <template v-slot:首页>
        <HomeSwiper />
        <VideoList :video-list="videoList" />
      </template>
    </HomeChannel>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import HomeChannel from "./components/HomeChannel.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import VideoList from "./components/VideoList.vue";

import axios from "axios";
import { onBeforeMount, ref } from "vue";
const videoList = ref([]);

const getVideoList = () => {
  axios({
    url: "/videosList",
    method: "get",
  }).then((res) => {
    videoList.value = res.data.result;
  });
};

onBeforeMount(() => {
  getVideoList();
});
</script>
<style lang="less" scoped>
.home {
  max-height: 100vh;
  overflow: hidden;
}
</style>
