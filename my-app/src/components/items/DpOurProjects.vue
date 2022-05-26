<template>
  <div
    class="our-projects__item project-item"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <img
      :src="require('@/assets/images/main/our_projects/' + projectImg)"
      alt="our-project"
      class="project-item__img"
    />
    <div class="project-item__about" v-show="isHover">
      <div class="project-item__about-container">
        <transition>
          <div class="project-item__title" v-show="isHover">
            <slot></slot>
          </div>
        </transition>
        <a href="" class="project-item__link">
          <div class="project-item__more-info">подробнее</div>
          <img
            src="@/assets/images/UI/arrow-2-right-white.svg"
            alt=""
            class="project-item__arrow"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHover: false,
    };
  },
  props: {
    projectImg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.project-item {
  position: relative;
  &__img {
  }

  &__about {
    background: #333333;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__about-container {
    > *:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 64px;
    line-height: 100%;

    color: #ffffff;
  }

  &__link {
    display: flex;
    align-items: center;
    max-width: 130px;
    > *:not(:last-child) {
      transition-duration: 1s;
      margin-right: 12px;
    }
    &:hover {
      > *:not(:last-child) {
        margin-right: 22px;
      }
    }
  }

  &__more-info {
    font-size: 12px;
    line-height: 100%;

    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #ffffff;
  }

  &__arrow {
  }
}
</style>