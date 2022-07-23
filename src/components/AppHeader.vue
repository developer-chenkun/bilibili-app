<template>
  <header class="app-header">
    <a href="#" class="logo">
      <i class="iconfont icon-bilibili"></i>
    </a>
    <a href="#" class="search">
      <i class="iconfont icon-search"></i>
    </a>
    <a href="#" class="face">
      <div class="avatar">
        <img :src="store.getFace" alt="" v-if="store.getFace" />
        <span v-else>登录</span>
      </div>
    </a>
    <div class="down-app">下载App</div>
  </header>
</template>

<script lang="ts" setup>
import { userStore } from "@/store/userStore";

const store = userStore();
</script>
<style lang="less" scoped>
.app-header {
  width: 100%;
  a {
    text-decoration: none;
  }
  display: flex;
  align-items: center;
  padding: 2vw 3vw;
  background-color: #fff;
  box-sizing: border-box;
  .logo {
    flex: 1;
    .icon-bilibili {
      color: #fb7299;
    }
    .navbar-logo {
      color: #fb7299;
    }
  }

  .search {
    flex: 2;
    display: inline-flex;
    justify-content: right;
  }

  .face {
    display: inline-flex;
    justify-content: center;
    flex: 1;
    .avatar {
      width: 32px;
      height: 32px;
      line-height: 32px;
      font-size: 12px;
      border-radius: 50%;
      background-color: aliceblue;
      color: #fb7299;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .down-app {
    flex: 1;
    background-color: #fb7299;
    color: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 2px;
  }
}
</style>
