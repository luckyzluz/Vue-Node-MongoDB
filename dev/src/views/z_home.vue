<template>
  <div id="z_home">
    <el-container>
      <el-header>
          <Znav />
      </el-header>
      <el-container>
        <el-aside width="200px">
            Aside
        </el-aside>
        <el-container>
          <el-main>
              Main
          </el-main>
        </el-container>
      </el-container>
      <el-footer>
          Footer
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Znav from "../components/z_nav";
export default {
  name: "Zhome",
  components: {
    Znav,
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  position: absolute;
  right: 0;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
  position: relative;
}

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>