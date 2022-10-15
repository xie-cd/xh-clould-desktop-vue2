<template>
  <div class="window calc">
    <div class="titbar">
      <img src="/icons/calc.png" class="icon" />
      <p>计算器</p>
      <div>
        <a class="a wbtg red" onclick="hidewin('calc')"
          ><i class="bi bi-x-lg"></i
        ></a>
        <a class="a wbtg max" style="pointer-events: none; color: #777"
          ><i class="bi bi-app"></i
        ></a>
        <a class="a wbtg" onclick="minwin('calc')"
          ><i class="bi bi-dash-lg"></i
        ></a>
      </div>
    </div>
    <div class="content" id="win-calc">
      <input id="calc-input" value="" />
      <div class="keyb">
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value*=document.getElementById('calc-input').value"
          >𝑥²</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value=Math.sqrt(document.getElementById('calc-input').value)"
          >√𝑥</a
        >
        <a class="a b" onClick="document.getElementById('calc-input').value=''"
          >C</a
        >
        <a
          class="a b u"
          onClick="document.getElementById('calc-input').value+='+'"
          >+</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value+='7'"
          >7</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value+='8'"
          >8</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value+='9'"
          >9</a
        >
        <a
          class="a b u"
          onClick="document.getElementById('calc-input').value+='-'"
          >-</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value+='4'"
          >4</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value+='5'"
          >5</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value+='6'"
          >6</a
        >
        <a
          class="a b u"
          onClick="document.getElementById('calc-input').value+='*'"
          >×</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value+='1'"
          >1</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value+='2'"
          >2</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value+='3'"
          >3</a
        >
        <a
          class="a b u"
          onClick="document.getElementById('calc-input').value+='/'"
          >÷</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value+='.'"
          >.</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value+='0'"
          >0</a
        >
        <a
          class="a b"
          onClick="document.getElementById('calc-input').value=document.getElementById('calc-input').value.substring(0,document.getElementById('calc-input').value.length-1);"
          ><i class="bi bi-backspace"></i
        ></a>
        <a
          class="a b ans u"
          onClick="document.getElementById('calc-input').value=eval(document.getElementById('calc-input').value)"
        >
          =</a
        >
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
      showwin("calc");
      hide_startmenu();
      // 拖拽窗口
      moveWindows();
    },
  },
};
</script>

<style>
</style>