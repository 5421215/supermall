<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar'
export default {
  components:{MainTabBar}
};
</script>

<style>
@import "assets/css/base.css";
</style>
