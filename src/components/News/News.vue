<template>
  <div class="news">
    <div class="news__text" @click="$router.push(`/post/${newsIndex}`)">
      {{ title }}
    </div>
    <div
    :title="title"
      class="btn btn_change btn_mr"
      @click="
        $router.push(`/edit/${newsIndex}`);
      "
    >
      Изменить
    </div>
    <div class="btn btn_delete" @click="$store.commit('deleteNews', newsId)">
      Удалить
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "newsIndex", "newsId"],
};
</script>

<style lang="scss">
.news {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  &__text {
    width: 100%;
    margin-right: 25px;
    background: rgba(130, 130, 130, 0.75);
    border-radius: 10px;
    padding: 15px 30px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    transition: 0.2s all;
    cursor: pointer;
    &:hover {
      background: rgba(130, 130, 130, 1);
    }
  }
}
</style>