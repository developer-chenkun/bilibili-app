<template>
  <AppHeader />
  <VideoPlay :video-info="videoInfo" />
</template>
<script lang="ts" setup>
import AppHeader from "@/components/AppHeader.vue";
import { useRoute } from "vue-router";
import VideoPlay from "./components/VideoPlay.vue";
const route = useRoute();
const videoInfo = route.query;
console.log(videoInfo);
</script>
