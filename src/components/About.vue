<template>
  <div class="window about">
    <div class="titbar">
      <img src="/icons/about.png" class="icon" />
      <p>关于 Windows12 网页版</p>
      <div>
        <a class="a wbtg red" onclick="hidewin('about')"
          ><i class="bi bi-x-lg"></i
        ></a>
        <a class="a wbtg max" onclick="maxwin('about')"
          ><i class="bi bi-app"></i
        ></a>
        <a class="a wbtg" onclick="minwin('about')"
          ><i class="bi bi-dash-lg"></i
        ></a>
      </div>
    </div>
    <div class="content" id="win-about">
      <div class="menu">
        <list>
          <a
            onclick="$('#win-about>.about').show(200);$('#win-about>.update').hide();"
            ><img
              src="/icons/about/info.svg"
              height="17px"
              width="19px"
            />简介</a
          >
          <a
            onclick="$('#win-about>.update').show(200);$('#win-about>.about').hide();"
            ><img
              src="/icons/about/update.svg"
              height="20px"
              width="18px"
            />更新记录</a
          >
        </list>
      </div>
      <div class="cnt about">
        <h1 class="tit"><span></span>Windows 12 网页版</h1>
        <div style="margin-left: 20px">
          <h2 class="tit"><span></span>简介</h2>
          <p>
            &emsp;&emsp;Windows 12 网页版是一个开源项目, 由谭景元原创,
            使用标准网络技术,例如 Html、CSS 和 Javascript,
            希望让用户在网络上预先体验 Windows 12。
          </p>
          <p>
            &emsp;&emsp;因为这只是概念版，所以内容可能与 Windows 12
            正式版本不一致。
          </p>
          <p>
            &emsp;&emsp;由于这是一个开源项目，你可以在任何媒介以任何形式复制、发行本作品。
            你还可以对该项目进行修改、转换或以本作品为基础进行创作。
            但您必须给出适当的署名，您必须提供创作者姓名、作品链接，同时标明是否对此作了修改。您可以用任何合理的方式来署名，但是不得以任何方式暗示许可方认可您或您的使用。
          </p>
          <p>
            &emsp;&emsp;此项目绝不附属于微软,且不应与微软操作系统或产品混淆,
            这也不是 Windows365 cloud PC
          </p>
          <p>&emsp;&emsp;本项目中微软、Windows和其他示范产品是微软公司的商标</p>
        </div>
        <div style="margin-left: 20px">
          <h2 class="tit"><span></span>其它</h2>
          <p>
            &emsp;&emsp;此项目已发布至 Github,
            <a href="https://github.com/tjy-gitnub/win12" class="jump"
              >点击此处查看</a
            >
          </p>
          <p>
            &emsp;&emsp;若您对于该项目有任何意见或建议，请在 Github 上<a
              href="https://github.com/tjy-gitnub/win12/issues"
              class="jump"
              >提交 issues</a
            >, 您的问题会被尽可能快地解决
          </p>
        </div>
      </div>
      <div class="cnt update" style="display: none">
        <h1 class="tit"><span></span>更新记录</h1>
        <div style="margin-left: 20px">
          <details>
            <summary>
              <span>v2.0.0</span>
              深色主题、更新提示、新点击效果、拖至顶部最大化
            </summary>
            <p>
              &emsp;&emsp;-支持深色模式<br />
              &emsp;&emsp;-在每次更新后显示更新提示<br />
              &emsp;&emsp;-去除原 win10 主题点击、悬停动画<br />
              &emsp;&emsp;-新的列表项点击动画<br />
              &emsp;&emsp;-将窗口拖至顶部最大化<br />
              &emsp;&emsp;-优化开始菜单固定项点击效果<br />
            </p>
          </details>

          <details>
            <summary><span>v1.1.4</span> 动画优化、显示时间</summary>
            <p>
              &emsp;&emsp;-优化窗口最大最小化动、开始、搜索等动画<br />
              &emsp;&emsp;-计算器外观优化<br />
              &emsp;&emsp;-"准备"深色主题😏<br />
              &emsp;&emsp;-在开始菜单中显示当前的时间<br />
              &emsp;&emsp;-一些细节优化<br />
            </p>
          </details>

          <details>
            <summary><span>v1.1.3</span> 列表 悬停、点击 效果</summary>
            <p>
              &emsp;&emsp;-在开始菜单、设置、关于、文件资源管理器、计算器中使用新的列表悬停、点击效果<br />
              &emsp;&emsp;-在任务栏、关于中使用主题色(蓝紫渐变)<br />
              &emsp;&emsp;-任务栏应用圆角优化<br />
              &emsp;&emsp;-增加任务栏右下角托盘(未完全实现)<br />
              &emsp;&emsp;-使启动时不显示鼠标，更加逼真<br />
            </p>
          </details>

          <details>
            <summary><span>v1.1.2</span> 外观优化</summary>
            <p>
              &emsp;&emsp;-透明效果改善<br />
              &emsp;&emsp;-在所有应用中使用主题色(蓝紫渐变)<br />
              &emsp;&emsp;-Dock(任务)栏圆角优化<br />
              &emsp;&emsp;-在设置中使用新的头像<br />
              &emsp;&emsp;-加速窗口动画，更加贴近原生<br />
            </p>
          </details>

          <details>
            <summary><span>v1.1.1</span> 外观优化，修复了一些 Bug</summary>
            <p>
              &emsp;&emsp;-外观优化，阴影增加<br />
              &emsp;&emsp;-修复了开始、搜索菜单关闭时高度会闪一下的问题<br />
              &emsp;&emsp;-开始菜单用户头像美化<br />
              &emsp;&emsp;-修复了"关于"应用切换标签时文字改变导致动画流畅的问题<br />
              &emsp;&emsp;-使页面不能滚动，更加逼真<br />
            </p>
          </details>

          <details>
            <summary><span>v1.1.0</span> 增加最小化功能,图标美化</summary>
            <p>
              &emsp;&emsp;-新增最小化窗口功能<br />
              &emsp;&emsp;-图标部分美化<br />
              &emsp;&emsp;-开始、搜索按钮点击动画美化<br />
              &emsp;&emsp;-修复计算器 "𝑥²" 键无效的问题<br />
              &emsp;&emsp;-修复窗口打开并最大化后最小化不正常的问题<br />
              &emsp;&emsp;-修复多次打开应用任务栏显示错误的问题<br />
              &emsp;&emsp;-简化js关于拖动窗口的代码
            </p>
          </details>
          <details>
            <summary><span>v1.0.1</span> Bug和一些错别字</summary>
            <p>&emsp;&emsp;上传了才发现有 Bug 😅</p>
          </details>
          <details>
            <summary>
              <span>v1.0.0</span>
              计算器功能增加，优化体验与开始菜单，新增关于应用
            </summary>
            <p>
              &emsp;&emsp;-使开始菜单和搜索窗口在高度不足的页面中更好地显示，页面高度过小也可能显示不全，还是建议使用电脑<br />
              &emsp;&emsp;-计算器增加平方与开方功能<br />
              &emsp;&emsp;-开始菜单中不可用应用用灰色显示，更加简洁方便<br />
              &emsp;&emsp;-新增 "关于Win12网页版"
              应用，包含关于本项目的说明和历史更新记录<br />
              &emsp;&emsp;-优化开始菜单和搜索窗口的显示动画<br />
              &emsp;&emsp;-优化电脑端按钮的体验
            </p>
          </details>
        </div>
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
      showwin("about");
      hide_startmenu();
    },
  },
};
</script>

<style>
</style>