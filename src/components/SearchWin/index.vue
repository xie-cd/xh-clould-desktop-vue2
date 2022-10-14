<template>
  <div id="search-win">
    <!-- 搜索框 -->
    <input
      type="text"
      class="input"
      placeholder="在这里输入你要搜索的内容"
      id="search-input"
      oninput="
		if(this.value.length>0){
			let rand=['农夫山泉瓶盖简介.txt','瓶盖构造图.png','瓶盖结构说明.docx','可口可乐瓶盖.jpg','可口可乐瓶盖历史.pptx','瓶盖质量统计分析.xlsx','农夫山泉瓶盖.svg','瓶盖介绍.doc'];
			$('#search-win>.ans>.list>list').html('<a href=\'#\'>'+rand[this.value.length%8]+'</a>'+'<a href=\'#\'>'+rand[(this.value.length+3)%8]+'</a>');
		}else
			$('#search-win>.ans>.list>list').html('什么也没有')
		$('#search-span').text(this.value);
		"
    />
    <input-before class="bi bi-search"></input-before>
    <div class="tab">
      <a class="now">全部</a><a>应用</a><a>文档</a><a>网页</a> <a>电子邮件</a
      ><a>人员</a><a>设置</a><a>视频</a> <a>文件夹</a><a>音乐</a><a>照片</a>
    </div>
    <div class="ans">
      <div class="list">
        <list> 什么也没有 </list>
      </div>
      <div class="view">
        <p class="bi bi-search" style="text-align: center; font-size: 50px"></p>
        <p style="text-align: center; font-size: 25px">
          搜索 "<span id="search-span"></span>"
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.show();
  },
  methods: {
    show() {
      $("#search-btn").addClass("show");
      hide_startmenu();
      $("#search-win").addClass("show-begin");
      setTimeout(() => {
        $("#search-win").addClass("show");
      }, 0);
      $("#search-input").focus();
    },
  },
};
</script>

<style>
</style>