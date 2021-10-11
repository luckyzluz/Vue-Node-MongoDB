<template>
  <div id="z_nav">
    <!-- <ul>
      <li v-for="(v, i) in $router.options.routes.slice(0, -2)" :key="i">
        <router-link :to="v.path" :class="v.name"
          ><span :class="['iconfont',v.meta.iconfont]"></span
          >{{ v.meta.znav }}</router-link
        >
      </li>
    </ul> -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(v, i) in $router.options.routes.slice(0, -2)"
        :key="i"
        :index="i + 1"
        ><span :class="['iconfont', v.meta.iconfont]"></span
        >{{ v.meta.znav }}</el-menu-item
      >
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Znav",
  data() {
    return {
      activeIndex: "1",
    };
  },
  beforeMount() {
    this.getNavLink();
  },
  mounted() {},
  methods: {
    getNavLink() {
      console.log(this.$router.options.routes);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
ul {
  float: right;
}
li {
  float: left;
}
.icon-collect {
  font-size: 16pxpx;
  color: red;
}
</style>