<template>
  <main class="project-page">
    <div class="project-page__container _container">
      <div class="project-page__title">
        <div><slot name="title-1">ПАРКИНГ НА</slot><br /></div>
        <span><slot name="title-2">500 АВТОМОБИЛЕЙ</slot></span>
      </div>
      <div class="project-page__content">
        <div class="project-page__header">
          <slot name="img-1">
            <img src="@/assets/images/project/01.jpg" alt="project" />
          </slot>
        </div>
        <div class="project-page__body">
          <slot name="img-2">
            <img src="@/assets/images/project/02.jpg" alt="project" />
          </slot>
          <div>
            <slot name="description"
              >Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with.
            </slot>
          </div>
        </div>
        <div class="project-page__footer">
          <slot name="img-3">
            <img src="@/assets/images/project/03.jpg" alt="project" />
          </slot>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.project-page {
  padding: 60px 0 120px 0;
  &__container {
    > *:not(:last-child) {
      padding-bottom: 60px;
    }
  }

  &__title {
    > *:first-child {
      font-weight: 300;
      font-size: 64px;
      line-height: 100%;

      color: #bdbdbd;
    }
    > *:last-child {
      font-weight: 700;
      font-size: 64px;
      line-height: 100%;

      color: #333333;
    }
  }

  &__content {
    > *:not(:last-child) {
      padding-bottom: 30px;
    }
  }

  &__header {
  }

  &__body {
    display: flex;

    font-weight: 300;
    font-size: 16px;
    line-height: 156%;

    color: #000000;

    > *:not(:last-child) {
      margin-right: 30px;
    }
    & img {
      max-height: 428px;
      width: 100%;
    }
  }

  @media (max-width: 960px) {
    &__body {
      flex-wrap: wrap;

      > *:not(:last-child) {
        margin-right: 0;
      }
    }
  }

  &__footer {
  }
}
</style>