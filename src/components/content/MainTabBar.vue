<template>

    <tab-bar>
      <tab-bar-item path="/home" activeColor="deepPink">
        <img slot="item-icon" src="@/assets/img/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cate" activeColor="deepPink">
        <img
          slot="item-icon"
          src="@/assets/img/img/tabbar/category.svg"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="@/assets/img/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deepPink">
        <img
          slot="item-icon"
          src="@/assets/img/img/tabbar/shopcart.svg"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="@/assets/img/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deepPink">
        <img
          slot="item-icon"
          src="@/assets/img/img/tabbar/profile.svg"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="@/assets/img/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
 
</template>
<script>
import TabBar from "../common/tabbar";
import TabBarItem from "../common/tabbaritem";
export default {
    components: { TabBar, TabBarItem },
}
</script>