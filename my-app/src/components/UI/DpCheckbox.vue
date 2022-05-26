<template>
  <div class="checkbox-wrapper">
    <input
      id="checkbox"
      class="checkbox-wrapper__checkbox"
      type="checkbox"
      required
      v-model="checked"
      @change="updateCheckbox"
    />
    <label for="checkbox" class="checkbox-wrapper__label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: "",
    };
  },
  props: {
    modelValue: [Boolean],
  },
  methods: {
    updateCheckbox() {
      this.$emit("update:modelValue", this.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  > *:not(:last-child) {
    margin-right: 19px;
  }

  &__checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__checkbox + &__label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  &__checkbox + &__label::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 4px;
    margin-right: 19px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  &__checkbox:checked + &__label::before {
    border: none;
    background-color: #f3f3f3;
    background-image: url("@/assets/images/UI/checkbox.svg");
  }

  &__checkbox:not(:checked) + &__label:hover::before {
    background-color: #d3d1d1;
    border: none;
  }

  &__label {
    font-size: 14px;
    line-height: 121%;
    letter-spacing: 0.03em;
  }
}
</style>