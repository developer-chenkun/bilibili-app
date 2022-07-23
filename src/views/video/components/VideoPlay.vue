<template>
  <div class="video-wrap">
    <img v-if="showImg" :src="videoInfo.imgSrc" />
    <video v-if="play === true" controls>
      <source :src="videoInfo.videoSrc" type="video/mp4" />
    </video>
    <div class="controll" @click="toggleControll">
      <div class="controll-model" v-if="controll">
        <i class="iconfont icon-play" v-if="!play" @click="startPlay"></i>
        <i class="iconfont icon-stop" v-if="play" @click="stopPlay"></i>
      </div>
    </div>
  </div>
  <div class="vide-desc">
    <h5>{{ videoInfo.desc }}</h5>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, defineProps, ref } from "vue";
const showImg = ref(true);
const play = ref(false);
const controll = ref(true);
const props = defineProps(["videoInfo"]);
const { videoInfo } = toRefs(props);

const startPlay = (e: Event) => {
  e.stopPropagation();
  play.value = true;
  showImg.value = false;
};

const stopPlay = (e: Event) => {
  e.stopPropagation();
  play.value = false;
};

const toggleControll = () => {
  controll.value = !controll.value;
};
</script>

<style lang="less" scoped>
.video-wrap {
  width: 100vw;
  height: 300px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  video {
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .controll {
    position: absolute;
    background-color: aqua;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;
    z-index: 1;

    .controll-model {
      position: relative;
      top: calc(50% - 25px);
      .icon-play {
        // background: transparent;
        position: relative;
        font-size: 50px;
        color: gray;
      }
      .icon-stop {
        // background: transparent;
        position: relative;
        font-size: 50px;
        color: gray;
      }
    }
  }
}

.vide-desc {
  box-sizing: border-box;
  padding: 0 10px;
  text-align: left;
}
</style>
