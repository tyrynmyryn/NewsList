<template>
  <div class="container">
    <div class="create-news">
      <div class="create-news__title">
        <div class="title">Заголовок:</div>
        <input
          v-model="$store.state.data[$route.params.index].title"
          type="text"
          class="text-input text-input_change"
        />
      </div>
      <div class="create-news__text">
        <div class="title">Текст новости:</div>
        <textarea
          v-model="$store.state.data[$route.params.index].text"
          cols="30"
          rows="10"
          class="text-input text-input_change"
        ></textarea>
      </div>
      <div
        class="btn btn_change create-news__btn"
        @click="
          $store.commit('changeNews', $route.params.index);
		  !$store.state.errorValidate ? $router.push('/') : null
        "
      >
        Изменить
      </div>
      <div class="error" :style="{ display: $store.state.errorValidate ? 'block' : 'none' }">
        Для изменения новости, пожалуйста, корректно заполните все поля
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.create-news {
  &__text {
    margin-top: 30px;
  }
  &__btn {
    margin: 0 auto;
    margin-top: 30px;
  }
}
</style>