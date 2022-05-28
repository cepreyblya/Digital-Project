<template>
  <div class="gallery-item" @mouseover="show = true" @mouseleave="show = false">
    <img
      :src="require('@/assets/images/gallery/' + galleryImg)"
      alt="gallery"
      class="gallery-item__img"
    />
    <transition>
      <div v-show="show" class="gallery-item__description"><slot></slot></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    galleryImg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-item {
  margin: 15px 15px;
  position: relative;

  & &__img {
  }

  &__description {
    padding: 20px;
    position: absolute;
    background: white;
    height: 50%;
    top: 49.3%;
  }
}
</style>