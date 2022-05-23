<template>
  <dp-header />
  <dp-footer />
</template>

<script>
import DpFooter from "@/components/DpFooter.vue";
import DpHeader from "@/components/DpHeader.vue";

export default {
  name: "App",
  components: {
    DpFooter,
    DpHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gothic+A1&family=Open+Sans:wght@400;600&display=swap");
@import "@/assets/styles/css/nullstyle.css";
@font-face {
  font-family: "TTHoves";
  src: url("@/assets/fonts/TTHoves/TTHoves-Bold.ttf");
  src: url("@/assets/fonts/TTHoves/TTHoves-DemiBold.ttf");
  src: url("@/assets/fonts/TTHoves/TTHoves-Light.ttf");
  src: url("@/assets/fonts/TTHoves/TTHoves-Medium.ttf");
  src: url("@/assets/fonts/TTHoves/TTHoves-Regular.ttf");
}
@font-face {
  font-family: "SFPro";
  src: url("@/assets/fonts/SFPro/SFProDisplay-Black.ttf");
}

#app {
  font-family: TTHoves;
  color: #333333;
  font-size: 12px;
  line-height: 100%;
  font-weight: 400;
}

._container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: content-box;
}

._ibg {
  position: relative;
}
._ibg img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /*object-fit: cover;*/
}
</style>
