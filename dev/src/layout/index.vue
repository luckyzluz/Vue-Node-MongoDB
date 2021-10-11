<template>
  <div id="layout">
    <el-container>
      <el-header style="background-color: yellow"><Header /></el-header>
      <el-container>
        <el-aside width="200px" style="background-color: red" class="zaside"
          >Aside</el-aside
        >
        <el-main style="background-color: black">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from "./components/header.vue";
export default {
  name: "Layout",
  components: {
    Header,
  },
  data() {
    return {
      v: 11,
    };
  },
  methods: {},
};
</script>
<style>
/* #layout{
     background-color: #f2f3f6 !important;
} */
.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 200px;
}
.zaside {
  position: absolute;
  right: 0;
}
.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
  position: relative;
}
</style>