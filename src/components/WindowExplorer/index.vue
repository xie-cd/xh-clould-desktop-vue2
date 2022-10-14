<template>
  <div class="window explorer">
    <div class="titbar">
      <img src="/icons/explorer.png" class="icon" />
      <p>文件资源管理器</p>
      <div>
        <a class="a wbtg red" onclick="hidewin('explorer')"
          ><i class="bi bi-x-lg"></i
        ></a>
        <a class="a wbtg max" onclick="maxwin('explorer')"
          ><i class="bi bi-app"></i
        ></a>
        <a class="a wbtg" onclick="minwin('explorer')"
          ><i class="bi bi-dash-lg"></i
        ></a>
      </div>
    </div>
    <div class="content" id="win-explorer">
      <div class="menu">
        <div class="card pinned">
          <p class="title"><span style="font: 15px">📌</span> 已固定</p>
          <list>
            <a><img src="/icons/explorer/qa.png" />快速访问</a>
            <a><img src="/icons/explorer/od.png" />OneDrive</a>
            <a class="check"
              ><span
                style="
                  background: linear-gradient(180deg, #ad6eca, #3b91d8);
                  width: 4px;
                  height: 19px;
                  border-radius: 10px;
                  margin-left: -12px;
                  margin-right: 8px;
                  margin-top: 1px;
                "
              ></span>
              <img src="/icons/explorer/thispc.png" />此电脑</a
            >
            <a><img src="/icons/explorer/rb.png" />回收站</a>
          </list>
        </div>
        <div class="card tags">
          <p class="title"><span style="font: 15px">🏷</span> 标签</p>
          <list>
            <a><span style="background-color: red"></span>红色</a>
            <a><span style="background-color: #3981d9"></span>蓝色</a>
            <a><span style="background-color: yellow"></span>黄色</a>
            <a><span style="background-color: green"></span>绿色</a>
            <a><span style="background-color: #fc9816"></span>橙色</a>
            <a><span style="background-color: purple"></span>紫色</a>
            <a><span style="background-color: #ffcad4"></span>粉色</a>
          </list>
        </div>
      </div>
      <div class="main">
        <div class="tool">
          <a class="a b t"><img src="/icons/explorer/tool-new.png" />新建</a>
          <div class="hr"></div>
          <a class="a b"><img src="/icons/explorer/tool-cut.png" /></a>
          <a class="a b"><img src="/icons/explorer/tool-copy.png" /></a>
          <a class="a b"><img src="/icons/explorer/tool-paste.png" /></a>
          <a class="a b"><img src="/icons/explorer/tool-rename.png" /></a>
          <div class="hr"></div>
          <a class="a b t"
            ><img src="/icons/explorer/tool-sort.png" />排序方式</a
          >
          <a class="a b t"><img src="/icons/explorer/tool-view.png" />布局</a>
        </div>
        <div class="content">
          <div class="tool">
            <a class="a btn btn-icon"><i class="bi bi-arrow-left"></i></a>
            <a class="a btn btn-icon"><i class="bi bi-arrow-right"></i></a>
            <a class="a btn btn-icon"><i class="bi bi-arrow-up"></i></a>
            <p class="tit"><img src="/icons/explorer/thispc.png" />此电脑</p>
            <div class="search">
              <input
                type="text"
                class="input"
                placeholder="在这里输入你要搜索的内容"
              />
              <input-before class="bi bi-search"></input-before>
            </div>
          </div>
          <p class="title">此电脑</p>
          <p class="class">
            <img src="/icons/explorer/disk.png" /> 设备和驱动器
          </p>
          <div class="group">
            <a class="a item">
              <img src="/icons/explorer/diskwin.png" />
              <div>
                <p class="name">本地磁盘 (C:)</p>
                <div class="bar">
                  <div class="content" style="width: 88%"></div>
                </div>
                <p class="info">32.6 GB 可用, 共 143 GB</p>
              </div>
            </a>
            <a class="a item">
              <img src="/icons/explorer/disk.png" />
              <div>
                <p class="name">本地磁盘 (D:)</p>
                <div class="bar">
                  <div class="content" style="width: 15%"></div>
                </div>
                <p class="info">185.3 GB 可用, 共 216 GB</p>
              </div>
            </a>
          </div>
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
      showwin("explorer");
      hide_startmenu();
    },
  },
};
</script>

<style>
</style>