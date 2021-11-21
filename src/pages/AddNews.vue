<template>
  <div class="container">
    <div class="create-news">
      <div class="create-news__title">
        <div class="title">Заголовок:</div>
        <input
          v-model="newsItem.title"
          type="text"
          class="text-input text-input_add"
        />
      </div>
      <div class="create-news__text">
        <div class="title">Текст новости:</div>
        <textarea
          v-model="newsItem.text"
          cols="30"
          rows="10"
          class="text-input text-input_add"
        ></textarea>
      </div>
      <div
        class="btn btn_add create-news__btn"
        @click="
          $store.commit('addNewNews', newsItem);
          !$store.state.errorValidate ? $router.push('/') : null;
        "
      >
        Добавить
      </div>
      <div
        class="error"
        :style="{ display: $store.state.errorValidate ? 'block' : 'none' }"
      >
        Для добавления новости, пожалуйста, корректно заполните все поля
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsItem: {
        title: "",
        text: "",
      },
    };
  }
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