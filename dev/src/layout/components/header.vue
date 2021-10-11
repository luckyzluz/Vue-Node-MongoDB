<template>
    <div id="header"  class="nav">
<el-row>
      <el-col :span="4"  style="background-color:yellow">
        <div class="logo">XX博客</div>
      </el-col>
      <el-col :span="20" style="background-color:red">
          <el-menu :default-active="activeIndex" class="nav-menu"  mode="horizontal" active-text-color="#409eff">
            <el-menu-item index="1">
              <span :class="['iconfont', 'icon-nav-search']"></span>搜索</el-menu-item>
            <el-menu-item
                v-for="(v, i) in $router.options.routes.slice(0, -2)"
                :key="i"
                :index="(i + 2).toString()"
                ><router-link :to="v.path"><span :class="['iconfont', v.meta.iconfont]"></span
                >{{ v.meta.znav }}</router-link></el-menu-item
              >
          </el-menu>
          <span :class="['iconfont', 'icon-menu2','burger']"   @click="drawer = true"></span>
      </el-col>
    </el-row>
    </div>
</template>
<script>
export default {
    name:'Article',
    data() {
      return {
          activeIndex:'1'
      };
    },mounted(){
      // 获取汉堡按钮
	const burger = document.querySelector(".burger");
	// 获取导航菜单
	const navMenu = document.querySelector(".nav-menu");
	
	//获取菜单项
	const navMenuItems = document.querySelectorAll(".nav-menu li");
	
	//注册监听
	burger.addEventListener("click", () => {
	  // 汉堡按钮
	  burger.classList.toggle("active");
	  // 导航菜单开关
	  navMenu.classList.toggle("open");
	
	  // 菜单项动画
	  navMenuItems.forEach((item, index) => {
	    // 如果已添加animation,先取消
	    if (item.style.animation) {
	      item.style.animation = "";
	    } else {
	      item.style.animation = `0.3s ease-in slideIn forwards ${index * 0.1 +
	        0.3}s`;
	    }
	  });
	});
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style>
#header{
  background-color: rgb(242,243,246);
}
.nav {
		  position: absolute;
		  top: 0;
		  left: 0;
		  right: 0;
		  background-color: rgba(65, 81, 101, 0.9);
		}
		
		.logo {
		  font-size: 24px;
		  font-weight: 600;
		  color: #dadbdd;
		  flex: 1;
		}
		
	.nav-menu {
		  flex: 1;
		  display: flex;
		  justify-content: flex-end;
z-index: 999;
		}
		
		.nav-menu li {
		  list-style: none;
		  color: #dadbdd;
		  font-weight: 600;
		}
		
		.burger {
		  display: none;
      float: right;
      margin-right: 18px;
		}
		

 @media screen and (max-width: 768px) {
		  .burger {
		    display: block;
		  }
		  .nav-menu {
		    position: absolute;
		    top: 60px;
		    right: 0;
		    bottom: 0;
		    width: 50vw;
		    height: calc(100vh - 60px);
		    background-color: rgb(65, 81, 101, 0.9);
		    flex-direction: column;
		    justify-content: flex-start;
		    align-items: center;
		    transform: translateX(100%);
		  }
		

		  .nav-menu.open {
		    transform: translateX(0);
		    transition: 0.4s ease-in-out;
		  }
		

		  .nav-menu li {

		    margin: 3vh;
		    transform: translateX(20px);
		    opacity: 0;
		  }

		  @keyframes slideIn {
		    from {
		      transform: translateX(20px);
		      opacity: 0;
		    }
		    to {
		      transform: translateX(0);
		      opacity: 1;
		    }
		  }
		} 
</style>