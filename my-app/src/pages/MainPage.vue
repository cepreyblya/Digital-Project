<template>
  <main class="main-page">
    <div class="main-page__project project">
      <div class="project__container _container">
        <div class="project__content">
          <h1 v-if="pages.list == 1" class="project__name">
            PROJECT<br /><span>NURTOWN</span>
          </h1>
          <h1 v-else class="project__name">
            PROJECT<br /><span>NURTOWN2</span>
          </h1>
          <dp-arrows @pageTransfer="setPage" :pages="pages" />
          <dp-pages :pages="pages" />
        </div>
        <div class="project__media">
          <img
            v-if="pages.list == 1"
            src="@/assets/images/main/01.jpg"
            alt="project"
            class="project__img"
          />
          <img
            v-else
            src="@/assets/images/main/02.jpg"
            alt="project"
            class="project__img"
          />
          <a v-if="pages.list == 1" href="https://www.youtube.com/">
            <dp-button-white class="project__button">взглянуть</dp-button-white>
          </a>
          <a v-else href="https://www.google.com/">
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
    <div class="main-page__tasks tasks">
      <div class="tasks__container _container">
        <div class="tasks__body">
          <div class="tasks__title">Основные задачи</div>
          <div class="tasks__objective-wrapper">
            <div class="tasks__objective">
              <div class="tasks__number">1</div>
              <div class="tasks__description">
                Создание комфортных условий и повышение качества обслуживания
                клиентов
              </div>
            </div>
            <div class="tasks__objective">
              <div class="tasks__number">2</div>
              <div class="tasks__description" style="line-height: 127%">
                Постоянно совершенствовать качество предоставляемых услуг путем
                обучения персонала, закупки нового оборудования и усиленной
                рекламы на рынке
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-page__our-projects our-projects">
      <div class="our-projects__container _container">
        <div class="our-projects__body">
          <div class="our-projects__title">Наши проекты</div>
          <div class="our-projects__img-wrapper">
            <div class="our-projects__row">
              <dp-our-projects :projectImg="'01.jpg'" class="our-projects__item"
                >ДОСУГОВЫЙ<br />
                ЦЕНТР</dp-our-projects
              >
              <dp-our-projects :projectImg="'02.jpg'" class="our-projects__item"
                >ВЕЕРНАЯ<br />ТЕМА</dp-our-projects
              >
            </div>
            <div class="our-projects__row">
              <dp-our-projects :projectImg="'03.jpg'" class="our-projects__item"
                >ДОСУ<br />ГОВЫЙ<br />ЦЕНТР</dp-our-projects
              >
              <dp-our-projects :projectImg="'04.jpg'" class="our-projects__item"
                >ДОСУГОВЫЙ<br />
                ЦЕНТР</dp-our-projects
              >
              <dp-our-projects :projectImg="'05.jpg'" class="our-projects__item"
                >ДОСУ<br />ГОВЫЙ<br />
                ЦЕНТР</dp-our-projects
              >
            </div>
          </div>
          <a href="" class="our-projects__button">
            <dp-button-black>все проекты</dp-button-black>
          </a>
        </div>
      </div>
    </div>
    <div class="main-page__contact-us contact-us">
      <div class="contact-us__container _container">
        <div class="contact-us__body">
          <div class="contact-us__title">Связаться с нами</div>
          <div class="contact-us__content">
            <form class="contact-us__form contact-form" action="#">
              <div class="contact-form__input-wrapper">
                <dp-input
                  v-model="form.name"
                  class="contact-form__input"
                  placeholder="Имя"
                />
                <dp-input
                  v-model="form.tel"
                  class="contact-form__input"
                  @keypress="isNumber($event)"
                  placeholder="Номер телефона*"
                  type="tel"
                  required
                  maxlength="12"
                  minlength="10"
                />
                <dp-input
                  v-model="form.email"
                  class="contact-form__input"
                  placeholder="E-mail*"
                  type="email"
                  required
                />
                <dp-input
                  v-model="form.service"
                  class="contact-form__input"
                  placeholder="Интересующий товар/услуга"
                />
                <dp-input
                  v-model="form.msg"
                  class="contact-form__input"
                  placeholder="Сообщение*"
                  required
                />
              </div>
              <dp-checkbox v-model="form.checked"
                >Отправляя заявку Вы соглашаетесь с политикой
                конфиденциальности</dp-checkbox
              >
              <button type="submit" class="contact-form__button">
                <dp-button-black> отправить </dp-button-black>
              </button>
            </form>
            <img
              src="@/assets/images/main/contact_us/01.jpg"
              alt="contact-us"
              class="contact-us"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import DpOurProjects from "../components/items/DpOurProjects.vue";
