<template>
  <div class="tabbaritem" @click="changePage">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //   isActive: true,
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      //   return this.$route.path == this.path;
      return this.$route.path.includes(this.path);
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    changePage() {
      this.$router.push(this.path);
    },
  },
};
</script>
<style scoped>
.tabbaritem {
  flex: 1;
  font-size: 14px;
  height: 49px;
  text-align: center;
}
.tabbaritem img {
  margin-bottom: 2px;
  width: 24px;
  height: 24px;
}

</style>