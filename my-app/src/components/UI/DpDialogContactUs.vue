<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <div class="dialog__header">
        <div class="dialog__title">Задать вопрос</div>
        <img
          src="@\assets\images\UI\close.svg"
          alt="close"
          class="dialog__close"
          @click="hideDialog"
        />
      </div>
      <form class="contact-form" @submit.prevent action="#">
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
        <button class="button-black" @click="formScanner">
          <div class="button-black__text">отправить</div>
        </button>
      </form>
    </div>
  </div>
  <dp-dialog-success v-model:show="dialogVisible"></dp-dialog-success>
</template>

<script>
import DpInput from "@/components/UI/DpInput.vue";
import DpCheckbox from "@/components/UI/DpCheckbox.vue";
import DpDialogSuccess from "./DpDialogSuccess.vue";
export default {
  components: {
    DpInput,
    DpCheckbox,
    DpDialogSuccess,
  },
  data() {
    return {
      form: {
        name: "",
        tel: "",
        email: "",
        service: "",
        msg: "",
        checked: false,
      },
      dialogVisible: false,
    };
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
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
    hideDialog() {
      this.$emit("update:show", false);
    },
    formScanner() {
      if (
        (this.form.tel.length > 10) &
        (this.form.email.length != 0) &
        (this.form.email.indexOf("@") > -1) &
        (this.form.msg.length != 0) &
        this.form.checked
      ) {
        this.dialogVisible = true;
        this.$emit("update:show", false);
      }
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
    margin: auto;
    background: white;
    padding: 26px 39px;
    max-width: 470px;
    max-height: 590px;
  }

  &__header {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  &__title {
    align-self: center;
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    letter-spacing: 0.04em;
  }

  &__close {
    align-self: end;
    margin-top: -20px;
    cursor: pointer;
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