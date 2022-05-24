<template>
  <main class="main-page">
    <div class="main-page__project project">
      <div class="project__container _container">
        <div class="project__content">
          <h1 class="project__name">PROJECT<br /><span>NURTOWN</span></h1>
          <div class="project__arrows">
            <arrow-left />
            <arrow-right />
          </div>
          <div class="project__pages-wrapper">
            <div class="project__page">01</div>
            <div class="project__page-break">
              <img src="@/assets/images/UI/line.svg" alt="" />
            </div>
            <div class="project__page">02</div>
          </div>
        </div>
        <div class="project__media">
          <img
            src="@/assets/images/main/01.jpg"
            alt="project"
            class="project__img"
          />
          <a href="https://www.youtube.com/">
            <dp-button-white class="project__button">взглянуть</dp-button-white>
          </a>
        </div>
      </div>
    </div>
    <div class="main-page__about about">
      <div class="about__container _container">
        <div class="about__body">
          <div class="about__img-wrapper">
            <div class="about__column">
              <img src="@/assets/images/main/about/01.jpg" alt="about" />
              <img src="@/assets/images/main/about/02.jpg" alt="about" />
            </div>
            <div class="about__column" style="margin-top: 30px">
              <img src="@/assets/images/main/about/03.jpg" alt="about" />
            </div>
          </div>
          <div class="about__content">
            <div class="about__title">О компании</div>
            <div class="about__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <a class="about__link" href="">
              <dp-button-white>читать</dp-button-white>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ArrowLeft from "../components/UI/ArrowLeft.vue";
import ArrowRight from "../components/UI/ArrowRight.vue";
import DpButtonWhite from "../components/UI/DpButtonWhite.vue";
export default {
  components: { ArrowRight, ArrowLeft, DpButtonWhite },
  name: "MainPage",
};
</script>

<style lang="scss">
.main-page {
  &__project {
  }
  &__about {
    padding-top: 120px;
    padding-bottom: 90px;
  }
}
//==============project==========================
.project {
  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__content {
    margin-top: 336px;
    > *:not(:last-child) {
      margin-bottom: 90px;
    }
  }

  &__name {
    font-weight: 300;
    font-size: 64px;
    line-height: 100%;

    color: #bdbdbd;
  }

  &__name span {
    font-weight: 700;

    color: #333333;
  }

  &__arrows {
    display: flex;
    > *:not(:last-child) {
      margin-right: 23px;
    }
  }

  &__pages-wrapper {
    display: flex;
    align-items: center;
    > *:not(:last-child) {
      margin-right: 26px;
    }
  }

  &__page {
    font-size: 24px;
    line-height: 100%;

    color: #bdbdbd;
  }

  &__page-break {
  }

  &__media {
    position: relative;
  }

  &__img {
  }

  &__button {
    position: absolute;
    top: calc(100% - 70px);
    z-index: 2;
  }
}

//====================about====================
.about {
  &__container {
  }

  &__body {
    display: flex;
    justify-content: center;
    margin: 0 -15px;
    padding: 30px 0;
    background: #fbfbfb;

    > * {
      margin: 0 15px;
    }
  }

  &__img-wrapper {
    display: flex;
    margin: 0 -15px;
    > * {
      margin: -15px 15px;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    > * {
      margin: 15px 0;
    }
  }

  &__content {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-content: left;

    > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__title {
    font-weight: 300;
    font-size: 64px;
    line-height: 100%;

    color: #bdbdbd;
  }

  &__description {
    font-weight: 300;
    font-size: 16px;
    line-height: 156%;

    color: #000000;
  }

  &__link {
    max-width: 220px;
  }
}
</style>