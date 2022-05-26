<template>
  <main class="gallery-page">
    <div class="gallery-page__container _container">
      <div class="gallery-page__body">
        <h2 class="gallery-page__title">ГАЛЕРЕЯ<span>ФОТОГРАФИЙ</span></h2>
        <div class="gallery-page__img-wrapper"></div>
        <div class="gallery-page__action-wrapper">
          <dp-arrows @pageTransfer="setPage" :pages="pages" />
          <dp-pages :pages="pages" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import DpPages from "../components/items/DpPages.vue";
import DpArrows from "../components/UI/DpArrows.vue";
export default {
  data() {
    return {
      pages: {
        list: 1,
        totalPages: 5,
      },
    };
  },
  name: "GalleryPage",
  components: { DpPages, DpArrows },
  methods: {
    setPage(page) {
      this.pages.list = page;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>