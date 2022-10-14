<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="dockboxRv"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$router.push({ name: "desktop" });
    // setTimeout(() => {
    //   document.getElementById("loadbacksvg").style.opacity = 1;
    //   document.getElementById("loadbackloading").style.opacity = 1;
    // }, 100);
  },
  components: {},
  methods: {
    back_desktop(evt) {
      console.log(evt);
      // this.$router.push({ name: "desktop" });
    },
  },
};
</script>


 <style>
* {
  padding: 0px;
  margin: 0px;
}
</style>