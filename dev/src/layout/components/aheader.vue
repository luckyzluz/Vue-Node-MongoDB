<template>
  <div id="aheader">
<el-row class="zahtop">
  <el-col :span="12">
    <div class="grid-content bg-purple">
      <div class="zmenu" @click="setisCollapse">
<i
          :class="[
            this.$store.state.isCollapse
              ? 'el-icon-s-unfold'
              : 'el-icon-s-fold',
            'hamburger'
          ]"
        ></i>
      </div>
  <el-breadcrumb separator="/" class="zcrumbs">
  <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item v-for="(v,i) in $route.matched.slice(1)[0].path.indexOf('dashboard') !== -1 ? $route.matched.slice(2) : $route.matched.slice(1)" :key="i" :to="i==0?'':{path:v.path}">{{v.meta.znav}}</el-breadcrumb-item>
</el-breadcrumb>
    </div>
    </el-col>
  <el-col :span="12">
    <div class="grid-content bg-purple-light">
      <i class="iconfont icon-nav-search"></i>
      <el-dropdown :hide-on-click="true" trigger="click">
  <span class="el-dropdown-link">
    <el-avatar shape="square" size="medium" :src="squareUrl">
          </el-avatar><i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>修改密码</el-dropdown-item>
    <el-dropdown-item divided>退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
      </el-col>
</el-row>
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
  </div>
</template>
<script>
export default {
  name: "Aheader",
  data() {
    return {
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
    };
  },
  methods: {
    setisCollapse() {
      this.$store.commit("SET_COLLAPSE");
    },
  },
  mounted(){
    // console.log(this.$route.matched.slice(1)[0].path.indexOf("dashboard666")!==-1?"true":"false");
    // console.log(this.$route.path);
  }
};
</script>
<style>
.zahtop .el-col{
  height: 50px;
}
.grid-content {
  height: 100%;
}
.zmenu{
  padding: 0 15px 0 0;
  line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    -webkit-transition: background .3s;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;
}
.zmenu i{
font-size: 20px !important;
display: inline-block;
    vertical-align: middle;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  /* ------------- */
.el-breadcrumb{
  line-height: 47px !important;
}
  .el-row:last-child {
      margin-bottom: 0;
    }

  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
/* ------------------------- */
/* #aheader{
  height: auto;
  background-color: #ffffff;
}
.el-header{
  padding: 0 12px !important;
}

.navbar .hamburger-container {
  line-height: 40px;
  cursor: pointer;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
}

.hamburger {
  float: left;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  font-size: 22px;
  line-height: 40px;
}
.zcrumbs{
display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
    margin-top: 3px;
}
.ztags-view-container{
  float: left;
  height: 33px;
  line-height: 33px;
} */
</style>