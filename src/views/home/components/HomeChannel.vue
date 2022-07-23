<template>
  <van-tabs v-model:active="active">
    <van-tab :key="id" v-for="(item, id) in channelList" :title="item.text">
      <slot :name="item.text"></slot>
    </van-tab>
  </van-tabs>
</template>
<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import axios from "axios";
// TS接口 标记数据格式
interface NavItem {
  id: string;
  text: string;
}

const active = ref("1");
const channelList = ref<NavItem[]>([]);

const getNavList = () => {
  axios({
    url: "/navList/",
    method: "get",
  }).then((res) => {
    console.log(res.data);
    channelList.value = res.data.result;
  });
};

onBeforeMount(() => {
  getNavList();
});
</script>
