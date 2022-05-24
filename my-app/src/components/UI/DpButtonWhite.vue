<template>
  <div class="button">
    <div class="button__text"><slot></slot></div>
    <img
      src="@/assets/images/UI/arrow-2-right.svg"
      alt=""
      class="button__arrow"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px 50px;
  max-width: 222px;

  background: #ffffff;

  > *:not(:last-child) {
    margin-right: 12px;
  }
  &__text {
    font-size: 12px;
    line-height: 100%;

    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #333333;
  }

  &__arrow {
  }
}
</style>