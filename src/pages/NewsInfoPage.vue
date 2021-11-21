<template>
  <div class="container">
    <div class="news-info">
      <p class="news-info__text">
        {{ $store.state.data[$route.params.index].text }}
      </p>
      <div class="btn btn_add news-info__btn" @click="$router.push('/')">
        Главная
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.news-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__text {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: #000000;
  }
  &__btn {
    margin-top: 50px;
  }
}
</style>