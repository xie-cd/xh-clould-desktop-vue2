<template>
  <div id="app">
    <Desktop />
  </div>
</template>

<script>
import Desktop from "./components/Desktop.vue";

export default {
  name: "App",
  mounted() {
    setTimeout(() => {
      document.getElementById("loadbacksvg").style.opacity = 1;
      document.getElementById("loadbackloading").style.opacity = 1;
    }, 100);
  },
  components: {
    Desktop,
  },
};
</script>


 <style>
* {
  padding: 0px;
  margin: 0px;
}

</style>