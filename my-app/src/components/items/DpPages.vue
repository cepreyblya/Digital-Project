<template>
  <div class="pages-wrapper">
    <div class="pages-wrapper__page">0{{ pages.list }}</div>
    <div class="pages-wrapper__page-break">
      <img src="@/assets/images/UI/line.svg" alt="line" />
    </div>
    <div class="pages-wrapper__page">0{{ pages.totalPages }}</div>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.pages-wrapper {
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 26px;
  }

  &__page {
    font-size: 24px;
    line-height: 100%;

    color: #bdbdbd;
  }

  &__page-break {
  }
}
</style>