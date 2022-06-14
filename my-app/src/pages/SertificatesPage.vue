<template>
  <main class="sertificates-page">
    <div class="sertificates-page__container _container">
      <div class="sertificates-page__body">
        <h2 class="sertificates-page__title">
          СЕРТИФИКАТЫ<br /><span>КОМПАНИИ</span>
        </h2>
        <div class="sertificates-page__pages-wrapper">
          <div v-if="pages.list == 1" class="sertificates-page__page">
            <div
              :class="{ imageActive: isActive1 }"
              @click="isActive1 = !isActive1"
            >
              <img
                src="@/assets/images/sertificates/01.jpg"
                alt=""
                class="sertificates-page__img"
              />
            </div>
            <div
              :class="{ imageActive: isActive2 }"
              @click="isActive2 = !isActive2"
            >
              <img
                src="@/assets/images/sertificates/02.jpg"
                alt=""
                class="sertificates-page__img"
              />
            </div>
            <div
              :class="{ imageActive: isActive3 }"
              @click="isActive3 = !isActive3"
            >
              <img
                src="@/assets/images/sertificates/03.jpg"
                alt=""
                class="sertificates-page__img"
              />
            </div>
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
      isActive1: false,
      isActive2: false,
      isActive3: false,
    };
  },
  methods: {
    setPage(page) {
      this.pages.list = page;
    },
    hideDialog() {
      if (
        (this.isActive1 == true) |
        (this.isActive2 == true) |
        (this.isActive3 == true)
      ) {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
      }
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
.imageActive {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.5);
  > * {
    margin: auto;
    height: 90%;
  }
}
</style>