import DpArrows from "../components/UI/DpArrows.vue";
import DpButtonBlack from "../components/UI/DpButtonBlack.vue";
import DpButtonWhite from "../components/UI/DpButtonWhite.vue";
import DpInput from "@/components/UI/DpInput.vue";
import DpCheckbox from "../components/UI/DpCheckbox.vue";
import DpPages from "../components/items/DpPages.vue";
export default {
  components: {
    DpArrows,
    DpButtonWhite,
    DpButtonBlack,
    DpOurProjects,
    DpInput,
    DpCheckbox,
    DpPages,
  },
  name: "MainPage",
  data() {
    return {
      pages: {
        list: 1,
        totalPages: 2,
      },
      form: {
        name: "",
        tel: "",
        email: "",
        service: "",
        msg: "",
        checked: false,
      },
    };
  },
  methods: {
    isNumber(evt) {
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 43
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    setPage(page) {
      this.pages.list = page;
    },
  },
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
  &__tasks {
  }
  &__our-projects {
    padding: 120px 0;
  }
  &__contact-us {
    padding-bottom: 120px;
  }
}
//==============project==========================
.project {
  &__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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

  &__media {
    position: relative;
  }

  &__img {
  }

  &__button {
    position: absolute;
    top: calc(100% - 72px);
    z-index: 2;
    min-width: 222px;
  }
}

//====================about====================
.about {
  &__container {
  }

  &__body {
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
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

//==================tasks==================
.tasks {
  &__container {
  }

  &__body {
    > * {
      margin-bottom: 60px;
    }
  }

  &__title {
    font-weight: 300;
    font-size: 64px;
    line-height: 100%;

    color: #bdbdbd;
  }

  &__objective-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__objective {
    display: flex;
    align-items: center;
    max-height: 144px;

    > *:not(:last-child) {
      margin-right: 30px;
    }
  }

  &__objective:first-child {
    max-width: 413px;
  }

  &__objective:last-child {
    max-width: 570px;
  }

  &__number {
    font-family: "SFPro";
    font-weight: 900;
    font-size: 200px;

    color: #f2f2f2;
  }

  &__description {
    max-width: 420px;

    font-weight: 400;
    font-size: 22px;
    line-height: 164%;
  }
}

//===============our-projects======================
.our-projects {
  &__container {
  }

  &__body {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-weight: 300;
    font-size: 64px;
    line-height: 100%;

    color: #bdbdbd;

    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }

  &__img-wrapper {
    > *:not(:last-child) {
      padding-bottom: 30px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__item {
  }

  &__button {
    margin-top: 30px;
    align-self: flex-end;
  }
}
//=================contact-us======================
.contact-us {
  &__container {
  }

  &__body {
  }

  &__title {
    margin-bottom: 22px;

    font-weight: 300;
    font-size: 64px;
    line-height: 100%;

    color: #bdbdbd;
  }

  &__content {
    display: flex;
    > *:not(:last-child) {
      margin-right: 30px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
  }
}
.contact-form {
  &__input-wrapper {
    display: flex;
    flex-direction: column;
    > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__input {
  }

  &__button {
    align-self: start;
    padding: 0;
    border: none;
  }
}
</style>