<template>
  <main class="gallery-page">
    <div class="gallery-page__container _container">
      <div class="gallery-page__body">
        <h2 class="gallery-page__title">
          ГАЛЕРЕЯ<br /><span>ФОТОГРАФИЙ</span>
        </h2>
        <div class="gallery-page__img-wrapper">
          <div v-if="pages.list == 1" class="gallery-page__page">
            <dp-gallery :galleryImg="'01.jpg'"
              >Описание или пояснение.</dp-gallery
            >
            <dp-gallery :galleryImg="'02.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'03.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'04.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'05.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'06.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'07.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'08.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'09.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'10.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
          </div>
          <div v-if="pages.list == 2" class="gallery-page__page">
            <dp-gallery :galleryImg="'10.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'09.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'08.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'07.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'06.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'05.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'04.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'03.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'02.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
            <dp-gallery :galleryImg="'01.jpg'"
              >Описание или пояснение к изображению.</dp-gallery
            >
          </div>
        </div>
        <div class="gallery-page__action-wrapper">
          <dp-arrows @pageTransfer="setPage" :pages="pages" />
          <dp-pages :pages="pages" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import DpGallery from "../components/items/DpGallery.vue";
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
  components: { DpPages, DpArrows, DpGallery },
  methods: {
    setPage(page) {
      this.pages.list = page;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-page {
  padding: 65px 0 120px 0;
  &__container {
  }

  &__body {
    > *:not(:last-child) {
      margin-bottom: 60px;
    }
  }

  &__title {
    font-weight: 300;
    font-size: 64px;
    line-height: 100%;

    color: #bdbdbd;

    & span {
      font-weight: 700;

      color: #333333;
    }
  }

  &__img-wrapper {
  }

  &__page {
    display: flex;
    align-items: center;
    margin: -15px -15px;
    flex-wrap: wrap;
  }

  &__action-wrapper {
    display: flex;
    > *:not(:last-child) {
      margin-right: 25px;
    }
  }
}
</style>