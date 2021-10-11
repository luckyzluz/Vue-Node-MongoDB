<template>
  <div id="active">
    <input type="file" name="" id="file" style="position: absolute; bottom: 35px; left: 180px;"/>
    <button class="layui-btn" @click="doUpload" style="position: absolute; bottom: 30px; left: 380px">
      图片上传
    </button>

    <br />
    <img src="" alt="" id="show" style="width: 300px; position: absolute; left: 125px"/>
  </div>
</template>
<script>
import url from "@/api/url.js"
import {imgup} from "@/api/gallery.js"
export default {
  name: "Article",
  data() {
    return {};
  },
  mounted() {
    const s = document.createElement('script');
    s.type = 'text/JavaScript';
    s.src = 'https://cdn.bootcss.com/jquery/3.3.1/jquery.js';
    document.body.appendChild(s);
  },
  methods: {
   doUpload() {
		var file = $('#file').get(0).files[0]
    // console.log(file);
		var formdata = new FormData()
		formdata.append('hehe', file)
		
		$.ajax({
			url: url.imgup,
			type: 'post',
			cache: false,
			data: formdata,
			processData: false,
			contentType: false,
			success: function(data) {
        console.log(data);
				var err_code = data.err_code
				if (err_code === 0) {
          	$('#Image').attr('value', `${data.img}`)
					$('#show').attr('src', `${data.img}`)
					alert("上传成功", {
						icon: 6
					})
				

				} else if (err_code === -1) {
					alert("图片尺寸太大", {
						icon: 2
					})
				} else if (err_code === -2) {
					alert("类型不合格", {
						icon: 2
					})
				}
			}

		})
	}
  },
};
</script>
<style lang="scss">
</style>