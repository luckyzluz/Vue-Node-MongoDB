<template>
  <div id="zblog">
    <loading/>
<router-view></router-view>
  </div>
</template>

<script>
import loading from './components/z_loading/z_loading.vue'
export default {
  name: 'Zblog',
  components:{
    loading
  },
  data(){
    return{
      xx:`./components/z_loading/z_loading1.vue`
    }
  }
}
</script>

<style>

</style>
