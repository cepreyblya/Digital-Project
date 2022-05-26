<template>
  <div class="arrow-wrapper">
    <div class="arrow-wrapper__arrow" @click="pageDecrement">
      <img src="@/assets/images/UI/arrow-2-left.svg" alt="" />
    </div>
    <div class="arrow-wrapper__arrow" @click="pageIncrement">
      <img src="@/assets/images/UI/arrow-2-right.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: 1,
    };
  },
  props: {
    pages: {
      type: Object,
      required: true,
    },
  },
  methods: {
    pageDecrement() {
      if (this.list > 1) {
        this.list -= 1;
        this.$emit("pageTransfer", this.list);
      }
    },
    pageIncrement() {
      if (this.list < this.pages.totalPages) {
        this.list += 1;
        this.$emit("pageTransfer", this.list);
      }
    },
  },
};
</script>

<style lang="scss">
.arrow-wrapper {
  display: flex;
  > *:not(:last-child) {
    margin-right: 23px;
  }
  &__arrow {
    padding: 14px;

    background: #f9f9f9;
    border: 1px solid #f2f2f2;
    transition-duration: 1s;

    cursor: pointer;

    &:hover {
      background: #e1e0e0;
    }
  }
}
</style>