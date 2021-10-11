<template>
  <div id="admin">
    <el-container>
      <el-aside  style="background-color:pink">
          <Aaside/>
          </el-aside>
      <el-container>
        <el-header><Aheader/></el-header>
        <el-main  style="background-color:yellow"><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Aaside from './components/aaside'
import Aheader from './components/aheader'
export default {
    name: "Admin",
  components: {
    Aaside,
    Aheader
  }
}
</script>
<style>
header{
  height: auto !important;
}
.el-aside{
    width: auto !important;
}
</style>
