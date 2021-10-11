<template>
  <div id="z_loading" v-show="isLoading">
      <div class="loading">
    <span>Loading...</span>
  </div>
  </div>
</template>
<script>
export default {
    name:'Zloading',
    computed: {
            isLoading() {
                return this.$store.state.isLoading
            }
        },
        watch: {
            isLoading: {
                immediate: true,
                handler: (n, o) => {
                    let htmlBodyElement = document.querySelector('body');
                    htmlBodyElement.style.overflowY = n ? 'hidden' : 'auto';
                }
            }
        }
};
</script>
<style scoped>
#z_loading {
  margin: 0;
  padding: 0;
  background-color: #34495e;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "montserrat", sans-serif;
}
.loading {
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 10px solid #e74c3c;
  position: relative;
  animation: a1 2s linear infinite;
}
.loading::before,
.loading::after {
  content: "";
  width: 200px;
  height: 200px;
  position: absolute;
  left: 0;
  top: -10px;
  box-sizing: border-box;
  border-radius: 50%;
}
.loading::before {
  border-top: 10px solid #e67e22;
  transform: rotate(120deg);
}
.loading::after {
  border-top: 10px solid #3498db;
  transform: rotate(240deg);
}
.loading span {
  position: absolute;
  width: 200px;
  height: 200px;
  color: #fff;
  text-align: center;
  line-height: 200px;
  animation: a2 2s linear infinite;
}
@keyframes a1 {
  to {
    transform: rotate(360deg);
  }
}
@keyframes a2 {
  to {
    transform: rotate(-360deg);
  }
}
</style>