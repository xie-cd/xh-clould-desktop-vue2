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
    <router-view></router-view>
    <router-view name="dockboxRv"></router-view>
    <!-- 开始菜单 -->
    <!-- <StartMenu /> -->
    <!-- 搜索 -->
    <!-- <SearchWin /> -->
    <div id="datebox">
      <div class="tit">12:00</div>
      <div>hh</div>
    </div>
    <!-- 任务栏 -->
    <div class="current-action"></div>
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
 
  },
  components: {},
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