<template>
  <footer class="footer">
    <div class="footer__top footer-top">
      <div class="footer-top__container _container">
        <div class="footer-top__body">
          <div class="footer-top__logo">
            <img src="..\assets\images\footer\logo.svg" alt="logo" />
          </div>
          <div class="footer-top__column">
            <div class="footer-top__label">Информация</div>
            <nav class="footer-top__menu">
              <ul class="footer-top__list">
                <li class="footer-top__item info-item">
                  <a class="info-item__link">Главная</a>
                </li>
                <li class="footer-top__item info-item">
                  <a class="info-item__link">Галерея</a>
                </li>
                <li class="footer-top__item info-item">
                  <a class="info-item__link">Проекты</a>
                </li>
                <li class="footer-top__item info-item">
                  <a class="info-item__link">Сертификаты</a>
                </li>
                <li class="footer-top__item info-item">
                  <a class="info-item__link">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="footer-top__column">
            <div class="footer-top__label">Контакты</div>
            <nav class="footer-top__menu contacts__menu">
              <ul class="footer-top__list contacts__list">
                <li class="footer-top__item contact-item">
                  <a href="" class="contact-item__link">
                    <img
                      src="..\assets\images\footer\contacts\01.svg"
                      alt="contact"
                      class="contact-item__img"
                    />
                    <div class="contact-item__text">
                      100000, Республика Казахстан,<br />
                      г. Караганда, ул.Телевизионная 10
                    </div>
                  </a>
                </li>
                <li class="footer-top__item contact-item">
                  <a href="tel:+77017776811" class="contact-item__link">
                    <img
                      src="..\assets\images\footer\contacts\02.svg"
                      alt="contact"
                      class="contact-item__img"
                    />
                    <div class="contact-item__text">+7 (701) 77 76 811</div>
                  </a>
                </li>
                <li class="footer-top__item contact-item">
                  <a
                    href="mailto:Galym.sultanov@mail.ru"
                    class="contact-item__link"
                  >
                    <img
                      src="..\assets\images\footer\contacts\03.svg"
                      alt="contact"
                      class="contact-item__img"
                    />
                    <div class="contact-item__text">Galym.sultanov@mail.ru</div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="footer-top__column">
            <div class="footer-top__label">Социальные сети</div>
            <div class="footer-top__social social">
              <a href="" class="social__link">
                <img
                  src="..\assets\images\footer\socials\01.svg"
                  alt="social"
                  class="social__img"
                />
              </a>
              <a href="" class="social__link"
                ><img
                  src="..\assets\images\footer\socials\02.svg"
                  alt="social"
                  class="social__img"
              /></a>
              <a href="" class="social__link"
                ><img
                  src="..\assets\images\footer\socials\03.svg"
                  alt="social"
                  class="social__img"
              /></a>
              <a href="" class="social__link"
                ><img
                  src="..\assets\images\footer\socials\04.svg"
                  alt="social"
                  class="social__img"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__line" />
    <div class="footer__bottom">
      © 2019 Digital Project. Все права защищены.
    </div>
  </footer>
</template>

<script>
export default {
  name: "DpFooter",
};
</script>

<style lang="scss">
.footer {
  background: #2c2c2c;

  &__top {
    color: #ffffff;
    padding: 58px 0;
  }

  &__line {
    opacity: 0.1;
    border: 1px solid #ffffff;
  }

  &__bottom {
    padding: 24px 0;

    display: flex;
    justify-content: center;

    font-weight: 400;
    font-size: 12px;
    line-height: 183%;
    color: rgba(200, 200, 200, 0.5);
  }
}
.footer-top {
  &__container {
  }

  &__body {
    margin-left: -18px;

    display: flex;
    align-items: top;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__logo {
  }

  &__column {
    > *:not(:last-child) {
      padding-bottom: 25px;
    }
  }

  &__label {
    font-weight: 700;
    font-size: 16px;
    line-height: 125%;
  }

  &__menu {
  }

  &__list {
  }

  &__item {
    font-weight: 500;
    font-size: 14px;
    line-height: 171%;
  }

  &__social {
  }
}
.contacts__menu {
  height: 73%;
}
.contacts__list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info-item {
  &__link {
  }
}

.info-item:not(:last-child) {
  padding-bottom: 16px;
}

.contact-item {
  &__link {
    display: flex;
    > *:not(:last-child) {
      margin-right: 18px;
    }
  }

  &__img {
  }

  &__text {
  }
}
.social {
  margin: 0 -20px;
  &__link {
    margin: 0 20px;
  }

  &__img {
  }
}
</style>