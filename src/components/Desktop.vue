<template>
  <div>
    <!-- <div
      id="loadback"
      style="
        background-color: #000;
        width: 100%;
        height: 100%;
        z-index: 105;
        position: absolute;
        opacity: 1;
        transition: 200ms;
        cursor: none;
      "
    >
      <svg
        id="loadbacksvg"
        viewbox="0,0,306,305"
        style="
          transition: 1s;
          opacity: 0;
          position: absolute;
          left: calc(50% - 125px);
          top: 20%;
        "
        width="250"
        height="250"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <clipPath id="clip0">
            <rect x="897" y="208" width="306" height="305" />
          </clipPath>
          <linearGradient
            x1="885.371"
            y1="221.859"
            x2="1214.63"
            y2="498.141"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
            id="fill1"
          >
            <stop offset="0" stop-color="#A964C8" />
            <stop offset="0.18" stop-color="#A964C8" />
            <stop offset="0.36" stop-color="#A266E4" />
            <stop offset="0.73" stop-color="#346ED8" />
            <stop offset="0.91" stop-color="#2D8AD5" />
            <stop offset="1" stop-color="#2D8AD5" />
          </linearGradient>
          <linearGradient
            x1="317.629"
            y1="13.8595"
            x2="-11.6295"
            y2="290.141"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
            id="fill2"
          >
            <stop offset="0" stop-color="#A964C8" />
            <stop offset="0.18" stop-color="#A964C8" />
            <stop offset="0.36" stop-color="#A266E4" />
            <stop offset="0.73" stop-color="#346ED8" />
            <stop offset="0.91" stop-color="#2D8AD5" />
            <stop offset="1" stop-color="#2D8AD5" />
          </linearGradient>
          <linearGradient
            x1="885.371"
            y1="221.859"
            x2="1214.63"
            y2="498.141"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
            id="fill3"
          >
            <stop offset="0" stop-color="#A964C8" />
            <stop offset="0.18" stop-color="#A964C8" />
            <stop offset="0.36" stop-color="#A266E4" />
            <stop offset="0.73" stop-color="#346ED8" />
            <stop offset="0.91" stop-color="#2D8AD5" />
            <stop offset="1" stop-color="#2D8AD5" />
          </linearGradient>
          <linearGradient
            x1="-11.6295"
            y1="290.141"
            x2="317.629"
            y2="13.8595"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
            id="fill4"
          >
            <stop offset="0" stop-color="#A964C8" />
            <stop offset="0.18" stop-color="#A964C8" />
            <stop offset="0.36" stop-color="#A266E4" />
            <stop offset="0.73" stop-color="#346ED8" />
            <stop offset="0.91" stop-color="#2D8AD5" />
            <stop offset="1" stop-color="#2D8AD5" />
          </linearGradient>
        </defs>
        <g clip-path="url(#clip0)" transform="translate(-897 -208)">
          <path
            d="M936.813 208 1035.2 208 1035.2 208 1036 340.407C1011.65 331.352 986.507 325.493 963.762 325.226 941.508 325.759 919.254 339.075 897 346L897 247.755C897 225.799 914.825 208 936.813 208Z"
            fill="url(#fill1)"
            fill-rule="evenodd"
          />
          <path
            d="M40.0431 0 139 0 139 0 139 140.549C115.82 150.681 92.6407 159.212 69.4611 158.946 45.5026 160.012 23.1537 145.082 0 138.15L0 39.7981C0 17.8182 17.9278 0 40.0431 0Z"
            fill="url(#fill2)"
            fill-rule="evenodd"
            transform="matrix(-1 0 0 1 1203 208)"
          />
          <path
            d="M1163.19 512 1064.8 512 1064.8 512 1064 379.593C1088.35 388.648 1113.49 394.507 1136.24 394.774 1158.49 394.241 1180.75 380.925 1203 374L1203 472.245C1203 494.201 1185.18 512 1163.19 512Z"
            fill="url(#fill3)"
            fill-rule="evenodd"
          />
          <path
            d="M39.755 0 138 0 138 0 138 140.549C114.987 150.681 91.9742 159.212 68.9614 158.946 45.1752 160.012 22.9872 145.082 0 138.15L0 39.7981C0 17.8182 17.7989 0 39.755 0Z"
            fill="url(#fill4)"
            fill-rule="evenodd"
            transform="matrix(1 -1.22465e-16 -1.22465e-16 -1 897 512)"
          />
        </g>
      </svg>
      <loading id="loadbackloading" style="transition: 1s; opacity: 0">
        <svg
          style="position: absolute; left: calc(50% - 25px); top: 80%"
          width="50px"
          height="50px"
          viewBox="0 0 16 16"
        >
          <circle cx="8px" cy="8px" r="7px"></circle>
          <circle cx="8px" cy="8px" r="6px"></circle>
        </svg>
      </loading>
    </div> -->
    <!-- 预加载设置图标 -->
    <p style="font-family: SettingsIcons">&nbsp;</p>
    <!-- 开始菜单 -->
    <!-- <StartMenu /> -->
    <!-- 搜索 -->
    <!-- <SearchWin /> -->
    <div id="datebox">
      <div class="tit">12:00</div>
      <div>hh</div>
    </div>
    <!-- 任务栏 -->
    <div id="dock-box">
      <!-- Dock(任务)栏 -->
      <div class="dock">
        <a class="dock-btn" id="start-btn" @click="startBtnClick">
          <!-- 开始按钮 -->
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="26"
            height="26"
            viewBox="0,0,306,305"
          >
            <defs>
              <clipPath id="clip0">
                <rect x="897" y="208" width="306" height="305"></rect>
              </clipPath>
              <linearGradient
                x1="885.371"
                y1="221.859"
                x2="1214.63"
                y2="498.141"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
                id="sf1"
              >
                <stop offset="0" stop-color="#A964C8"></stop>
                <stop offset="0.18" stop-color="#A964C8"></stop>
                <stop offset="0.36" stop-color="#A266E4"></stop>
                <stop offset="0.73" stop-color="#346ED8"></stop>
                <stop offset="0.91" stop-color="#2D8AD5"></stop>
                <stop offset="1" stop-color="#2D8AD5"></stop>
              </linearGradient>
              <linearGradient
                x1="317.629"
                y1="13.8595"
                x2="-11.6295"
                y2="290.141"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
                id="sf2"
              >
                <stop offset="0" stop-color="#A964C8"></stop>
                <stop offset="0.18" stop-color="#A964C8"></stop>
                <stop offset="0.36" stop-color="#A266E4"></stop>
                <stop offset="0.73" stop-color="#346ED8"></stop>
                <stop offset="0.91" stop-color="#2D8AD5"></stop>
                <stop offset="1" stop-color="#2D8AD5"></stop>
              </linearGradient>
              <linearGradient
                x1="885.371"
                y1="221.859"
                x2="1214.63"
                y2="498.141"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
                id="sf3"
              >
                <stop offset="0" stop-color="#A964C8"></stop>
                <stop offset="0.18" stop-color="#A964C8"></stop>
                <stop offset="0.36" stop-color="#A266E4"></stop>
                <stop offset="0.73" stop-color="#346ED8"></stop>
                <stop offset="0.91" stop-color="#2D8AD5"></stop>
                <stop offset="1" stop-color="#2D8AD5"></stop>
              </linearGradient>
              <linearGradient
                x1="-11.6295"
                y1="290.141"
                x2="317.629"
                y2="13.8595"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
                id="sf4"
              >
                <stop offset="0" stop-color="#A964C8"></stop>
                <stop offset="0.18" stop-color="#A964C8"></stop>
                <stop offset="0.36" stop-color="#A266E4"></stop>
                <stop offset="0.73" stop-color="#346ED8"></stop>
                <stop offset="0.91" stop-color="#2D8AD5"></stop>
                <stop offset="1" stop-color="#2D8AD5"></stop>
              </linearGradient>
            </defs>
            <g clip-path="url(#clip0)" transform="translate(-897 -208)">
              <path
                d="M936.813 208 1035.2 208 1035.2 208 1036 340.407C1011.65 331.352 986.507 325.493 963.762 325.226 941.508 325.759 919.254 339.075 897 346L897 247.755C897 225.799 914.825 208 936.813 208Z"
                fill="url(#sf1)"
                fill-rule="evenodd"
              ></path>
              <path
                d="M40.0431 0 139 0 139 0 139 140.549C115.82 150.681 92.6407 159.212 69.4611 158.946 45.5026 160.012 23.1537 145.082 0 138.15L0 39.7981C0 17.8182 17.9278 0 40.0431 0Z"
                fill="url(#sf2)"
                fill-rule="evenodd"
                transform="matrix(-1 0 0 1 1203 208)"
              ></path>
              <path
                d="M1163.19 512 1064.8 512 1064.8 512 1064 379.593C1088.35 388.648 1113.49 394.507 1136.24 394.774 1158.49 394.241 1180.75 380.925 1203 374L1203 472.245C1203 494.201 1185.18 512 1163.19 512Z"
                fill="url(#sf3)"
                fill-rule="evenodd"
              ></path>
              <path
                d="M39.755 0 138 0 138 0 138 140.549C114.987 150.681 91.9742 159.212 68.9614 158.946 45.1752 160.012 22.9872 145.082 0 138.15L0 39.7981C0 17.8182 17.7989 0 39.755 0Z"
                fill="url(#sf4)"
                fill-rule="evenodd"
                transform="matrix(1 -1.22465e-16 -1.22465e-16 -1 897 512)"
              ></path>
            </g>
          </svg>
        </a>

        <a
          class="dock-btn"
          id="search-btn"
          onclick="
			if($('#search-win').hasClass('show')){
				$('#search-btn').removeClass('show');
				$('#search-win').removeClass('show');
				setTimeout(() => {
					$('#search-win').removeClass('show-begin');
				}, 200);
			}
			else{
				$('#search-btn').addClass('show');
				hide_startmenu();
				$('#search-win').addClass('show-begin');
				setTimeout(() => {
					$('#search-win').addClass('show');
				}, 0);
				$('#search-input').focus();
			}"
        >
          <svg
            width="26"
            height="26"
            viewBox="0,0,313,313"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            overflow="hidden"
          >
            <defs>
              <clipPath id="search-clip1">
                <rect x="288" y="257" width="313" height="313" />
              </clipPath>
              <linearGradient
                x1="338.45"
                y1="228.45"
                x2="551.55"
                y2="597.55"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
                id="search-fill1"
              >
                <stop offset="0" stop-color="#2983CC" />
                <stop offset="0.09" stop-color="#2983CC" />
                <stop offset="0.34" stop-color="#A964C8" />
                <stop offset="0.77" />
                <stop offset="1" />
              </linearGradient>
            </defs>
            <g clip-path="url(#search-clip1)" transform="translate(-288 -257)">
              <path
                d="M517.98 458.696C559.356 402.228 547.127 322.905 490.667 281.524 434.207 240.143 354.896 252.373 313.521 308.841 272.145 365.309 284.374 444.631 340.833 486.012 385.458 518.719 446.139 518.698 490.74 485.959L490.721 485.959C491.306 486.739 491.93 487.48 492.632 488.201L567.702 563.282C575.316 570.902 587.664 570.907 595.283 563.292 602.902 555.677 602.906 543.327 595.293 535.707L520.223 460.626C519.526 459.921 518.776 459.269 517.98 458.676ZM523.011 383.732C523.011 442.969 474.997 490.99 415.768 490.99 356.539 490.99 308.525 442.969 308.525 383.732 308.525 324.495 356.539 276.474 415.768 276.474 474.997 276.474 523.011 324.495 523.011 383.732Z"
                fill="url(#search-fill1)"
                fill-rule="evenodd"
              />
            </g>
          </svg>
        </a>
      </div>
      <div class="dock" id="taskbar" style="display: none" count="0"></div>
      <div
        class="dock about"
        onclick="if($(this).hasClass('show')){$(this).removeClass('show')}else{$(this).addClass('show')}"
      >
        Windows 12 网页版 谭景元原创
        <p>
          Windows 12 网页版是一个开放源项目,<br />
          希望让用户在网络上预先体验 Windows 12,<br />
          内容可能与 Windows 12 正式版本不一致。<br />
          使用标准网络技术,例如 Html,CSS 和 JS<br />
          此项目绝不附属于微软,且不应与微软操作系统或产品混淆,<br />
          这也不是 Windows365 cloud PC<br />
          本项目中微软、Windows和其他示范产品是微软公司的商标
        </p>
      </div>
      <div
        class="a dock date"
        onclick="/*if($('#datebox').hasClass('show')){
			$('#datebox').removeClass('show');
			setTimeout(() => {
				$('#datebox').removeClass('show-begin');
			}, 200);
		}
		else{
			$('#datebox').css('left',$(this).position().left-125);
			$('#datebox').addClass('show-begin');
			setTimeout(() => {
				$('#datebox').addClass('show');
			}, 0);
		}*/"
      >
        <p class="time">12:34:56</p>
        <p class="date">2022/10/01</p>
      </div>
      <div
        class="a dock theme"
        onclick="if($('.dock.theme>.bi').hasClass('bi-moon-fill')){
			$('.dock.theme>.bi').removeClass('bi-moon-fill');
			$('.dock.theme>.bi').addClass('bi-brightness-high-fill');
			$(':root').removeClass('dark');
		}else{
			$('.dock.theme>.bi').removeClass('bi-brightness-high-fill');
			$('.dock.theme>.bi').addClass('bi-moon-fill');
			$(':root').addClass('dark');
		}"
      >
        <i class="bi bi-brightness-high-fill"></i>
      </div>
    </div>
    <router-view></router-view>

    <div id="window-fill"></div>
    <!-- 设置 -->
    <!-- <WindowSetting /> -->
    <!-- 资源管理器 -->
    <!-- <WindowExplorer />
    <Calc />
    <About /> -->
    <div class="msg update">
      <div class="main">
        <p class="tit">更新提示</p>
        <p class="cont"></p>
      </div>
      <div class="a hide" onclick="$('.msg').removeClass('show')">
        <i class="bi bi-arrow-right-short"></i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    // setTimeout(() => {
    //   document.getElementById("loadbacksvg").style.opacity = 1;
    //   document.getElementById("loadbackloading").style.opacity = 1;
    // }, 100);
  },
  methods: {

    startBtnClick() {
      this.$router.push({ name: "startMenu" });
      if ($("#start-menu").hasClass("show")) {
        hide_startmenu();
      } else {
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
      }
    },
  },
  components: {
  },
};
</script>

<style>
#loadback.hide {
  opacity: 0;
}
loading > svg > circle:first-child {
  stroke: #fff;
  fill: none;
  stroke-width: 2px;
  stroke-linecap: round;
  animation: spin-infinite 1.8s linear 0s infinite normal none running;
  transform-origin: 50% 50%;
  transition: all 0.2s ease-in-out 0s;
}
loading > svg > circle:last-child {
  fill: #00000000;
}
loading > svg {
  background-color: #00000000;
  border-radius: 50%;
}
@keyframes spin-infinite {
  0% {
    stroke-dasharray: 0.01px, 43.97px;
    transform: rotate(0deg);
  }
  50% {
    stroke-dasharray: 21.99px, 21.99px;
    transform: rotate(450deg);
  }
  to {
    stroke-dasharray: 0.01px, 43.97px;
    transform: rotate(3turn);
  }
}
</style>