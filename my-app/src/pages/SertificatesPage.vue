<template>
  <main class="sertificates-page">
    <div class="sertificates-page__container _container">
      <div class="sertificates-page__body">
        <h2 class="sertificates-page__title">
          СЕРТИФИКАТЫ<br /><span>КОМПАНИИ</span>
        </h2>
        <div class="sertificates-page__pages-wrapper">
          <div v-if="pages.list == 1" class="sertificates-page__page">
            <img
              src="@/assets/images/sertificates/01.jpg"
              alt=""
              class="sertificates-page__img"
            />
            <img
              src="@/assets/images/sertificates/02.jpg"
              alt=""
              class="sertificates-page__img"
            />
            <img
              src="@/assets/images/sertificates/03.jpg"
              alt=""
              class="sertificates-page__img"
            />
          </div>
        </div>
        <div class="sertificates-page__action-wrapper">
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
  name: "SertificatesPage",
  components: {
    DpPages,
    DpArrows,
  },
  data() {
    return {
      pages: {
        list: 1,
        totalPages: 5,
      },
    };
  },
  methods: {
    setPage(page) {
      this.pages.list = page;
    },
  },
};
</script>

<style lang="scss" scoped>
.sertificates-page {
  padding: 65px 0 120px 0;
  &__container {
  }

  &__body {
    display: flex;
    flex-direction: column;
    > *:not(:last-child) {
      margin-bottom: 45px;
    }
  }

  &__title {
    font-weight: 300;
    font-size: 64px;
    line-height: 100%;

    color: #bdbdbd;
    text-transform: uppercase;

    & span {
      font-weight: 700;

      color: #333333;
    }
  }

  &__pages-wrapper {
  }

  &__page {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__img {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  &__action-wrapper {
    display: flex;
    align-self: flex-end;
    margin-right: 21px;
    > *:not(:last-child) {
      margin-right: 25px;
    }
  }
}
</style>