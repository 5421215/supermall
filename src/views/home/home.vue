<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view />
    <tab-control class="teb-control" :titles="['流行', '新款', '精选']" />
    <ul>
      <li v-for="i in 50">{{ i }}</li>
    </ul>
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";

import { getHomeMultidata } from "@/network/home.js";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  components: { NavBar, HomeSwiper, RecommendView, FeatureView, TabControl },
  created() {
    //请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.teb-control {
  position: sticky;
  top: 43px;
}
</style>