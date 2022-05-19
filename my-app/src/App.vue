<template>
  <d-pheader />
</template>

<script>
import DPheader from "./components/DPHeader.vue";

export default {
  name: "App",
  components: { DPheader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gothic+A1&family=Open+Sans:wght@400;600&display=swap");
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
  font-weight: 400;
}

template {
}
</style>
