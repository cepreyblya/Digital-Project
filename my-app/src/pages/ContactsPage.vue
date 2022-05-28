<template>
  <main class="contacts-page">
    <div class="contacts-page__container _container">
      <div class="contacts-page__body">
        <h2 class="contacts-page__title">
          КОНТАКТНАЯ<br /><span>ИНФОРМАЦИЯ</span>
        </h2>
        <div class="contacts-page__contacts">
          <div class="contacts-page__item">
            <div class="contacts-page__name">«Digital Project»</div>
            <div class="contacts-page__location">
              г. Караганда, ул. Телевизионная 10
            </div>
          </div>
          <div class="contacts-page__item">
            <a href="tel:+77017776811" class="contacts-page__tel">
              +7 (701) 77 76 811
            </a>
          </div>
          <div class="contacts-page__item">
            <a href="mailto:Galym.sultanov@mail.ru" class="contacts-page__mail"
              >Galym.sultanov@mail.ru</a
            >
          </div>
        </div>
        <div class="button-black" @click="dialogVisible = true">
          <div class="button-black__text">обратная связь</div>
        </div>
      </div>
      <img
        class="contacts-page__map"
        src="@/assets/images/contacts/01.jpg"
        alt="map"
      />
    </div>
  </main>
  <dp-dialog-contact-us v-model:show="dialogVisible"></dp-dialog-contact-us>
</template>

<script>
import DpDialogContactUs from "../components/UI/DpDialogContactUs.vue";
export default {
  components: { DpDialogContactUs },
  name: "ContactsPage",
  data() {
    return {
      dialogVisible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.contacts-page {
  padding: 0 0 120px 0;
  &__container {
    display: flex;
  }

  &__body {
    padding-top: 65px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > *:not(:last-child) {
      margin-bottom: 34px;
    }
    &:not(:last-child) {
      padding-right: 34px;
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

  &__contacts {
    > *:not(:last-child) {
      margin-bottom: 45px;
    }
  }

  &__item {
    font-weight: 300;
    font-size: 16px;
    line-height: 125%;
  }

  &__name {
    font-weight: 700;
    font-size: 18px;
    line-height: 122%;
  }

  &__location {
  }

  &__tel {
    font-weight: 700;
    font-size: 18px;
    line-height: 122%;
  }

  &__mail {
  }

  &__map {
  }

  @media (max-width: 1396px) {
    &__container {
      flex-wrap: wrap;
    }
    &__body:not(:last-child) {
      padding-bottom: 34px;
    }
    &__map {
      width: 100%;
    }
  }
}

.button-black {
  > *:last-child {
    margin-right: 0px;
  }
}
</style>