<template>
  <main class="projects-page">
    <div class="projects-page__container _container">
      <div class="projects-page__body">
        <h2 class="projects-page__title">НАШИ<br /><span>ПРОЕКТЫ</span></h2>
        <div class="projects-page__pages-wrapper">
          <div v-if="pages.list == 1" class="projects-page__page">
            <div class="projects-page__item project-item">
              <img
                src="@/assets/images/projects/01.jpg"
                alt="project"
                class="project-item__img"
              />
              <div class="project-item__content">
                <div class="project-item__title">Общеобразовательная школа</div>
                <div class="project-item__description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
                <a href="">
                  <dp-button-white>смотреть</dp-button-white>
                </a>
              </div>
            </div>
            <div class="projects-page__item project-item">
              <img
                src="@/assets/images/projects/02.jpg"
                alt="project"
                class="project-item__img"
              />
              <div class="project-item__content">
                <div class="project-item__title">Общеобразовательная школа</div>
                <div class="project-item__description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
                <a href="">
                  <dp-button-white>смотреть</dp-button-white>
                </a>
              </div>
            </div>
            <div class="projects-page__item project-item">
              <img
                src="@/assets/images/projects/03.jpg"
                alt="project"
                class="project-item__img"
              />
              <div class="project-item__content">
                <div class="project-item__title">Общеобразовательная школа</div>
                <div class="project-item__description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
                <a href="">
                  <dp-button-white>смотреть</dp-button-white>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="projects-page__action-wrapper">
          <dp-arrows @pageTransfer="setPage" :pages="pages" />
          <dp-pages :pages="pages" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import DpButtonWhite from "../components/UI/DpButtonWhite.vue";
import DpPages from "../components/items/DpPages.vue";
import DpArrows from "../components/UI/DpArrows.vue";
export default {
  name: "ProjectsPage",
  components: {
    DpButtonWhite,
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
.projects-page {
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

  &__pages-wrapper {
  }

  &__page {
    > *:not(:last-child) {
      margin-bottom: 60px;
    }
  }

  &__item {
    display: flex;
  }

  &__action-wrapper {
    display: flex;
    > *:not(:last-child) {
      margin-right: 25px;
    }
  }
}
.project-item {
  &__img {
  }

  &__content {
    padding: 30px;
  }

  &__title {
    font-weight: 300;
    font-size: 40px;
    line-height: 125%;

    color: #bdbdbd;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__description {
    font-weight: 300;
    font-size: 16px;
    line-height: 156%;

    color: #000000;

    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
}
</style>