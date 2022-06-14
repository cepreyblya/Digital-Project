<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <div class="dialog__close-wrapper">
        <img
          src="@\assets\images\UI\close.svg"
          alt="close"
          @click="hideDialog"
          class="dialog__close"
        />
      </div>
      <div class="dialog__success-wrapper">
        <img
          src="@\assets\images\UI\success.jpg"
          alt="success"
          class="dialog__success"
        />
      </div>
      <div class="dialog__text-area">
        <div class="dialog__title">Спасибо !</div>
        <div class="dialog__text">
          Ваше сообщение отправлено мы свяжемся с вами в ближайшее время
        </div>
      </div>
      <div class="button-black" @click="hideDialog">
        <div class="button-black__text">вернуться назад</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
      this.$emit("clearInputs");
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.5);

  &__content {
    display: flex;
    flex-direction: column;
    margin: auto;
    background: white;
    padding: 26px 39px;
    max-width: 470px;
    max-height: 590px;
  }

  &__close-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 9px;
  }

  &__close {
    cursor: pointer;
  }

  &__success-wrapper {
    display: flex;
    justify-content: center;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  &__success {
  }

  &__text-area {
    text-align: center;
    &:not(:last-child) {
      margin-bottom: 42px;
    }
    > *:not(:last-child) {
      padding-bottom: 27px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 108%;

    letter-spacing: 0.03em;
  }

  &__text {
    font-weight: 600;
    font-size: 14px;
    line-height: 186%;

    letter-spacing: 0.03em;

    color: #4f4f4f;
  }
}
.button-black {
  &:hover {
    > *:last-child {
      margin-right: 0px;
    }
  }

  &__text {
  }
}
</style>