import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    pageInit: false,
    // 记录有几个ajax请求正在执行中
    ajaxCount: 0,
    isLoading:false,
    loading: false,
    isCollapse: true,//后台aside导航展开
  },
  mutations: {
    SET_LOADING: (state, v) => {
      state.isLoading = v;
  },
  SET_COLLAPSE:(state)=>{
      state.isCollapse=!state.isCollapse
      console.log();
  }
  },
  actions: {
    setLoading: ({commit}, v) => {
      commit('SET_LOADING', v);
  }
  },
  modules: {
  },
  getters:{
    isLoading: state => state.isLoading,
  }
})
