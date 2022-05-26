<template>
  <div class="button-white">
    <div class="button-white__text"><slot></slot></div>
    <img
      src="@/assets/images/UI/arrow-2-right.svg"
      alt=""
      class="button-white__arrow"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.button-white {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px 50px;
  max-width: 222px;
  transition-duration: 1s;

  background: #ffffff;

  &:hover {
    background: rgb(218, 217, 217);
    > *:last-child {
      margin-right: -10px;
    }
  }

  > *:not(:last-child) {
    margin-right: 12px;
  }
  &__text {
    font-size: 12px;
    line-height: 100%;

    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  &__arrow {
    transition-duration: 1s;
  }
}
</style>