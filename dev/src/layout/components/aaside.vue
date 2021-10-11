<template>
  <div id="aaside">
    <el-menu
      :default-active=routerpath
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#304156"
      active-text-color="#409eff"
      text-color="#bfcbd9" router
      :unique-opened="true"
    >
      <!-- ----- -->
      <div
        v-for="(v, i) in $router.options.routes.slice(-2, -1)[0]['children']"
        :key="i"
      >
        <!-- ---有二级导航--- -->
        <el-submenu v-if="v['children']" :index="(i + 1).toString()">
          <template slot="title">
            <i :class="v.meta.icon"></i>
            <span slot="title" v-if="!isCollapse">{{ v.meta.title }}</span>
          </template>
          <el-menu-item
            v-for="(x, y) in v['children']"
            :key="y"
            :index="'/admin/'+v.path+'/'+x.path"
            ><i :class="x.meta.icon"></i>{{ x.meta.title }}</el-menu-item
          >
        </el-submenu>
        <!-- -------么有二级导航------- -->
        <el-menu-item v-else :index="'/admin/'+v.path">
          <i :class="v.meta.icon"></i>
          <span slot="title">{{ v.meta.title }}</span>
        </el-menu-item>
        <!-- --------------------------- -->
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "aaside",

  props: ["$store.state.isCollapse"],
  data() {
    return {
      isCollapse: true,
      routerpath: '/admin/dashboard'
    };
  },
  created() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted(){
    // console.log(typeof(this.$route.path));
  },
  computed: {
    monitor() {
      return this.$store.state.isCollapse;
    },
  },
  watch: {
    monitor() {
      this.isCollapse = this.$store.state.isCollapse;
    },
   '$route.path': function (newVal, oldVal) {
      this.routerpath=newVal;
    }
  },
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
.el-menu--collapse {
  height: 100vh;
}
.el-tooltip__popper {
  width: 72px !important;
  height: 42px !important;
  color: #ffffff !important;
  text-align: center !important;
  line-height: 42px !important;
  background-color: #303133 !important;
  margin-left: 10px;
  position: relative;
}
.el-tooltip__popper::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #303133;
  transform: rotate(45deg);
  left: -8%;
  top: 50%;
  margin-top: -13px;
}
</style>