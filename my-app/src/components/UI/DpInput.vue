<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss">
.input {
  background: #f3f3f3;
  min-height: 46px;
  border: none;

  padding: 0 21px;

  &:focus {
    outline: none !important;
  }

  &::placeholder {
    font-family: "TT Hoves";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;

    color: #8d8d8d;
  }
}
</style>