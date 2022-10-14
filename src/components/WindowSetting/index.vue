<template>
      <div class="window setting">
      <div class="titbar">
        <img src="/icons/setting.png" class="icon" />
        <p>设置</p>
        <div>
          <a class="a wbtg red" onclick="hidewin('setting')"
            ><i class="bi bi-x-lg"></i
          ></a>
          <a class="a wbtg max" onclick="maxwin('setting')"
            ><i class="bi bi-app"></i
          ></a>
          <a class="a wbtg" onclick="minwin('setting')"
            ><i class="bi bi-dash-lg"></i
          ></a>
        </div>
      </div>
      <div class="content" id="win-setting">
        <div class="menu">
          <a class="a user">
            <svg
              viewBox="0,0,257,344"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              overflow="hidden"
            >
              <defs>
                <clipPath id="user-clip1">
                  <rect x="382" y="195" width="257" height="344" />
                </clipPath>
                <linearGradient
                  x1="351.462"
                  y1="233.56"
                  x2="669.496"
                  y2="500.422"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                  id="user-fill3"
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
                  id="user-fill4"
                >
                  <stop offset="0" stop-color="#A964C8" />
                  <stop offset="0.35" stop-color="#A964C8" />
                  <stop offset="0.87" stop-color="#2D8AD5" />
                  <stop offset="1" stop-color="#2D8AD5" />
                </linearGradient>
              </defs>
              <g clip-path="url(#user-clip1)" transform="translate(-382 -195)">
                <path
                  d="M637.755 433.872C642.215 515.221 579.577 537.983 508.011 537.983 436.444 537.983 376.676 507.833 383.513 437.11 383.109 425.234 389.59 414.133 398.634 409.891 413.82 402.768 444.753 402.936 507.484 402.997 570.214 403.058 609.164 402.279 621.521 407.947 633.878 413.614 638.011 424.609 637.755 433.872Z"
                  fill="url(#user-fill3)"
                  fill-rule="evenodd"
                />
                <path
                  d="M422 285C422 235.847 461.623 196 510.5 196 559.377 196 599 235.847 599 285 599 334.153 559.377 374 510.5 374 461.623 374 422 334.153 422 285Z"
                  fill="url(#user-fill4)"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
            <div>
              <p>瓶盖</p>
              <p>tanjingyuan@win12.com</p>
            </div>
          </a>
          <input
            type="text"
            class="input"
            placeholder="查找设置"
            style="padding-left: 30px"
          />
          <input-before class="bi bi-search"></input-before>
          <list>
            <a style="background-color: var(--hover)"
              ><span
                style="
                  background-image: linear-gradient(180deg, #ad6eca, #3b91d8);
                  border-radius: 10px;
                  position: relative;
                  left: -10px;
                  top: 1px;
                  height: 20px;
                  margin-right: -4px;
                "
              >
                &nbsp;</span
              ><img src="/icons/setting/system.png" />系统</a
            >
            <a><img src="/icons/setting/blueteeth.png" />蓝牙和其他设备</a>
            <a><img src="/icons/setting/network.png" />网络和 Internet</a>
            <a><img src="/icons/setting/personal.png" />个性化</a>
            <a><img src="/icons/setting/apps.png" />应用</a>
            <a><img src="/icons/setting/user.png" />账户</a>
            <a><img src="/icons/setting/time.png" />时间和语言</a>
            <a><img src="/icons/setting/game.png" />游戏</a>
            <a><img src="/icons/setting/help.png" />辅助功能</a>
            <a><img src="/icons/setting/safe.png" />隐私和安全性</a>
            <a><img src="/icons/setting/update.png" />Windows 更新</a>
          </list>
        </div>
        <div class="page" style="overflow: auto">
          <p class="title">系统</p>
          <div style="display: flex">
            <p
              class="s-icon"
              style="font-size: 70px; margin: -8px 10px 0px 20px"
            >
              
            </p>
            <div>
              <p
                style="
                  font-size: 28px;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                "
              >
                Desktop-PingGai
              </p>
              <p style="color: #7f7f7f; margin: -8px 0 -5px 0">瓶盖</p>
              <a style="color: #2983cc; text-decoration: underline">重命名</a>
            </div>
          </div>
          <div class="setting-list">
            <a
              ><icon></icon>
              <div>
                <p>显示</p>
                <p>显示器、亮度、夜间模式、显示描述</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>声音</p>
                <p>声音级别、输入、输出、声音设备</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>通知</p>
                <p>来自系统和应用的警报</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>专注助手</p>
                <p>通知、自动规则</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon class="b">&#xF186;</icon>
              <div>
                <p>电源</p>
                <p>睡眠、电池使用情况、节电模式</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>存储</p>
                <p>存储空间、驱动器、配置规则</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>多任务处理</p>
                <p>贴靠窗口、桌面、任务切换</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>激活</p>
                <p>激活状态、订阅、产品密钥</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>疑难解答</p>
                <p>建议的疑难解答、首选项和历史记录</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>恢复</p>
                <p>重置、高级启动、返回</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>投影到此电脑</p>
                <p>权限、配对 PIN、可发现性</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>远程桌面</p>
                <p>远程桌面用户、连接权限</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>剪贴板</p>
                <p>剪贴和复制历史记录、同步、清除</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
            <a
              ><icon></icon>
              <div>
                <p>关于</p>
                <p>设备规格、重命名电脑、Windows 规格</p>
              </div>
              <i class="bi bi-chevron-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>