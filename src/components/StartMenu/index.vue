<template>
  <div id="start-menu">
    <!-- 开始菜单 -->
    <div id="s-m-l">
      <div id="s-m-user">
        <svg
          viewBox="0,0,257,344"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          overflow="hidden"
        >
          <defs>
            <clipPath id="user-clip0">
              <rect x="382" y="195" width="257" height="344" />
            </clipPath>
            <linearGradient
              x1="351.462"
              y1="233.56"
              x2="669.496"
              y2="500.422"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="user-fill1"
            >
              <stop offset="0" stop-color="#A964C8" />
              <stop offset="0.35" stop-color="#A964C8" />
              <stop offset="0.87" stop-color="#2D8AD5" />
              <stop offset="1" stop-color="#2D8AD5" />
            </linearGradient>
            <linearGradient
              x1="351.462"
              y1="233.56"
              x2="669.496"
              y2="500.422"
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="user-fill2"
            >
              <stop offset="0" stop-color="#A964C8" />
              <stop offset="0.35" stop-color="#A964C8" />
              <stop offset="0.87" stop-color="#2D8AD5" />
              <stop offset="1" stop-color="#2D8AD5" />
            </linearGradient>
          </defs>
          <g clip-path="url(#user-clip0)" transform="translate(-382 -195)">
            <path
              d="M637.755 433.872C642.215 515.221 579.577 537.983 508.011 537.983 436.444 537.983 376.676 507.833 383.513 437.11 383.109 425.234 389.59 414.133 398.634 409.891 413.82 402.768 444.753 402.936 507.484 402.997 570.214 403.058 609.164 402.279 621.521 407.947 633.878 413.614 638.011 424.609 637.755 433.872Z"
              fill="url(#user-fill1)"
              fill-rule="evenodd"
            />
            <path
              d="M422 285C422 235.847 461.623 196 510.5 196 559.377 196 599 235.847 599 285 599 334.153 559.377 374 510.5 374 461.623 374 422 334.153 422 285Z"
              fill="url(#user-fill2)"
              fill-rule="evenodd"
            />
          </g>
        </svg>
      </div>
      <p
        style="
          width: 100%;
          text-align: center;
          margin: -50px 0 20px 0;
          font-size: 30px;
        "
      >
        Administartor
      </p>
      <input
        type="text"
        class="input"
        alt="hi"
        placeholder="在这里输入你要搜索的内容"
        onclick="hide_startmenu();
				$('#search-win').addClass('show-begin');
				setTimeout(() => {
					$('#search-win').addClass('show');
				}, 0);
				$('#search-input').focus();"
      />
      <input-before class="bi bi-search"></input-before>
      <list>
        <p class="text">可用</p>
        <a @click="openSetting">
          <img src="/icons/setting.png" />
          <p>设置</p></a
        >
        <a @click="openExplorer">
          <img src="/icons/explorer.png" />
          <p>文件资源管理器</p></a
        >
        <a onclick="showwin('calc');hide_startmenu();">
          <img src="/icons/calc.png" />
          <p>计算器</p></a
        >
        <a onclick="showwin('about');hide_startmenu();">
          <img src="/icons/about.png" />
          <p>关于Win12网页版</p></a
        >
        <p class="text">其它</p>
        <a
          ><img src="/icons/camera.png" />
          <p>相机</p></a
        >
      </list>
    </div>
    <div id="s-m-r">
      <div class="row1">
        <div class="folder">
          <a class="a sm-app"
            ><img src="/icons/folder/docs.png" />
            <p>文档</p></a
          >
          <a class="a sm-app"
            ><img src="/icons/folder/pics.png" />
            <p>图片</p></a
          >
          <a class="a sm-app"
            ><img src="/icons/folder/music.png" />
            <p>音乐</p></a
          >
        </div>
        <div class="tool">
          <p style="font-size: 40px; margin-bottom: -10px" class="time">
            12:00
          </p>
          <p class="date">星期一, 2368年13月34日</p>
          <a class="a btn btn-icon power" onclick="$(this).addClass('show')">
            <span class="bi bi-power"></span>
            <i
              class="bi bi-power"
              onclick="$('#start-menu').removeClass('show');
						setTimeout(() => {window.location='shutdown.html';},200);"
            ></i>
            <i
              class="bi bi-arrow-counterclockwise"
              onclick="$('#start-menu').removeClass('show');
						setTimeout(() => {window.location='reload.html';},200);"
            ></i>
          </a>
          <a
            class="a btn btn-icon big"
            onclick="
					if($('#start-menu').hasClass('max')){
						$('#start-menu>#s-m-r>.row1>.tool>.btn-icon.big').html('<i class=\'bi bi-arrows-angle-expand\'></i>');
						$('#start-menu').removeClass('max');
					}else{
						$('#start-menu>#s-m-r>.row1>.tool>.btn-icon.big').html('<i class=\'bi bi-arrows-angle-contract\'></i>');
						$('#start-menu').addClass('max');
					}
					"
          >
            <i class="bi bi-arrows-angle-expand"></i>
          </a>
        </div>
      </div>
      <div class="pinned">
        <!-- 已固定 卡片 -->
        <div class="title">
          <p>已固定</p>
          <div>
            <a class="a more-btn"
              >所有应用 <i class="bi bi-chevron-right"></i
            ></a>
            <!-- 这个好像没什么必要 -->
          </div>
        </div>
        <div class="apps">
          <a
            class="a sm-app enable"
            onclick="showwin('calc');hide_startmenu();"
          >
            <img src="/icons/calc.png" />
            <p>计算器</p></a
          >
          <a class="a sm-app"
            ><img src="/icons/camera.png" />
            <p>相机</p></a
          >
          <a
            class="a sm-app enable jump"
            href="https://github.com/tjy-gitnub/win12/issues"
            target="_blank"
          >
            <img src="/icons/feedback.png" />
            <p>反馈中心</p></a
          >
          <a class="a sm-app"
            ><img src="/icons/defender.png" />
            <p>Windows 安全中心</p></a
          >
          <a
            class="a sm-app enable"
            onclick="showwin('about');hide_startmenu();"
            ><img src="/icons/about.png" />
            <p>关于Win12网页版</p></a
          >
          <a
            class="a sm-app enable"
            onclick="showwin('explorer');hide_startmenu();"
          >
            <img src="/icons/explorer.png" />
            <p>文件资源管理器</p></a
          >
          <a class="a sm-app"
            ><img src="/icons/notepad.png" />
            <p>记事本</p></a
          >
          <a
            class="a sm-app enable"
            onclick="showwin('setting');hide_startmenu();"
          >
            <img src="/icons/setting.png" />
            <p>设置</p></a
          >
          <a class="a sm-app"
            ><img src="/icons/store.png" />
            <p>Microsoft Store</p></a
          >
          <a class="a sm-app"
            ><img src="/icons/taskmanager.png" />
            <p>任务管理器</p></a
          >
          <a class="a sm-app"
            ><img src="/icons/teams.png" />
            <p>Teams</p></a
          >
          <a class="a sm-app"
            ><img src="/icons/terminal.png" />
            <p>终端</p></a
          >
        </div>
      </div>
      <div class="tuijian">
        <!-- 推荐的项目 卡片 -->
        <div class="title">
          <p>推荐的项目</p>
          <div>
            <a class="a more-btn">更多 <i class="bi bi-chevron-right"></i></a>
          </div>
        </div>
        <div class="apps">
          <a class="a tj-obj"
            ><img src="/icons/files/ppt.png" />
            <div>
              <p>科学地使用瓶盖.pptx</p>
              <p>5 分钟前</p>
            </div></a
          >
          <a class="a tj-obj"
            ><img src="/icons/files/img.png" />
            <div>
              <p>可口可乐瓶盖.jpg</p>
              <p>7 分钟前</p>
            </div></a
          >
          <a class="a tj-obj"
            ><img src="/icons/files/img.png" />
            <div>
              <p>瓶盖构造图.jpg</p>
              <p>16 分钟前</p>
            </div></a
          >
          <a class="a tj-obj"
            ><img src="/icons/files/word.png" />
            <div>
              <p>瓶盖的构造及作用.docx</p>
              <p>24 分钟前</p>
            </div></a
          >
          <a class="a tj-obj"
            ><img src="/icons/files/excel.png" />
            <div>
              <p>可口可乐瓶盖厚度.xlsx</p>
              <p>35 分钟前</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    //显示菜单
    this.show();
  },
  components: {},
  methods: {
    show() {
      $("#start-btn").addClass("show");
      if ($("#search-win").hasClass("show")) {
        $("#search-btn").removeClass("show");
        $("#search-win").removeClass("show");
        setTimeout(() => {
          $("#search-win").removeClass("show-begin");
        }, 200);
      }
      $("#start-menu").addClass("show-begin");
      setTimeout(() => {
        $("#start-menu").addClass("show");
      }, 0); //非常神奇,我也不知道为什么去掉就不行
    },
    openSetting(){
      this.$router.push({name:"setting"})
      // showwin('setting');hide_startmenu();
    },
    openExplorer(){
      this.$router.push({name:"explorer"})
    }
  },
};
</script>

<style>
</style>