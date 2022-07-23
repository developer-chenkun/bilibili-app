<template>
  <div class="video-list">
    <div class="list-item" v-for="video in videoList" :key="video.id">
      <router-link :to="{ path: '/video/' + video.id, query: { ...video } }">
        <div class="item-wrap">
          <img :src="video.imgSrc" />
        </div>
        <div class="item-desc">{{ video.desc }}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, defineProps } from "vue";
interface VideoItem {
  id: string;
  link: string;
  imgSrc: string;
  desc: string;
  playCount: string;
  commentCount: string;
  videoSrc: string;
}
interface Prop {
  videoList: VideoItem[];
}
const props = defineProps<Prop>();
const { videoList } = toRefs(props);
</script>

<style scoped lang="less">
.video-list {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0px;
  overflow: scroll;
  height: calc(100vh - 200px - 50px - 20px);
  padding: 5px 0px;
  .list-item {
    width: 45%;
    height: 150px;
    background-color: #fff;
    margin-bottom: 3px;
    box-sizing: inherit;
    .item-wrap {
      width: 100%;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .item-desc {
      width: 100%;
      height: 50px;
      font-size: 14px;
      overflow: hidden;
      color: #000;
      text-align: left;
    }
  }
}
</style>
