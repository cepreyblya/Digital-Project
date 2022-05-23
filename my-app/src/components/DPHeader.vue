<template>
  <header class="header">
    <div class="header__container _container">
      <div class="header__wrapper">
        <div class="header__logo">
          <img src="..\assets\images\01.svg" alt="logo" />
        </div>
        <nav class="header__nav-items-wrapper">
          <div class="header__nav-item nav-item" @click="itemActiveMain">
            <div v-if="isActiveMain" class="nav-item__line" />
            <a href="" class="nav-item__link">главная</a>
            <div v-if="isActiveMain" class="nav-item__line" />
          </div>
          <div class="header__nav-item nav-item" @click="itemActiveGallery">
            <div v-if="isActiveGallery" class="nav-item__line" />
            <a href="" class="nav-item__link">галерея</a>
            <div v-if="isActiveGallery" class="nav-item__line" />
          </div>
          <div class="header__nav-item nav-item" @click="itemActiveProjects">
            <div v-if="isActiveProjects" class="nav-item__line" />
            <a href="" class="nav-item__link">проекты</a>
            <div v-if="isActiveProjects" class="nav-item__line" />
          </div>
          <div
            class="header__nav-item nav-item"
            @click="itemActiveSertificates"
          >
            <div v-if="isActiveSertificates" class="nav-item__line" />
            <a href="" class="nav-item__link">сертификаты</a>
            <div v-if="isActiveSertificates" class="nav-item__line" />
          </div>
          <div class="header__nav-item nav-item" @click="itemActiveContacts">
            <div v-if="isActiveContacts" class="nav-item__line" />
            <a href="" class="nav-item__link">контакты</a>
            <div v-if="isActiveContacts" class="nav-item__line" />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "DpHeader",
  data() {
    return {
      isActiveMain: true,
      isActiveGallery: false,
      isActiveProjects: false,
      isActiveSertificates: false,
      isActiveContacts: false,
    };
  },
  methods: {
    itemActiveMain() {
      this.isActiveMain = true;
      this.isActiveGallery = false;
      this.isActiveProjects = false;
      this.isActiveSertificates = false;
      this.isActiveContacts = false;
    },
    itemActiveGallery() {
      this.isActiveMain = false;
      this.isActiveGallery = true;
      this.isActiveProjects = false;
      this.isActiveSertificates = false;
      this.isActiveContacts = false;
    },
    itemActiveProjects() {
      this.isActiveMain = false;
      this.isActiveGallery = false;
      this.isActiveProjects = true;
      this.isActiveSertificates = false;
      this.isActiveContacts = false;
    },
    itemActiveSertificates() {
      this.isActiveMain = false;
      this.isActiveGallery = false;
      this.isActiveProjects = false;
      this.isActiveSertificates = true;
      this.isActiveContacts = false;
    },
    itemActiveContacts() {
      this.isActiveMain = false;
      this.isActiveGallery = false;
      this.isActiveProjects = false;
      this.isActiveSertificates = false;
      this.isActiveContacts = true;
    },
  },
};
</script>

<style lang="scss">
.header {
  &__container {
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 29px 0;
  }

  &__logo {
  }

  &__logo img {
    width: 70px;
    height: 44px;
  }

  &__nav-items-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -30px;
  }
  @media (min width: 1300) {
    &__nav-items-wrapper {
      padding-right: 134px;
    }
  }

  &__nav-item {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.nav-item {
  &__line {
    width: 100%;
    height: 0.97px;
    background: black;
  }

  &__link {
    padding: 4px 0;

    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
}
</style>