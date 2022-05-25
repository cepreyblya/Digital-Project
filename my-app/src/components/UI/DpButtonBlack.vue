<template>
  <div class="button-black">
    <div class="button-black__text"><slot></slot></div>
    <img
      src="@/assets/images/UI/arrow-2-right-white.svg"
      alt=""
      class="button-black__arrow"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.button-black {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px 39px;
  transition-duration: 1s;

  background: #000;

  > *:not(:last-child) {
    margin-right: 12px;
  }
  &__text {
    font-size: 12px;
    line-height: 100%;

    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: white;
  }

  &__arrow {
  }
}
.button-black:hover {
  background: rgb(24, 24, 24);

  &__arrow {
  }
}
</style>